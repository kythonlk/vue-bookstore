<template>
    <div class="contact-info">
      <h2>Contact Information</h2>
      <ul>
        <li><strong>Email:</strong> info@website.com</li>
        <li><strong>Phone:</strong> 123-456-7890</li>
        <li><strong>Address:</strong> 123 Main Street, Anytown USA 12345</li>
      </ul>
      <div class="social-links">
        <h3>Connect with us on social media:</h3>
        <ul>
          <li><a href="https://www.facebook.com/website"><i class="fab fa-facebook"></i></a></li>
          <li><a href="https://www.twitter.com/website"><i class="fab fa-twitter"></i></a></li>
          <li><a href="https://www.instagram.com/website"><i class="fab fa-instagram"></i></a></li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactInformation',
    // any logic or functionality can be added here
  }
  </script>
  
  <style scoped>
  .contact-info {
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 0;
    text-align: center;
  }
  
  .contact-info h2 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .contact-info ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: left;
    font-size: 20px;
  }
  
  .contact-info ul li {
    margin-bottom: 10px;
  }
  
  .social-links {
    margin-top: 40px;
  }
  
  .social-links h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .social-links ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  
  .social-links ul li {
    display: inline-block;
    margin-right: 20px;
  }
  
  .social-links ul li:last-child {
    margin-right: 0;
  }
  
  .social-links a {
    display: block;
    width: 40px;
    height: 40px;
    font-size: 24px;
    color: #fff;
    background-color: #000;
    border-radius: 50%;
    line-height: 40px;
    transition: all 0.3s ease;
  }
  
  .social-links a:hover {
    background-color: #333;
  }
  </style>
  