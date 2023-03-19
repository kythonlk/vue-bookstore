<template>
    <div class="about-container">
      <page-header title="About Us"></page-header>
      <div class="intro-section">
        <h2>Welcome to our website!</h2>
        <p>We are a team of book lovers who are passionate about reading and sharing our love of books with others. Our goal is to provide a platform where readers can discover new books, connect with other readers, and share their thoughts and opinions.</p>
        <p>Our website features a vast selection of books from a variety of genres, as well as tools to help you find the perfect book for your reading preferences. We also have a community of readers who love to discuss books and share their recommendations.</p>
      </div>
      <div class="team-section">
        <h2>Meet Our Team</h2>
        <div class="team-member" v-for="member in teamMembers" :key="member.id">
          <img :src="member.photo" :alt="member.name">
          <div class="member-info">
            <h3>{{ member.name }}</h3>
            <p>{{ member.position }}</p>
            <p>{{ member.bio }}</p>
          </div>
        </div>
      </div>
      <faq-section></faq-section>
      <contact-information></contact-information>
      <footer></footer>
    </div>
  </template>
  
  <script>
  import PageHeader from "@/components/PageHeader.vue";
  import FaqSection from "@/components/FaqSection.vue";
  import ContactInformation from "@/components/ContactInformation.vue";
  import Footer from "@/components/Footer.vue";
  
  export default {
    name: "About",
    components: {
      PageHeader,
      FaqSection,
      ContactInformation,
      Footer,
    },
    data() {
      return {
        teamMembers: [
          {
            id: 1,
            name: "John Doe",
            position: "Founder & CEO",
            photo: "/images/team/john-doe.jpg",
            bio: "John is a book lover who has a passion for entrepreneurship and innovation. He founded our website with the goal of creating a platform where readers can discover new books and connect with other readers.",
          },
          {
            id: 2,
            name: "Jane Smith",
            position: "Marketing Director",
            photo: "/images/team/jane-smith.jpg",
            bio: "Jane is a marketing expert who has a deep understanding of the book industry. She leads our marketing efforts and helps us connect with readers and authors around the world.",
          },
          {
            id: 3,
            name: "Bob Johnson",
            position: "Content Manager",
            photo: "/images/team/bob-johnson.jpg",
            bio: "Bob is a writer and editor who has a passion for books and storytelling. He manages our content team and ensures that our website features the best and most informative content for our readers.",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .about-container {
    padding: 50px;
  }
  
  .intro-section {
    margin-bottom: 50px;
  }
  
  .team-member {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
  }
  
  .team-member img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 50px;
  }
  
  .team-member h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .team-member p {
    font-size: 16px;
    margin-bottom: 10px;
  }
  </style>
  