<template>
    <div class="book-description">
      <h2>{{ book.title }}</h2>
      <p>{{ book.author }}</p>
      <p>{{ book.publicationDate }}</p>
      <p>{{ book.publisher }}</p>
      <p>{{ book.pages }} pages</p>
      <p>{{ book.language }}</p>
      <p>{{ book.isbn }}</p>
      <div class="rating">
        <span v-for="n in 5" :key="n" :class="{ filled: n <= book.rating }">&#9733;</span>
        <span class="num-ratings">{{ book.numRatings }} ratings</span>
      </div>
      <p class="synopsis">{{ book.synopsis }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "BookDescription",
    props: {
      book: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .book-description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  
  .book-description h2 {
    margin: 0;
  }
  
  .book-description p {
    margin: 0.5rem 0;
  }
  
  .book-description .rating {
    display: flex;
    align-items: center;
  }
  
  .book-description .rating span {
    font-size: 2rem;
    color: #ddd;
    cursor: pointer;
  }
  
  .book-description .rating .filled {
    color: #f7d701;
  }
  
  .book-description .rating .num-ratings {
    margin-left: 1rem;
    font-size: 1rem;
    color: #777;
  }
  
  .book-description .synopsis {
    margin-top: 1rem;
    font-size: 1.2rem;
    line-height: 1.5;
  }
  </style>
  