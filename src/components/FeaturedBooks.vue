<template>
    <section class="reviews">
      <h2>Reviews</h2>
      <div class="review-card" v-for="(review, index) in reviews" :key="index">
        <div class="review-info">
          <div class="reviewer">
            <img :src="review.image" alt="Reviewer Image" />
            <h3>{{ review.name }}</h3>
          </div>
          <div class="rating">{{ review.rating }}/5</div>
        </div>
        <p class="review-text">{{ review.text }}</p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        reviews: [
          {
            name: "John Doe",
            rating: 4,
            text: "I really enjoyed reading this book. It was well written and kept me engaged until the end.",
            image: "https://via.placeholder.com/150x150"
          },
          {
            name: "Jane Smith",
            rating: 5,
            text: "This book is a must-read for anyone interested in the subject matter. The author's knowledge and passion really shine through.",
            image: "https://via.placeholder.com/150x150"
          },
          {
            name: "Bob Johnson",
            rating: 3,
            text: "While I did find the book interesting, I felt that some of the concepts were explained in a confusing manner.",
            image: "https://via.placeholder.com/150x150"
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .reviews {
    background-color: #f9f9f9;
    padding: 50px;
  }
  
  .review-card {
    border: 1px solid #ccc;
    margin-bottom: 20px;
    padding: 20px;
  }
  
  .review-card:last-child {
    margin-bottom: 0;
  }
  
  .review-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .reviewer {
    display: flex;
    align-items: center;
  }
  
  .reviewer img {
    border-radius: 50%;
    margin-right: 10px;
    width: 50px;
    height: 50px;
  }
  
  .review-text {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 0;
  }
  </style>
  