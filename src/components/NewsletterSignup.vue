<template>
    <div class="newsletter">
      <h3 class="newsletter-title">{{ title }}</h3>
      <p class="newsletter-description">{{ description }}</p>
      <form class="newsletter-form">
        <input type="email" class="newsletter-input" placeholder="Enter your email" v-model="email">
        <button class="newsletter-button" @click.prevent="submitForm">Subscribe</button>
      </form>
      <p class="newsletter-message">{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Newsletter',
    data() {
      return {
        email: '',
        message: ''
      }
    },
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    },
    methods: {
      submitForm() {
        // Submit form logic goes here
        this.message = `Thank you for subscribing with ${this.email}`
        this.email = ''
      }
    }
  }
  </script>
  
  <style scoped>
  .newsletter {
    background-color: #f9f9f9;
    padding: 2rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .newsletter-title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .newsletter-description {
    font-size: 1rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .newsletter-form {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .newsletter-input {
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 5px 0 0 5px;
    border: none;
  }
  
  .newsletter-button {
    font-size: 1rem;
    background-color: #007bff;
    border: none;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .newsletter-button:hover {
    background-color: #0069d9;
  }
  
  .newsletter-message {
    font-size: 0.8rem;
    color: #007bff;
  }
  </style>
  