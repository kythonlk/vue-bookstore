<template>
    <div class="filters">
      <h3>Filters</h3>
      <form>
        <div>
          <label>Price Range:</label>
          <input type="number" v-model="minPrice" placeholder="Min">
          <input type="number" v-model="maxPrice" placeholder="Max">
        </div>
        <div>
          <label>Genre:</label>
          <select v-model="selectedGenre">
            <option disabled value="">Please select one</option>
            <option v-for="genre in genres" :key="genre">{{ genre }}</option>
          </select>
        </div>
        <div>
          <label>Author:</label>
          <input type="text" v-model="author" placeholder="Enter author name">
        </div>
        <div>
          <label>Publication Date:</label>
          <input type="date" v-model="publicationDate">
        </div>
        <button type="button" @click.prevent="applyFilters">Apply Filters</button>
        <button type="button" @click.prevent="resetFilters">Reset Filters</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        minPrice: null,
        maxPrice: null,
        selectedGenre: '',
        genres: ['Mystery', 'Thriller', 'Romance', 'Science Fiction', 'Fantasy', 'Historical Fiction'],
        author: '',
        publicationDate: ''
      };
    },
    methods: {
      applyFilters() {
        // Send filter criteria to parent component to update book grid
        this.$emit('apply-filters', {
          minPrice: this.minPrice,
          maxPrice: this.maxPrice,
          genre: this.selectedGenre,
          author: this.author,
          publicationDate: this.publicationDate
        });
      },
      resetFilters() {
        this.minPrice = null;
        this.maxPrice = null;
        this.selectedGenre = '';
        this.author = '';
        this.publicationDate = '';
        // Send empty filter criteria to parent component to reset book grid
        this.$emit('reset-filters');
      }
    }
  };
  </script>
  
  <style scoped>
  .filters {
    margin-bottom: 20px;
  }
  .filters label {
    margin-right: 5px;
  }
  </style>
  