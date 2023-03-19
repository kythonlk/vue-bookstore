export default {
    SET_BOOKS(state, books) {
      state.books = books;
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    SET_SELECTED_CATEGORY(state, category) {
      state.selectedCategory = category;
    },
    SET_SELECTED_BOOK(state, book) {
      state.selectedBook = book;
    }
  };
  