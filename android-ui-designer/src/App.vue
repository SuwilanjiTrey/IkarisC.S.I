<!-- App.vue -->
<template>
  <div id="app">
    <header>
      <PageManager 
        :pages="pages" 
        @addPage="addNewPage" 
        @selectPage="selectPage" 
        @deletePage="deletePage"
        />
    </header>
    <main>
      <LeftSidebar 
        :collapsed="leftSidebarCollapsed" 
        :components="uiComponents"
        @toggle="toggleLeftSidebar"
        @dragStart="dragStart"
      />
      <Canvas 
  :deviceType="selectedDeviceType"
  :elements="canvasElements"
  @elementDropped="addElement"
  @deleteElement="deleteElement"
  @updateElementPosition="updateElementPosition"
  @resizeElement="resizeElement"
  @elementSelected="selectElement"
  @connectionsUpdated="updateConnections"
  @contextMenu="handleContextMenu"
/>
      <RightSidebar 
        :collapsed="rightSidebarCollapsed" 
        :xml="generatedXml"
        @toggle="toggleRightSidebar"
      />

    </main>

      <!-- Add the context menu -->
  <div v-if="showContextMenu" 
       :style="{ 
         position: 'fixed', 
         top: contextMenuY + 'px', 
         left: contextMenuX + 'px',
         zIndex: 1000 
       }"
       class="context-menu">
    <div @click="openNameDialog" class="menu-item">Change Name</div>
    <div @click="openImageDialog" class="menu-item">Change Image</div>
  </div>

  <!-- Add the dialogs -->
  <dialog ref="nameDialog" v-if="showNameDialog" class="edit-dialog">
      <form @submit.prevent="saveName">
        <label>
          New Name:
          <input v-model="editingName" type="text">
        </label>
        <div class="dialog-buttons">
          <button type="submit">Save</button>
          <button type="button" @click="closeNameDialog">Cancel</button>
        </div>
      </form>
    </dialog>

  <dialog ref="imageDialog" v-if="showImageDialog" class="edit-dialog">
      <form @submit.prevent="saveImage">
        <label>
          Image URL:
          <input v-model="editingImage" type="text">
        </label>
        or 
        <h3 class="dialog-title">Select Image:</h3>
    
    <div class="image-grid">
      <div 
        v-for="image in availableImages" 
        :key="image.path"
        class="image-item"
        :class="{ 'selected': selectedImagePath === image.path }"
        @click="selectedImagePath = image.path"
      >
        <img :src="image.path" :alt="image.name">
        <span class="image-name">{{ image.name }}</span>
      </div>
    </div>

        <div class="dialog-buttons">
          <button type="submit">Save</button>
          <button type="button" @click="closeImageDialog">Cancel</button>
        </div>
      </form>
    </dialog>


    <footer>
      <DeviceSelector 
        :selectedType="selectedDeviceType"
        @change="updateDeviceType"
      />
    </footer>
  </div>
</template>

<script>
import PageManager from './components/PageManager.vue';
import LeftSidebar from './components/LeftSidebar.vue';
import Canvas from './components/CanvasComponent.vue';
import RightSidebar from './components/RightSidebar.vue';
import DeviceSelector from './components/DeviceManager.vue';

import { reactive } from 'vue';
//import buttonImage from '@/assets/profile.png';

export default {
  components: {
    PageManager,
    LeftSidebar,
    Canvas,
    RightSidebar,
    DeviceSelector
  },
data() {
    return {
      pages: [{ name: 'activity_main.xml' }],
      selectedPage: null,
      canvasElements: reactive([]),
      selectedDeviceType: 'phone',
      leftSidebarCollapsed: false,
      rightSidebarCollapsed: false,
      selectedElementIndex: null,
      connections: [],
      // Replace this existing uiComponents array
      uiComponents: [
        {
          type: 'Button',
          displayName: 'Button',
          defaultImage: null,
        currentImage: '../IkarisC.S.I/img/button.png'
        },
        {
          type: 'TextView',
          displayName: 'TextView',
          defaultImage: null,
          currentImage:'../IkarisC.S.I/img/text_view.png'
        },
        {
          type: 'EditText',
          displayName: 'EditText',
          defaultImage: null,
          currentImage: null
        },
        {
          type: 'ImageBotton',
          displayName: 'ImageButton',
          defaultImage: null,
          currentImage: null
        },
        {
          type: 'TextInputLayout',
          displayName: 'TextInputLayout',
          defaultImage: null,
          currentImage: null
        },
        {
          type: 'FloatingActionButton',
          displayName: 'FloatingActionButton',
          defaultImage: null,
          currentImage: null
        },
        {
          type: 'RadioButton',
          displayName: 'RadioButton',
          defaultImage: null,
          currentImage: '../IkarisC.S.I/img/radio.png'
        },
        {
          type: 'CheckBox',
          displayName: 'CheckBox',
          defaultImage: null,
          currentImage: '../IkarisC.S.I/img/checkbox_off.png'
        },
        {
          type: 'Switch',
          displayName: 'Switch',
          defaultImage: null,
          currentImage: '../IkarisC.S.I/img/switch_on.png'
        },
        {
          type: 'ToggleButton',
          displayName: 'ToggleButton',
          defaultImage: null,
          currentImage: null
        },
        {
          type: 'ChipGroup',
          displayName: 'ChipGroup',
          defaultImage: null,
          currentImage: null
        },
        {
          type: 'Chip',
          displayName: 'Chip',
          defaultImage: null,
          currentImage: null
        },
        {
          type: 'RecyclerView',
          displayName: 'RecyclerView',
          defaultImage: null,
          currentImage: '../IkarisC.S.I/img/recycler_view.png'
        },
        {
          type: 'ScrollView',
          displayName: 'ScrollView',
          defaultImage: null,
          currentImage: null
        },
        {
          type: 'HorizontaScrollView',
          displayName: 'HorizontaScrollView',
          defaultImage: null,
          currentImage: null
        },
        {
          type: 'ViewPager2',
          displayName: 'ViewPager2',
          defaultImage: null,
          currentImage: null
        },
        {
          type: 'CardView',
          displayName: 'CardView',
          defaultImage: null,
          currentImage: null
        },
        {
          type: 'NestedScrollView',
          displayName: 'NestedScrollView',
          defaultImage: null,
          currentImage: null
        },
        {
          type: 'TabLayout',
          displayName: 'TabLayout',
          defaultImage: null,
          currentImage: null
        },
        {
          type: 'ToolBar',
          displayName: 'ToolBar',
          defaultImage: null,
          currentImage: null
        },
        {
          type: 'BottomNavigationView',
          displayName: 'BottomNavigationView',
          defaultImage: null,
          currentImage: null
        },
        {
          type: 'NavigationView',
          displayName: 'NavigationView',
          defaultImage: null,
          currentImage: null
        },
        {
          type: 'FrameLayout',
          displayName: 'FrameLayout',
          defaultImage: null,
          currentImage: null
        },
        {
          type: 'GridLayout',
          displayName: 'GridLayout',
          defaultImage: null,
          currentImage: null
        },
        {
          type: 'ListView',
          displayName: 'ListView',
          defaultImage: null,
          currentImage: null
        },
        {
          type: 'GridView',
          displayName: 'GridView',
          defaultImage: null,
          currentImage: null
        },
        {
          type: 'ExpandableListView',
          displayName: 'ExpandableListView',
          defaultImage: null,
          currentImage: null
        },
        {
          type: 'Spinner',
          displayName: 'Spinner',
          defaultImage: null,
          currentImage: null
        },
        {
          type: 'ImageView',
          displayName: 'ImageView',
          defaultImage: null,
          currentImage: '../IkarisC.S.I/img/image.png'
        },
        {
          type: 'VideoView',
          displayName: 'VideoView',
          defaultImage: null,
          currentImage: null
        },
        {
          type: 'WebView',
          displayName: 'WebView',
          defaultImage: null,
          currentImage: null
        },
        {
          type: 'MediaController',
          displayName: 'MediaController',
          defaultImage: null,
          currentImage: null
        },
        {
          type: 'ProgressBar',
          displayName: 'ProgressBar',
          defaultImage: null,
          currentImage: '../IkarisC.S.I/img/progress_bar.png'
        },
        {
          type: 'RatingBar',
          displayName: 'RatingBar',
          defaultImage: null,
          currentImage: '../IkarisC.S.I/img/rating_bar.png'
        },
        {
          type: 'SeekBar',
          displayName: 'SeekBar',
          defaultImage: null,
          currentImage: '../IkarisC.S.I/img/seek_bar.png'
        },
        {
          type: 'SearchView',
          displayName: 'SearchView',
          defaultImage: null,
          currentImage: null
        },
      ],
      // Add these new properties right after uiComponents
      showContextMenu: false,
      contextMenuX: 0,
      contextMenuY: 0,
      selectedElementId: null,
      showNameDialog: false,
      showImageDialog: false,
      editingName: '',
      editingImage: '',
      canvasEdgeThreshold: 10, 
        
        availableImages: [
      { 
        name: 'Profile',
        path: '../IkarisC.S.I/img/profile.png'
      },
      { 
        name: 'Button',
        path: '../IkarisC.S.I/img/logo.png'
      },
      // Add more images as needed
    ],
    selectedImagePath: '',
  

  };
    
  },



  computed: {
    generatedXml() {
      const currentPage = this.selectedPage ? this.selectedPage.name : 'No Page Selected';
      
      let xml = `<?xml version="1.0" encoding="utf-8"?>\n`;
      xml += `<!-- ${currentPage} -->\n`;
      xml += '<androidx.constraintlayout.widget.ConstraintLayout\n' +
             '    xmlns:android="http://schemas.android.com/apk/res/android"\n' +
             '    xmlns:app="http://schemas.android.com/apk/res-auto"\n' +
             '    android:layout_width="match_parent"\n' +
             '    android:layout_height="match_parent">\n\n';

      this.canvasElements.forEach(element => {
        const width = element.width ? `${element.width}dp` : 'wrap_content';
        const height = element.height ? `${element.height}dp` : 'wrap_content';
        
        // Generate Android-compatible ID from displayName
        const androidId = this.generateAndroidId(element.displayName || element.type, element.id);
        
        xml += `    <${element.type}\n`;
        xml += `        android:id="@+id/${androidId}"\n`;
        xml += `        android:layout_width="${width}"\n`;
        xml += `        android:layout_height="${height}"\n`;
        
        // Add constraints based on edge detection and connections
        xml += this.generateConstraints(element);
        
        xml += '        />\n\n';
      });

      xml += '</androidx.constraintlayout.widget.ConstraintLayout>';
      return xml;
    }
  },


  created() {
    this.selectedPage = this.pages[0];
    this.loadPageContent(this.selectedPage);
  },





methods: {
dragStart(event, component) {
    // Stringify only the necessary component data
    const componentData = {
      type: component.type,
      displayName: component.displayName,
      currentImage: component.currentImage
    };
    event.dataTransfer.setData('text/plain', JSON.stringify(componentData));
  },
  

    updateConnections(newConnections) {
      // Update connections array
      if (Array.isArray(newConnections)) {
        this.connections = newConnections;
      } else {
        this.connections.push(newConnections);
      }
      
      // Save page content with updated connections
      this.savePageContent(this.selectedPage, {
        elements: this.canvasElements,
        connections: this.connections
      });
    },

    getElementConnections(elementId) {
    // This method would get all connections for a specific element
    return this.connections.filter(conn => 
      conn.sourceElement.id === elementId || conn.targetElement.id === elementId
    );
  },

 onContextMenu(event, elementId) {
    this.$emit('contextMenu', event, elementId);
  },

   generateAndroidId(displayName) {
      // Convert displayName to lowercase and remove non-alphanumeric characters
      let baseId = displayName.toLowerCase()
        .replace(/[^a-z0-9]/g, '_')  // Replace any non-alphanumeric chars with underscore
        .replace(/^[^a-z]/, 'id$&')  // If doesn't start with letter, prepend 'id'
        .replace(/_+/g, '_')         // Replace multiple underscores with single
        .replace(/^_|_$/g, '');      // Remove leading/trailing underscores

      // Append element ID to ensure uniqueness
      return `${baseId}`;
    },


  generateConstraints(element) {
      let constraints = '';
      const canvas = document.querySelector('.canvas');
      const canvasRect = canvas ? canvas.getBoundingClientRect() : null;
      
      if (!canvasRect) return constraints;

      // Check if element is at edges
      const isAtTop = element.y <= this.canvasEdgeThreshold;
      const isAtBottom = element.y + element.height >= canvasRect.height - this.canvasEdgeThreshold;
      const isAtStart = element.x <= this.canvasEdgeThreshold;
      const isAtEnd = element.x + element.width >= canvasRect.width - this.canvasEdgeThreshold;

      // Find connections for this element
      const elementConnections = this.connections.filter(conn => 
        conn.sourceElementId === element.id || conn.targetElementId === element.id
      );

      // Add vertical constraints
      if (isAtTop) {
        constraints += '        app:layout_constraintTop_toTopOf="parent"\n';
      }
      if (isAtBottom) {
        constraints += '        app:layout_constraintBottom_toBottomOf="parent"\n';
      }

      // Add horizontal constraints
      if (isAtStart) {
        constraints += '        app:layout_constraintStart_toStartOf="parent"\n';
      }
      if (isAtEnd) {
        constraints += '        app:layout_constraintEnd_toEndOf="parent"\n';
      }

      // Add connection-based constraints
      elementConnections.forEach(connection => {
        const isSource = connection.sourceElementId === element.id;
        const sourceNode = isSource ? connection.sourceNode : connection.targetNode;
        const targetNode = isSource ? connection.targetNode : connection.sourceNode;
        const otherElementId = isSource ? connection.targetElementId : connection.sourceElementId;
        const otherElement = this.canvasElements.find(el => el.id === otherElementId);

        if (otherElement) {
          const constraintDirection = this.getConstraintDirection(sourceNode, targetNode);
          const otherElementAndroidId = this.generateAndroidId(
            otherElement.displayName || otherElement.type, 
            otherElement.id
          );
          if (constraintDirection) {
            constraints += `        app:layout_constraint${constraintDirection}_to${this.capitalizeFirst(targetNode)}Of="@+id/${otherElementAndroidId}"\n`;
          }
        }
      });

      // Add default constraints if no connections or edges
      if (!constraints) {
        constraints += '        app:layout_constraintStart_toStartOf="parent"\n';
        constraints += '        app:layout_constraintTop_toTopOf="parent"\n';
      }

      // Add bias if element is positioned between constraints
      if (!isAtStart && !isAtEnd && element.x > 0) {
        const horizontalBias = (element.x / canvasRect.width).toFixed(2);
        constraints += `        app:layout_constraintHorizontal_bias="${horizontalBias}"\n`;
      }
      if (!isAtTop && !isAtBottom && element.y > 0) {
        const verticalBias = (element.y / canvasRect.height).toFixed(2);
        constraints += `        app:layout_constraintVertical_bias="${verticalBias}"\n`;
      }

      return constraints;
    },

     getConstraintDirection(sourceNode, targetNode) {
      const nodeMap = {
        'top': 'Top',
        'bottom': 'Bottom',
        'start': 'Start',
        'end': 'End'
      };
      return nodeMap[sourceNode, targetNode];
      
    },


// Helper methods for XML generation
  capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  getElementRefId(elementId) {
    const element = this.canvasElements.find(el => el.id === elementId);
    return element ? `${element.type.toLowerCase()}_${element.id}` : '';
  },

    addNewPage() {
    const newPageName = `layout_${this.pages.length + 1}.xml`;
    this.pages.push({ name: newPageName });
    this.selectPage(this.pages[this.pages.length - 1]); // Automatically switch to the new page
    this.canvasElements = []; // Reset canvas for new page
  },

    deletePage(index) {
      this.pages.splice(index, 1); // Remove the page from the list
      if (this.pages.length === 0) {
        this.pages.push({ name: 'activity_main.xml' }); // Ensure at least one page exists
      }
    },
    selectPage(page) {
      this.selectedPage = page;
      this.loadPageContent(page); // Load canvas elements for the selected page
      
    },
    
      savePageContent(page, data) {
    const savedPages = JSON.parse(localStorage.getItem('pages') || '{}');
    savedPages[page.name] = data;
    localStorage.setItem('pages', JSON.stringify(savedPages));
  },

  loadPageContent(page) {
    const savedPages = JSON.parse(localStorage.getItem('pages') || '{}');
    const pageData = savedPages[page.name] || { elements: [], connections: [] };
    this.canvasElements = pageData.elements || [];
    this.connections = pageData.connections || [];
  },
    addElement(dropData) {
    try {
      const newElement = {
        id: Date.now(),
        type: dropData.type,
        displayName: dropData.displayName,
        currentImage: dropData.currentImage || null,
        x: dropData.x,
        y: dropData.y,
        width: 100,  // default width
        height: 100  // default height
      };
      this.canvasElements.push(newElement);
    } catch (error) {
      console.error('Error adding element:', error);
      console.log('Received dropData:', dropData);
    }
  },

    selectElement(index) {
      this.selectedElementIndex = index;
      // You can add any additional logic here when an element is selected
    },
    deleteElement(index) {
      if (index >= 0 && index < this.canvasElements.length) {
        this.canvasElements.splice(index, 1);
        this.savePageContent(this.selectedPage, this.canvasElements);
        this.selectedElementIndex = null;
      }
    },
    updateElementPosition(index, x, y) {
      if (index >= 0 && index < this.canvasElements.length) {
        this.canvasElements[index] = {
          ...this.canvasElements[index],
          x,
          y
        };
        this.savePageContent(this.selectedPage, this.canvasElements);
      }
    },

    resizeElement(index, newWidth, newHeight) {
      if (index >= 0 && index < this.canvasElements.length) {
        this.canvasElements[index] = {
          ...this.canvasElements[index],
          width: newWidth,
          height: newHeight
        };
        this.savePageContent(this.selectedPage, this.canvasElements);
      }
    },


  toggleLeftSidebar() {
    this.leftSidebarCollapsed = !this.leftSidebarCollapsed;
  },
  toggleRightSidebar() {
    this.rightSidebarCollapsed = !this.rightSidebarCollapsed;
  },

// Add new methods for context menu
    handleContextMenu(event, elementId) {
      event.preventDefault();
      this.showContextMenu = true;
      this.contextMenuX = event.clientX;
      this.contextMenuY = event.clientY;
      this.selectedElementId = elementId;
    },

    openNameDialog() {
      const element = this.canvasElements.find(el => el.id === this.selectedElementId);
      if (element) {
        this.editingName = element.displayName || element.type;
        this.showNameDialog = true;
        this.showContextMenu = false;
        // Use nextTick to ensure dialog is mounted
        this.$nextTick(() => {
          if (this.$refs.nameDialog) {
            this.$refs.nameDialog.showModal();
          }
        });
      }
    },
    openImageDialog() {
      const element = this.canvasElements.find(el => el.id === this.selectedElementId);
      if (element) {
        this.editingImage = element.currentImage || '';
        this.showImageDialog = true;
        this.showContextMenu = false;
        this.$nextTick(() => {
          if (this.$refs.imageDialog) {
            this.$refs.imageDialog.showModal();
          }
        });
      }
    },

    closeNameDialog() {
      if (this.$refs.nameDialog) {
        this.$refs.nameDialog.close();
      }
      this.showNameDialog = false;
    },

    closeImageDialog() {
      if (this.$refs.imageDialog) {
        this.$refs.imageDialog.close();
      }
      this.showImageDialog = false;
    },

    saveName() {
      const element = this.canvasElements.find(el => el.id === this.selectedElementId);
      if (element) {
        element.displayName = this.editingName;
        
        // Update any existing connections that reference this element
        this.connections = this.connections.map(conn => {
          if (conn.sourceElementId === element.id || conn.targetElementId === element.id) {
            return {
              ...conn,
              sourceRef: conn.sourceElementId === element.id ? 
                this.generateAndroidId(element.displayName, element.id) : 
                conn.sourceRef,
              targetRef: conn.targetElementId === element.id ? 
                this.generateAndroidId(element.displayName, element.id) : 
                conn.targetRef
            };
          }
          return conn;
        });

        // Save the updated state
        this.savePageContent(this.selectedPage, {
          elements: this.canvasElements,
          connections: this.connections
        });
      }
      this.closeNameDialog();
    },

    
  saveImage() {
      const element = this.canvasElements.find(el => el.id === this.selectedElementId);
      if (element) {
        element.currentImage = this.editingImage || this.selectedImagePath;
        // Save the updated state
        this.savePageContent(this.selectedPage, {
          elements: this.canvasElements,
          connections: this.connections
        });
      }
      this.closeImageDialog();
    },

    updateComponentName(type, newName) {
      const component = this.uiComponents.find(c => c.type === type);
      if (component) {
        component.displayName = newName;
      }
    },

    // Add click handler to close context menu
    closeContextMenu() {
    this.showContextMenu = false;
  }
  },

  // Add click handler to close context menu when clicking outside
  mounted() {
    document.addEventListener('click', (event) => {
    if (!event.target.closest('.context-menu')) {
      this.closeContextMenu();
    }
  });
  },

  beforeUnmount() {
    document.removeEventListener('click', this.closeContextMenu);
  }
}
</script>

<style>
@import './assets/styles/AndroidUIDesigner.css';
</style>
