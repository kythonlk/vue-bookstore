<template>
    <div class="hero">
      <div class="hero-content">
        <h1 class="hero-title">{{ title }}</h1>
        <p class="hero-description">{{ description }}</p>
        <button class="hero-button">{{ button }}</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Hero',
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      button: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .hero {
    background-color: #f9f9f9;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .hero-content {
    text-align: center;
  }
  
  .hero-title {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  
  .hero-description {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .hero-button {
    font-size: 1.2rem;
    background-color: #007bff;
    border: none;
    color: #fff;
    padding: 1rem 2rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .hero-button:hover {
    background-color: #0069d9;
  }
  </style>
  