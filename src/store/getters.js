const getters = {
    getBookById: (state) => (id) => {
      return state.books.find((book) => book.id === id);
    },
    getBooksByCategory: (state) => (category) => {
      return state.books.filter((book) => book.category === category);
    },
    getCategories: (state) => {
      return state.categories;
    },
  };
  
  export default getters;
  