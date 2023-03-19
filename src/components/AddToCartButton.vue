<template>
    <button class="add-to-cart" @click="addToCart">Add to Cart</button>
  </template>
  
  <script>
  export default {
    props: {
      book: {
        type: Object,
        required: true
      }
    },
    methods: {
      addToCart() {
        // add book to cart logic here
        console.log(`Added ${this.book.title} to cart`);
      }
    }
  }
  </script>
  
  <style scoped>
  .add-to-cart {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }
  </style>
  