<template>
    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Search books...">
      <button @click="searchBooks">Search</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: ''
      }
    },
    methods: {
      searchBooks() {
        // Logic for searching books based on the searchQuery value
      }
    }
  }
  </script>
  
  <style scoped>
  .search-bar {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
  
  input[type="text"] {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
  }
  
  button {
    padding: 10px;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
    border: 1px solid #4CAF50;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #3e8e41;
    border-color: #3e8e41;
  }
  </style>
  