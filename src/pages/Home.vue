<template>
    <div>
      <Navigation/>
      <HeroSection/>
      <!-- <FeaturedBooks/>
      <SearchBar/>
      <CategoriesSection/>
      <ReviewsSection/> -->
      <NewsletterSignup/>
    </div>
  </template>
  
  <script>
  import Navigation from "@/components/Navigation.vue";
  import HeroSection from "@/components/HeroSection.vue";
  import FeaturedBooks from "@/components/FeaturedBooks.vue";
  import SearchBar from "@/components/SearchBar.vue";
  import CategoriesSection from "@/components/CategoriesSection.vue";
  import ReviewsSection from "@/components/ReviewsSection.vue";
  import NewsletterSignup from "@/components/NewsletterSignup.vue";
  
  export default {
    name: "Home",
    components: {
      Navigation,
      HeroSection,
      FeaturedBooks,
      SearchBar,
      CategoriesSection,
      ReviewsSection,
      NewsletterSignup
    }
  };
  </script>
  