<template>
    <div class="book-reviews">
      <h2>Reviews</h2>
      <div class="reviews-list">
        <div class="review" v-for="review in reviews" :key="review.id">
          <div class="review-header">
            <div class="review-author">{{ review.author }}</div>
            <div class="review-rating">{{ review.rating }}/5</div>
          </div>
          <div class="review-body">{{ review.body }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BookReviews',
    props: {
      reviews: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .book-reviews {
    margin-top: 50px;
  }
  
  .reviews-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .review {
    width: calc(50% - 10px);
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ddd;
  }
  
  .review-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .review-author {
    font-weight: bold;
  }
  
  .review-rating {
    color: #f5a623;
    font-weight: bold;
  }
  
  .review-body {
    font-size: 14px;
  }
  </style>
  