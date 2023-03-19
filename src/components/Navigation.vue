<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/books">Books</router-link></li>
      <li><router-link to="/authors">Authors</router-link></li>
      <li><router-link to="/about">About Us</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  margin-right: 20px;
}
li:last-child {
  margin-right: 0;
}
a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}
a:hover {
  color: #007bff;
}
@media (max-width: 768px) {
  nav {
    flex-direction: column;
  }
  ul {
    margin-top: 10px;
    flex-direction: column;
    align-items: center;
  }
  li {
    margin-right: 0;
    margin-bottom: 10px;
  }
}
</style>
