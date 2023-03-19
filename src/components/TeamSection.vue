<template>
    <section class="team-section">
      <h2>Meet Our Team</h2>
      <div class="team-members">
        <div v-for="(member, index) in team" :key="index" class="team-member">
          <img :src="member.avatar" alt="Team member avatar">
          <h3>{{ member.name }}</h3>
          <p>{{ member.title }}</p>
          <p>{{ member.bio }}</p>
          <div class="social-links">
            <a v-for="(link, index) in member.socialLinks" :key="index" :href="link.url"><i :class="link.icon"></i></a>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        team: [
          {
            name: 'John Doe',
            title: 'Founder & CEO',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            avatar: 'https://via.placeholder.com/150x150',
            socialLinks: [
              {
                icon: 'fab fa-twitter',
                url: 'https://twitter.com/johndoe'
              },
              {
                icon: 'fab fa-linkedin',
                url: 'https://www.linkedin.com/in/johndoe'
              },
              {
                icon: 'fab fa-github',
                url: 'https://github.com/johndoe'
              }
            ]
          },
          {
            name: 'Jane Smith',
            title: 'Marketing Director',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            avatar: 'https://via.placeholder.com/150x150',
            socialLinks: [
              {
                icon: 'fab fa-twitter',
                url: 'https://twitter.com/janesmith'
              },
              {
                icon: 'fab fa-linkedin',
                url: 'https://www.linkedin.com/in/janesmith'
              },
              {
                icon: 'fab fa-github',
                url: 'https://github.com/janesmith'
              }
            ]
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .team-section {
    margin: 50px auto;
    text-align: center;
  }
  
  .team-members {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
  }
  
  .team-member {
    margin: 20px;
    max-width: 300px;
  }
  
  .team-member img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    margin-bottom: 10px;
  }
  
  .team-member h3 {
    font-size: 1.5rem;
    margin-bottom: 5px;
  }
  
  .team-member p {
    margin-bottom: 10px;
  }
  
  .social-links {
    display: flex;
    justify-content: center;
  }
  
  .social-links a {
    margin: 0 10px;
  }
  
  .social-links i {
    font-size: 1.5rem;
  }
  </style>
  