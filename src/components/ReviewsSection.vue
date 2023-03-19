<template>
    <section class="reviews">
      <h2>Reviews</h2>
      <div class="reviews-container">
        <div class="review" v-for="review in reviews" :key="review.id">
          <div class="review-info">
            <h3>{{ review.name }}</h3>
            <p>{{ review.date }}</p>
            <p>{{ review.description }}</p>
          </div>
          <div class="review-image">
            <img :src="review.image" alt="">
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        reviews: [
          {
            id: 1,
            name: "John Doe",
            date: "February 2022",
            description: "This website is amazing! It's really easy to navigate and I found a lot of great books to read.",
            image: "https://via.placeholder.com/150"
          },
          {
            id: 2,
            name: "Jane Smith",
            date: "January 2022",
            description: "I love the layout of this website. It's very visually appealing and makes me want to browse for hours!",
            image: "https://via.placeholder.com/150"
          },
          {
            id: 3,
            name: "Bob Johnson",
            date: "March 2022",
            description: "I appreciate the variety of genres available on this website. I found some really interesting titles I wouldn't have found otherwise.",
            image: "https://via.placeholder.com/150"
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .reviews {
    margin: 50px 0;
  }
  
  .reviews h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .reviews-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .review {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    width: 30%;
    padding: 20px;
    background-color: #f1f1f1;
    border-radius: 10px;
  }
  
  .review-info {
    text-align: center;
  }
  
  .review-image {
    margin-top: 20px;
  }
  
  .review-image img {
    border-radius: 50%;
  }
  </style>
  