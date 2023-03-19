<template>
    <div class="category-header">
      <h1>{{ categoryName }}</h1>
      <p>{{ categoryDescription }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      categoryName: {
        type: String,
        required: true
      },
      categoryDescription: {
        type: String,
        default: ''
      }
    }
  }
  </script>
  
  <style scoped>
  .category-header {
    text-align: center;
    margin-top: 2rem;
  }
  .category-header h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  .category-header p {
    font-size: 1.25rem;
    color: #666;
  }
  </style>
  