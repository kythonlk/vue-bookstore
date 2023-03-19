<template>
    <header class="page-header">
      <div class="container">
        <h1>{{ pageTitle }}</h1>
        <p>{{ pageDescription }}</p>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: "PageHeader",
    props: {
      pageTitle: {
        type: String,
        required: true
      },
      pageDescription: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .page-header {
    background-color: #f8f8f8;
    padding: 20px;
    text-align: center;
  }
  
  .page-header h1 {
    font-size: 36px;
    margin-bottom: 10px;
  }
  
  .page-header p {
    font-size: 18px;
    margin-bottom: 20px;
  }
  </style>
  