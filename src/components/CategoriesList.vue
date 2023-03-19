<template>
    <div class="categories">
      <h3>Categories</h3>
      <ul>
        <li v-for="category in categories" :key="category.id">
          <router-link :to="{ name: 'category', params: { id: category.id }}">{{ category.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        categories: [
          { id: 1, name: 'Fiction' },
          { id: 2, name: 'Non-fiction' },
          { id: 3, name: 'Biography' },
          { id: 4, name: 'History' },
          { id: 5, name: 'Science' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .categories {
    margin-bottom: 30px;
  }
  
  .categories h3 {
    margin: 0 0 10px;
    font-size: 20px;
  }
  
  .categories ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .categories li {
    margin: 0 0 10px;
  }
  
  .categories li a {
    color: #333;
    text-decoration: none;
  }
  
  .categories li a:hover {
    text-decoration: underline;
  }
  </style>
  