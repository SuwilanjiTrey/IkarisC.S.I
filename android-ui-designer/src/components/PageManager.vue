<!-- PageManager.vue -->
<!-- PageManager.vue -->
<template>
  <div class="page-manager-container">
    <span class="material-icons">menu</span>
    <h1>UI Designer</h1>
    <button class="nav-btn" @click="scrollLeft">&#9664;</button> <!-- Left arrow -->
    <div class="page-carousel">
      <div 
        v-for="(page, index) in pages" 
        :key="index" 
        class="page-box"
        @click="selectPage(page)"> <!-- Click event to select a page -->
        <div class="page-content">
          {{ page.name }}
          
        </div>
        <button @click="deletePage(index)" class="delete-page-btn">x</button> <!-- Delete button -->
      </div>
    </div>
    <button class="nav-btn" @click="scrollRight">&#9654;</button> <!-- Right arrow -->
    <button @click="addPage" class="add-page-btn">+</button> <!-- Add page button -->
  </div>
</template>

<script>
export default {
  props: ['pages'],
  methods: {
    addPage() {
      this.$emit('addPage');
    },
    deletePage(index) {
      this.$emit('deletePage', index);
    },
    selectPage(page) {
      this.$emit('selectPage', page); // Emit the selected page to the parent
    },
    scrollLeft() {
      const container = this.$el.querySelector('.page-carousel');
      container.scrollLeft -= 100;
    },
    scrollRight() {
      const container = this.$el.querySelector('.page-carousel');
      container.scrollLeft += 100;
    }
  }
}
</script>





<style scoped>
.page-manager-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #beee13;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  width: 100%;
  /*margin-left: 300px;*/
}

.page-carousel {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  width: 40%; /* Adjust as needed */
  border: 1px solid #fcfdff;
  padding: 10px;
  margin: 0 10px;
}

.page-box {
  width: 50px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  background-color: #fff;
  margin-right: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  position: relative;
}

.page-content {
  text-align: center;
  font-size: 12px; /* Customize font size */
  overflow: hidden;
  text-overflow: ellipsis;
}

.nav-btn {
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 0 10px;
}

.add-page-btn {
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* Add styles for the delete button */
.delete-page-btn {
  background-color: red;
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: 5px;
}
</style>
