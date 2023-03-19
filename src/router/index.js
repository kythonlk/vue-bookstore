import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import BookDetails from '../pages/BookDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/books/:id',
    name: 'BookDetails',
    component: BookDetails,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
