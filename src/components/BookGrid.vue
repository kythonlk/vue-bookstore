<template>
    <div class="book-grid">
      <div v-for="book in books" :key="book.id" class="book-card">
        <img :src="book.coverImg" class="book-cover">
        <h3 class="book-title">{{ book.title }}</h3>
        <h4 class="book-author">{{ book.author }}</h4>
        <div class="book-rating">{{ book.rating }} stars</div>
        <button class="book-details-btn" @click="showBookDetails(book)">View Details</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      books: {
        type: Array,
        required: true,
      },
    },
    methods: {
      showBookDetails(book) {
        // show modal or navigate to book details page
      },
    },
  };
  </script>
  
  <style scoped>
  .book-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1rem;
  }
  
  .book-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .book-cover {
    width: 100%;
    max-height: 250px;
    object-fit: cover;
    border-radius: 4px;
  }
  
  .book-title {
    margin: 0.5rem 0;
    font-size: 1.2rem;
    text-align: center;
  }
  
  .book-author {
    margin: 0.25rem 0;
    font-size: 1rem;
    text-align: center;
  }
  
  .book-rating {
    margin: 0.25rem 0;
    font-size: 0.8rem;
    text-align: center;
    color: #888;
  }
  
  .book-details-btn {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #0077ff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  