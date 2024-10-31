<!-- LeftSidebar.vue -->
<template>
  <div class="sidebar" :class="{ collapsed: collapsed }">
    <div class="sidebar-content">
      <div class="components-grid">
        <div 
          v-for="component in components" 
          :key="component.type"
          class="component-item"
          draggable="true"
          @dragstart="(e) => dragStart(e, component)"
        >
          <div class="component-inner">
            <img 
              v-if="component.currentImage" 
              :src="component.currentImage" 
              :alt="component.displayName"
              class="component-icon"
            >
            <span class="component-name">{{ component.displayName }}</span>
          </div>
        </div>
      </div>
    </div>
    <button @click="$emit('toggle')" class="toggle-button">
      {{ collapsed ? '>' : '<' }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    collapsed: {
      type: Boolean,
      default: false
    },
    components: {
      type: Array,
      required: true
    }
  },
  
  methods: {
    dragStart(event, component) {
      this.$emit('dragStart', event, component);
    }
  }
}
</script>

<style scoped>
.sidebar {
  background-color: rgb(248, 248, 241);
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: width 0.3s ease;
  width: 300px;
  position: relative;
}

.sidebar.collapsed {
  width: 60px;
}

.sidebar-content {
  flex: 1;
  overflow-y: auto;
  padding: 12px;
}

.components-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  padding: 4px;
}

.sidebar:not(.collapsed) .components-grid {
  grid-template-columns: repeat(2, 1fr);
}

.sidebar.collapsed .components-grid {
  grid-template-columns: 1fr;
}

.component-item {
  aspect-ratio: 1;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: move;
  transition: all 0.2s ease;
}

.component-item:hover {
  border-color: #999;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.component-inner {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
}

.component-icon {
  width: 32px;
  height: 32px;
  margin-bottom: 8px;
  object-fit: contain;
}

.component-name {
  font-size: 12px;
  text-align: center;
  word-break: break-word;
  line-height: 1.2;
}

.toggle-button {
  position: absolute;
  right: -12px;
  top: 1.5%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  background-color: chartreuse;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

/* Responsive adjustments */
@media (min-width: 768px) {
  .sidebar:not(.collapsed) .components-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .sidebar:not(.collapsed) .components-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>