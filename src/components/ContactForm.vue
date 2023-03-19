<template>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="subject">Subject:</label>
        <input type="text" id="subject" v-model="subject" required>
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    },
    methods: {
      handleSubmit() {
        // Send form data to backend for processing
        console.log('Name:', this.name)
        console.log('Email:', this.email)
        console.log('Subject:', this.subject)
        console.log('Message:', this.message)
  
        // Clear form fields after submitting
        this.name = ''
        this.email = ''
        this.subject = ''
        this.message = ''
      }
    }
  }
  </script>
  