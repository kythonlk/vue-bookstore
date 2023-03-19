<template>
    <div class="book-details-modal">
      <div class="modal-overlay" @click="closeModal"></div>
      <div class="modal-content">
        <div class="modal-header">
          <h2>{{ book.title }}</h2>
          <button class="close-button" @click="closeModal">x</button>
        </div>
        <div class="modal-body">
          <div class="book-cover">
            <img :src="book.coverImage" alt="Book Cover">
          </div>
          <div class="book-details">
            <p><strong>Author:</strong> {{ book.author }}</p>
            <p><strong>Genre:</strong> {{ book.genre }}</p>
            <p><strong>Publication Date:</strong> {{ book.publicationDate }}</p>
            <p><strong>Rating:</strong> {{ book.rating }}</p>
            <p><strong>Synopsis:</strong> {{ book.synopsis }}</p>
            <p><strong>Reviews:</strong></p>
            <ul>
              <li v-for="review in book.reviews" :key="review.id">{{ review.text }}</li>
            </ul>
            <p><strong>Related Books:</strong></p>
            <ul>
              <li v-for="relatedBook in book.relatedBooks" :key="relatedBook.id">{{ relatedBook.title }} by {{ relatedBook.author }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      book: Object
    },
    methods: {
      closeModal() {
        this.$emit('close-modal');
      }
    }
  };
  </script>
  
  <style scoped>
  .book-details-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .modal-content {
    background-color: white;
    border-radius: 4px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    width: 80%;
    max-width: 800px;
  }
  
  .modal-header {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #F1F1F1;
  }
  
  .close-button {
    border: none;
    background-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
  }
  
  .modal-body {
    display: flex;
    flex-direction: row;
    padding: 1rem;
  }
  
  .book-cover {
    flex: 1;
    display: flex;
    justify-content: center;
  }
  
  .book-cover img {
    max-width: 100%;
    height: auto;
  }
  
  .book-details {
    flex: 2;
    padding-left: 1rem;
  }
  
  .book-details p {
    margin: 0.5rem 0;
  }
  
  .book-details ul {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  
  .book-details li {
    margin-left: 1rem;
  }
  </style>
  