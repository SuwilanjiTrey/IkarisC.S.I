<template>
  <div class="canvas-container">
    <div class="phone-frame">
      <div class="screen-area">
        <div 
          ref="canvas"
          class="canvas" 
          :class="deviceType"
          @dragover.prevent
          @drop="handleDrop($event)"
        >
          <div 
            v-for="(element, index) in elements" 
            :key="element.id"
            class="canvas-element"
            :class="{ 'selected': selectedElementIndex === index }"
            :data-element-id="element.id"
            :data-index="index"
            :style="{ 
              left: element.x + 'px', 
              top: element.y + 'px', 
              width: element.width + 'px', 
              height: element.height + 'px' 
            }"
            @mousedown="startMove($event, index)"
            @click.stop="selectElement(index)"
            @contextmenu.prevent="handleContextMenu($event, element.id)"
            draggable="true"
            @dragstart="startDrag($event, index)"
          >
            <img 
              v-if="element.currentImage" 
              :src="element.currentImage" 
              :alt="element.displayName"
              class="element-image"
            />
            <span v-else>{{ element.displayName || element.type }}</span>

            {{ element.type }}
    
            <!-- Constraint Nodes -->
            <div class="constraint-nodes">
              <div 
                class="constraint-node top"
                @dblclick.stop="handleNodeClick(index, 'top')"
                :class="{
                  'connected': hasConnection(element, 'top'),
                  'selected-node': isNodeSelected(element.id, 'top')
                }"
                style="top: -6px; left: calc(50% - 4px);"
              ></div>

              <div 
                class="constraint-node bottom"
                @dblclick.stop="handleNodeClick(index, 'bottom')"
                :class="{
                  'connected': hasConnection(element, 'bottom'),
                  'selected-node': isNodeSelected(element.id, 'bottom')
                }"
                style="bottom: -6px; left: calc(50% - 4px);"
              ></div>
              
              <div 
                class="constraint-node start"
                @dblclick.stop="handleNodeClick(index, 'start')"
                :class="{
                  'connected': hasConnection(element, 'start'),
                  'selected-node': isNodeSelected(element.id, 'start')
                }"
                style="left: -6px; top: calc(50% - 4px);"
              ></div>
              
              <div 
                class="constraint-node end"
                @dblclick.stop="handleNodeClick(index, 'end')"
                :class="{
                  'connected': hasConnection(element, 'end'),
                  'selected-node': isNodeSelected(element.id, 'end')
                }"
                style="right: -6px; top: calc(50% - 4px);"
              ></div>
            </div>

            <!-- Connection Lines -->
            <svg class="connection-lines">
              <line
                v-for="line in connectionLines"
                :key="line.id"
                :x1="line.x1"
                :y1="line.y1"
                :x2="line.x2"
                :y2="line.y2"
                stroke="#2196F3"
                stroke-width="2"
              />
            </svg>
            
            <div class="resize-handle" @mousedown.stop="startResize($event, index)"></div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="trash-section" 
         @dragover.prevent
         @drop="deleteElement($event)">
      <span>Drag here to delete</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {deviceType: String, elements: Array,},
  data() {
    return {
      selectedElementIndex: null,
      isDragging: false,
      selectedSourceNode: null,
      connections: [],
      connectionLines: [],
    };
  },
  methods: {
    handleNodeClick(elementIndex, nodeType) {
      const element = this.elements[elementIndex];
      
      if (!this.selectedSourceNode) {
        // First node selected - set as source
        this.selectedSourceNode = {
          elementId: element.id,
          nodeType: nodeType,
          elementIndex: elementIndex
        };
      } else {
        // Second node selected - create connection if it's a different node
        if (
          element.id !== this.selectedSourceNode.elementId ||
          nodeType !== this.selectedSourceNode.nodeType
        ) {
          this.createConnection({
            sourceElementId: this.selectedSourceNode.elementId,
            sourceNode: this.selectedSourceNode.nodeType,
            targetElementId: element.id,
            targetNode: nodeType
          });
        }
        // Reset selection
        this.selectedSourceNode = null;
      }
    },

    isNodeSelected(elementId, nodeType) {
      return this.selectedSourceNode && 
             this.selectedSourceNode.elementId === elementId && 
             this.selectedSourceNode.nodeType === nodeType;
    },
  
  // Add the context menu handler
    handleContextMenu(event, elementId) {
      // Emit the context menu event to parent
      this.$emit('contextMenu', event, elementId);
    },

    updateConnectionLine(event) {
      // Update the temporary line as the mouse moves
      if (!this.isConnecting || !this.tempConnectionLine) return;

      const canvasRect = this.$refs.canvas.getBoundingClientRect();
      const x = event.clientX - canvasRect.left;
      const y = event.clientY - canvasRect.top;

      // Update the end point of the temporary line
      this.tempConnectionLine = {
        ...this.tempConnectionLine,
        x2: x,
        y2: y
      };
    },


    updateConnection(event) {
    if (!this.isConnecting || !this.tempConnectionLine) return;
    
    const rect = this.$refs.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    this.tempConnectionLine = {
      ...this.tempConnectionLine,
      x2: x,
      y2: y
    };
  },

  endConnection(event) {
      // Finish the connection process
      if (!this.isConnecting) return;

      // Find the target node (if dropped on a valid element)
      const targetNode = this.findTargetNode(event);
      if (targetNode) {
        const targetElement = this.elements[targetNode.elementIndex];
        const newConnection = {
          id: Date.now(),
          sourceElementId: this.activeConnection.sourceElementId,
          sourceNode: this.activeConnection.sourceNode,
          targetElementId: targetElement.id,
          targetNode: targetNode.nodeType
        };

        // Add the new connection
        this.connections.push(newConnection);
        this.updateConnectionLines();
      }

      this.isConnecting = false;
      this.activeConnection = null;
      this.tempConnectionLine = null;

      window.removeEventListener('mousemove', this.updateConnectionLine);
      window.removeEventListener('mouseup', this.endConnection);
    },

    

    createConnection(connection) {
      // Check for existing connection
      if (this.hasExistingConnection(connection)) {
        return;
      }

      const newConnection = {
        id: Date.now(),
        ...connection
      };

      this.connections.push(newConnection);
      this.$emit('connectionsUpdated', this.connections);
      this.updateConnectionLines();
    },

  updateConnectionLines() {
      this.connectionLines = this.connections.map(conn => {
        const sourceElement = this.elements.find(el => el.id === conn.sourceElementId);
        const targetElement = this.elements.find(el => el.id === conn.targetElementId);

        if (!sourceElement || !targetElement) return null;

        const sourcePoint = this.getNodePosition(sourceElement, conn.sourceNode);
        const targetPoint = this.getNodePosition(targetElement, conn.targetNode);

        return {
          id: conn.id,
          x1: sourcePoint.x,
          y1: sourcePoint.y,
          x2: targetPoint.x,
          y2: targetPoint.y
        };
      }).filter(Boolean);
    },


 // Reuse the method to calculate where the line should connect to the node
  getNodePosition(element, nodeType) {
      let x = element.x;
      let y = element.y;

      switch (nodeType) {
        case 'top':
          x += element.width / 2;
          break;
        case 'bottom':
          x += element.width / 2;
          y += element.height;
          break;
        case 'start':
          y += element.height / 2;
          break;
        case 'end':
          x += element.width;
          y += element.height / 2;
          break;
      }

      return { x, y };
    },


    hasExistingConnection(newConnection) {
      return this.connections.some(conn =>
        (conn.sourceElementId === newConnection.sourceElementId &&
         conn.sourceNode === newConnection.sourceNode &&
         conn.targetElementId === newConnection.targetElementId &&
         conn.targetNode === newConnection.targetNode) ||
        (conn.sourceElementId === newConnection.targetElementId &&
         conn.sourceNode === newConnection.targetNode &&
         conn.targetElementId === newConnection.sourceElementId &&
         conn.targetNode === newConnection.sourceNode)
      );
    },

    // Helper method to find target node
  findTargetNode(event) {
      // Find the closest target node based on the mouse position
      const elements = document.elementsFromPoint(event.clientX, event.clientY);
      const nodeElement = elements.find(el => el.classList.contains('constraint-node'));

      if (nodeElement) {
        const canvasElement = nodeElement.closest('.canvas-element');
        const elementIndex = parseInt(canvasElement.dataset.index);
        const nodeType = Array.from(nodeElement.classList)
          .find(cls => ['top', 'bottom', 'start', 'end'].includes(cls));

        return { elementIndex, nodeType };
      }

      return null;
    },

     hasConnection(element, nodeType) {
      return this.connections.some(conn => 
        (conn.sourceElementId === element.id && conn.sourceNode === nodeType) ||
        (conn.targetElementId === element.id && conn.targetNode === nodeType)
      );
    },



  handleDrop(event) {
    if (this.isDragging) {
      this.isDragging = false;
      return;
    }
    
    
      event.preventDefault();
      const rect = event.target.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Get the transferred data
      const componentData = event.dataTransfer.getData('text/plain');
      
      // Emit with both component data and position
      this.$emit('elementDropped', {
        ...JSON.parse(componentData),
        x,
        y
      });
    }
,

startMove(event, index) {
  if (event.target.classList.contains('resize-handle')) return;

  this.selectElement(index);
  
  const element = this.elements[index];
  if (!element) return;

  const startX = event.clientX;
  const startY = event.clientY;
  const initialX = element.x;
  const initialY = element.y;

  // Get the bounding box of the canvas
  const canvas = event.target.closest('.screen-area');
  
  const onMouseMove = (e) => {
    let newX = initialX + (e.clientX - startX);
    let newY = initialY + (e.clientY - startY);
    
    // Use the actual canvas width/height and element dimensions
    const maxX = canvas.offsetWidth - element.width;
    const maxY = canvas.offsetHeight - element.height;
    
    // Enforce boundaries
    newX = Math.max(0, Math.min(newX, maxX));
    newY = Math.max(0, Math.min(newY, maxY));
    
    this.$emit('updateElementPosition', index, newX, newY);
  };

  const onMouseUp = () => {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };

  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);
},

    startResize(event, index) {
      this.selectElement(index);

      const element = this.elements[index];
      if (!element) return;

      const startX = event.clientX;
      const startY = event.clientY;
      const initialWidth = element.width;
      const initialHeight = element.height;

      const canvasRect = this.$refs.canvas.getBoundingClientRect();
      
      const onMouseMove = (e) => {
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
        
        // Calculate new dimensions
        let newWidth = Math.max(20, initialWidth + deltaX);
        let newHeight = Math.max(20, initialHeight + deltaY);
        
        // Constrain to canvas bounds
        newWidth = Math.min(newWidth, canvasRect.width - element.x);
        newHeight = Math.min(newHeight, canvasRect.height - element.y);
        
        this.$emit('resizeElement', index, newWidth, newHeight);
      };

      const onMouseUp = () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
      };

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    },

    selectElement(index) {
      this.selectedElementIndex = index;
      this.$emit('elementSelected', index);
    },

    startDrag(event, index) {
      this.isDragging = true;
      event.dataTransfer.setData('text/plain', index.toString());
    },

    deleteElement(event) {
      const index = event.dataTransfer.getData('text/plain');
      if (index !== '') {
        this.$emit('deleteElement', parseInt(index, 10));
      }
      this.isDragging = false;
    },
    
  watch: {
    elements: {
      deep: true,
      handler() {
        this.updateConnectionLines();
      }
    }
  }
  }
}
</script>

<style scoped>
@import "../assets/styles/canva.css";
.canvas {
  position:static;
  width: 50%;
  height: 100%;
  background-color: rgba(247, 247, 247, 0);
  overflow: hidden;
  
  border: 2px solid transparent; /* Added to maintain consistent dimensions */

  margin: 0;
  padding: 0;
}

.constraint-node {
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: #f36e21;
  border: 2px solid #2196F3;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
}

.constraint-node.connected {
  background-color: #4CAF50;
}

.constraint-node.selected-node {
  background-color: #FFC107;
  border-color: #FF5722;
  transform: scale(1.2);
}

.connection-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.element-image {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Resizes image to fit within the element */
}

</style>