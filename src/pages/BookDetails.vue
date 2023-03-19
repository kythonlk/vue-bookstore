<template>
    <div class="container my-5">
      <BookHeader :book="book" />
      <div class="row mt-5">
        <div class="col-md-4">
          <img :src="book.image" class="img-fluid" alt="Book cover">
          <AddToCartButton :book="book" />
        </div>
        <div class="col-md-8">
          <BookDescription :book="book" />
          <BookReviews :book="book" />
        </div>
      </div>
      <RelatedBooks :books="relatedBooks" />
      <BackToCategoriesButton />
    </div>
  </template>
  
  <script>
  import BookHeader from "@/components/BookHeader.vue";
  import BookDescription from "@/components/BookDescription.vue";
  import BookReviews from "@/components/BookReviews.vue";
  import RelatedBooks from "@/components/RelatedBooks.vue";
  import AddToCartButton from "@/components/AddToCartButton.vue";
  import BackToCategoriesButton from "@/components/BackToCategoriesButton.vue";
  import { books } from "@/data/books.js";
  
  export default {
    name: "BookDetails",
    components: {
      BookHeader,
      BookDescription,
      BookReviews,
      RelatedBooks,
      AddToCartButton,
      BackToCategoriesButton,
    },
    data() {
      return {
        book: {},
        relatedBooks: [],
      };
    },
    created() {
      const bookId = this.$route.params.id;
      this.book = books.find((book) => book.id === bookId);
      this.relatedBooks = books.filter(
        (book) => book.category === this.book.category && book.id !== bookId
      );
    },
  };
  </script>
  