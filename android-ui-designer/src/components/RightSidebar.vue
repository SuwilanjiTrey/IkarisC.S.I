<!-- RightSidebar.vue -->
<template>
    <div class="sidebar" :class="{ 'collapsed': collapsed }">
      <button @click="$emit('toggle')" class="toggle-button">
      {{ collapsed ? '<' : '>' }}
    </button>
      <div class="sidebar-content">
        <h3>XML Code</h3>
        
        <pre><code>{{ xml }}</code></pre>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['collapsed', 'xml'],
    methods: {
      toggle() {
        this.$emit('toggle');
      }
    }
  }
  </script>

  <style scoped>


.toggle-button {
  position: absolute;

  top: 25%;
  right: 2%;
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


</style>