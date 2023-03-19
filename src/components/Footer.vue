<template>
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <ul class="list-inline">
              <li class="list-inline-item">
                <a href="#">Home</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Categories</a>
              </li>
              <li class="list-inline-item">
                <a href="#">About</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div class="col-md-6 text-md-right">
            <ul class="list-inline">
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">
            <p class="text-muted">© 2023 Bookstore, Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <style scoped>
  .footer {
    background-color: #f5f5f5;
    padding-top: 25px;
    padding-bottom: 25px;
  }
  
  .footer a {
    color: #333;
    text-decoration: none;
  }
  
  .footer a:hover {
    color: #000;
  }
  
  .footer ul li {
    display: inline-block;
    margin-right: 20px;
  }
  
  .footer ul li:last-child {
    margin-right: 0;
  }
  
  .footer .text-muted {
    margin-top: 15px;
  }
  </style>
  