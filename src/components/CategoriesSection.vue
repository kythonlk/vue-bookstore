<template>
    <section class="categories">
      <div class="container">
        <h2 class="section-title">Categories</h2>
        <div class="category-list">
          <div v-for="category in categories" :key="category.id" class="category-item">
            <img :src="category.image" :alt="category.name" class="category-image">
            <h3 class="category-name">{{ category.name }}</h3>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Categories',
    data() {
      return {
        categories: [
          { id: 1, name: 'Fiction', image: 'path/to/fiction-image.jpg' },
          { id: 2, name: 'Biography', image: 'path/to/biography-image.jpg' },
          { id: 3, name: 'History', image: 'path/to/history-image.jpg' },
          { id: 4, name: 'Science', image: 'path/to/science-image.jpg' },
          { id: 5, name: 'Cooking', image: 'path/to/cooking-image.jpg' }
        ]
      }
    }
  }
  </script>
  
  <style>
  .categories {
    padding: 60px 0;
  }
  
  .section-title {
    text-align: center;
    font-size: 32px;
    margin-bottom: 40px;
  }
  
  .category-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .category-item {
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .category-image {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 10px;
  }
  
  .category-name {
    font-size: 24px;
    text-align: center;
  }
  </style>
  