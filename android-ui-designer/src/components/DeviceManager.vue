<!-- DeviceSelector.vue -->
<template>
    <select :value="selectedType" @input="updateDeviceType" class="device-select">
      <option value="phone">Phone</option>
      <option value="tablet">Tablet</option>
    </select>
  </template>
  
  <script>
  export default {
    props: ['selectedType'],
    methods: {
      updateDeviceType(event) {
        this.$emit('change', event.target.value);
      }
    }
  }
  </script>