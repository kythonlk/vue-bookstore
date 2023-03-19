<template>
    <section class="intro-section">
      <div class="container">
        <h2 class="section-title">{{ title }}</h2>
        <p class="intro-text">{{ introText }}</p>
        <ul class="mission-list">
          <li v-for="(mission, index) in missions" :key="index">{{ mission }}</li>
        </ul>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "IntroSection",
    props: {
      title: {
        type: String,
        required: true,
      },
      introText: {
        type: String,
        required: true,
      },
      missions: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .intro-section {
    background-color: #f8f8f8;
    padding: 50px 0;
  }
  
  .section-title {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  
  .intro-text {
    font-size: 18px;
    margin-bottom: 30px;
    line-height: 1.5;
  }
  
  .mission-list {
    margin-top: 30px;
    font-size: 18px;
    line-height: 1.5;
  }
  </style>
  