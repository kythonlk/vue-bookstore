import axios from 'axios';

export default {
  fetchBooks({ commit }) {
    return axios.get('/api/books')
      .then(response => {
        commit('SET_BOOKS', response.data);
      });
  },
  
  fetchCategories({ commit }) {
    return axios.get('/api/categories')
      .then(response => {
        commit('SET_CATEGORIES', response.data);
      });
  },
  
  searchBooks({ commit }, searchQuery) {
    return axios.get(`/api/search?q=${searchQuery}`)
      .then(response => {
        commit('SET_SEARCH_RESULTS', response.data);
      });
  },
  
  fetchBook({ commit }, bookId) {
    return axios.get(`/api/books/${bookId}`)
      .then(response => {
        commit('SET_SELECTED_BOOK', response.data);
      });
  },
  
  submitContactForm({ commit }, form) {
    return axios.post('/api/contact', form)
      .then(response => {
        commit('SET_CONTACT_FORM_SUBMITTED', true);
      });
  }
}
