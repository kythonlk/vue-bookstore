import Vue from 'vue'
import Vuex from 'vuex'
import books from './books'
import categories from './categories'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    books,
    categories
  }
})

export default store
