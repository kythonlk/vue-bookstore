<template>
    <button class="back-to-categories" @click="goBack">
      <i class="fa fa-chevron-left"></i> Back to Categories
    </button>
  </template>
  
  <script>
  export default {
    methods: {
      goBack() {
        // You can use Vue Router to navigate to the categories page
        this.$router.push('/categories');
      },
    },
  };
  </script>
  
  <style scoped>
  .back-to-categories {
    background-color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .back-to-categories:hover {
    background-color: #f3f3f3;
  }
  </style>
  