<template>
    <div class="sort-options">
      <label for="sort-by">Sort by:</label>
      <select id="sort-by" v-model="selectedSortOption" @change="onSortOptionChange">
        <option v-for="option in sortOptions" :value="option.value">{{ option.label }}</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SortOptions',
    props: {
      sortOptions: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        selectedSortOption: this.sortOptions[0].value
      }
    },
    methods: {
      onSortOptionChange() {
        this.$emit('sort-changed', this.selectedSortOption);
      }
    }
  }
  </script>
  
  <style scoped>
  .sort-options {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  
  label {
    margin-right: 0.5rem;
  }
  
  select {
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
  }
  </style>
  