<template>
    <div class="book-header">
      <img :src="book.cover" alt="Book cover" class="book-cover">
      <div class="book-details">
        <h1 class="book-title">{{ book.title }}</h1>
        <h2 class="book-author">{{ book.author }}</h2>
        <p class="book-rating">{{ book.rating }} stars</p>
        <p class="book-price">{{ book.price }}</p>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      book: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .book-header {
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: #f0f0f0;
  }
  
  .book-cover {
    width: 200px;
    height: 300px;
    object-fit: cover;
    margin-right: 20px;
  }
  
  .book-details {
    flex: 1;
  }
  
  .book-title {
    font-size: 24px;
    margin: 0;
  }
  
  .book-author {
    font-size: 18px;
    margin: 10px 0;
  }
  
  .book-rating {
    font-size: 16px;
    margin: 10px 0;
  }
  
  .book-price {
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0;
  }
  
  .add-to-cart {
    padding: 10px;
    background-color: #007aff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  