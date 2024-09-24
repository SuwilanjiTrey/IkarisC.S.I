<template>
  <div id="app">
    <header>
      <div class="page-stack">
        <div v-for="(page, index) in pages" :key="index" class="page-tab">
          {{ page.name }}
        </div>
        <button @click="addNewPage" class="add-page-btn">+</button>
      </div>
    </header>
    <main>
      <div class="canvas-container">
        <div class="canvas" :class="selectedDeviceType">
          <!-- Canvas content goes here -->
          <div class="placeholder-text">{{ selectedDeviceType }} Canvas</div>
        </div>
      </div>
    </main>
    <footer>
      <select v-model="selectedDeviceType" class="device-select">
        <option value="phone">Phone</option>
        <option value="tablet">Tablet</option>
      </select>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: [{ name: 'activity_main.xml' }],
      selectedDeviceType: 'phone'
    }
  },
  methods: {
    addNewPage() {
      const newPageName = `layout_${this.pages.length + 1}.xml`
      this.pages.push({ name: newPageName })
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  padding: 0;
}

header {
  background-color: #f0f0f0;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.page-stack {
  display: flex;
  align-items: center;
}

.page-tab {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px 4px 0 0;
  padding: 5px 10px;
  margin-right: 5px;
  cursor: pointer;
}

.add-page-btn {
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

main {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e9e9e9;
  padding: 20px;
}

.canvas-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.canvas {
  background-color: white;
  border: 2px solid #ddd;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.canvas.phone {
  width: 360px;
  height: 640px;
}

.canvas.tablet {
  width: 800px;
  height: 1280px;
}

.placeholder-text {
  color: #999;
  font-size: 18px;
}

footer {
  background-color: #f0f0f0;
  padding: 10px;
  border-top: 1px solid #ddd;
}

.device-select {
  padding: 5px;
  font-size: 14px;
}
</style>