<template>
    <button @click="goToCategories">Back to Categories</button>
  </template>
  
  <script>
  export default {
    methods: {
      goToCategories() {
        this.$router.push('/categories')
      }
    }
  }
  </script>
  
  <style scoped>
  button {
    background-color: #fff;
    color: #333;
    border: 1px solid #333;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  
  button:hover {
    background-color: #333;
    color: #fff;
  }
  </style>
  