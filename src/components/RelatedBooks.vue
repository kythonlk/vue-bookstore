<template>
    <div class="related-books">
      <h2>Related Books</h2>
      <div class="books-grid">
        <div v-for="book in relatedBooks" :key="book.id" class="book">
          <router-link :to="'/books/' + book.id">
            <img :src="book.coverUrl" :alt="book.title">
          </router-link>
          <h3 class="title">{{ book.title }}</h3>
          <h4 class="author">{{ book.author }}</h4>
          <div class="rating">{{ book.rating }} stars</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      relatedBooks: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .related-books {
    margin-top: 3rem;
  }
  
  .books-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1rem;
  }
  
  .book {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .book img {
    width: 100%;
    max-width: 200px;
    margin-bottom: 1rem;
  }
  
  .title {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  
  .author {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  
  .rating {
    font-size: 0.8rem;
    color: #888;
  }
  </style>
  