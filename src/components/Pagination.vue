<template>
    <div class="pagination">
      <button :disabled="currentPage === 1" @click="goToPage(currentPage - 1)">Previous</button>
      <span v-for="page in pages" :key="page"
            :class="page === currentPage ? 'current-page' : ''"
            @click="goToPage(page)">{{ page }}</span>
      <button :disabled="currentPage === totalPages" @click="goToPage(currentPage + 1)">Next</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      currentPage: {
        type: Number,
        required: true
      },
      totalPages: {
        type: Number,
        required: true
      }
    },
    computed: {
      pages() {
        const range = 2;
        const start = Math.max(1, this.currentPage - range);
        const end = Math.min(this.totalPages, this.currentPage + range);
  
        return Array(end - start + 1)
          .fill()
          .map((_, i) => start + i);
      }
    },
    methods: {
      goToPage(page) {
        this.$emit('page-changed', page);
      }
    }
  }
  </script>
  
  <style scoped>
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .pagination button,
  .pagination span {
    font-size: 16px;
    font-weight: bold;
    margin: 0 5px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }
  
  .pagination button:hover,
  .pagination span:hover {
    background-color: #e3e3e3;
  }
  
  .pagination button:disabled,
  .pagination span.current-page {
    background-color: #1a1a1a;
    color: #fff;
    cursor: default;
  }
  </style>
  