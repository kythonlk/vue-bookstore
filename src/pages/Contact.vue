<template>
    <div class="container my-5">
      <PageHeader title="Contact Us" />
  
      <div class="row">
        <div class="col-md-6">
          <ContactForm />
        </div>
        <div class="col-md-6">
          <ContactInformation />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import PageHeader from '@/components/PageHeader.vue'
  import ContactForm from '@/components/ContactForm.vue'
  import ContactInformation from '@/components/ContactInformation.vue'
  
  export default {
    name: 'Contact',
    components: {
      PageHeader,
      ContactForm,
      ContactInformation
    }
  }
  </script>
  