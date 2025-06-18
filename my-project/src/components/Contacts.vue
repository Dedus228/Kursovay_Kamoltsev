<style lang="scss" scoped>
    @import '../Project_styles/contacts_style.css';
</style>

<template>
  <main class="contacts-page">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div class="contact-content">
            <h1 class="page-title">
              <span class="title-light">Contact</span>
              <span class="title-bold">Information</span>
            </h1>
            
            <div class="contact-details">
              <div class="company-info">
                <h3>Company Name</h3>
                <p class="address">100 Congress Ave, Austin, TX 78701</p>
              </div>
              
              <div class="contact-item phone">
                <div class="company-info">
                <h3>Company Phone</h3>
                <h4>512.333.2222</h4>
                </div>
              </div>
              
              <div class="contact-item email">
                <div class="company-info">
                  <h3>Company Email</h3>
                <p>sampleemail@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-lg-6 col-md-12">
          <div class="map-container">
            <div class="map-placeholder">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.080635!2d-97.7430608!3d30.2649988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b50f4b4e7b01%3A0x4b2c5b4f7e8e9a0b!2s100%20Congress%20Ave%2C%20Austin%2C%20TX%2078701%2C%20USA!5e0!3m2!1sen!2sus!4v1623456789012!5m2!1sen!2sus&markers=color:red%7C30.2649988,-97.7430608"
                width="100%" 
                height="400" 
                style="border:0;" 
                allowfullscreen="">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'AppContacts',
  mounted() {
  }
};
</script>
