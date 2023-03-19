<template>
    <div class="faq-section">
      <h2 class="faq-section__title">Frequently Asked Questions</h2>
      <div class="faq-section__content">
        <div v-for="(faq, index) in faqs" :key="index" class="faq-section__item">
          <h3 class="faq-section__item__title">{{ faq.question }}</h3>
          <p class="faq-section__item__answer">{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        faqs: [
          {
            question: 'What is this website for?',
            answer: 'This website is an online bookstore where you can find and purchase books from various categories and genres.'
          },
          {
            question: 'Do you offer international shipping?',
            answer: 'Yes, we offer international shipping to most countries. Shipping fees may vary depending on your location.'
          },
          {
            question: 'What payment methods do you accept?',
            answer: 'We accept various payment methods, including credit card, PayPal, and bank transfer. You can select your preferred payment method at checkout.'
          },
          {
            question: 'How do I track my order?',
            answer: 'You can track your order by logging into your account and checking the order status. You will also receive email notifications when your order has been shipped and delivered.'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .faq-section {
    padding: 2rem;
    background-color: #f7f7f7;
  }
  
  .faq-section__title {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .faq-section__item {
    margin-bottom: 1.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 1.5rem;
  }
  
  .faq-section__item__title {
    margin: 0;
  }
  
  .faq-section__item__answer {
    margin-top: 1rem;
  }
  </style>
  