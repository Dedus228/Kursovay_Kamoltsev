<style lang="scss" scoped>
    @import '../Project_styles/footer_style.css';
</style>

<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="footer-logo">
            <div class="logo-text">
              <span class="logo-main">DT</span>
              <span class="logo-sub">DIGITAL TEAM</span>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <h5>Information</h5>
          <div class="footer-nav">
            <router-link to="/">Main</router-link>
            <router-link to="/gallery">Gallery</router-link>
            <router-link to="/projects">Projects</router-link>
            <router-link to="/certifications">Certifications</router-link>
            <router-link to="/contacts">Contacts</router-link>
          </div>
        </div>
        <div class="col-md-3">
          <h5>Contacts</h5>
          <div class="contact-info">
            <div class="contact-item">
              <i class="fas fa-map-marker-alt"></i>
              <div>
                <span>100 Congress Ave</span>
                <span>Austin, TX 78701</span>
              </div>
            </div>
            <div class="contact-item">
              <i class="fas fa-phone"></i>
              <span>512.333.2222</span>
            </div>
            <div class="contact-item">
              <i class="fas fa-envelope"></i>
              <span>sampleemail@gmail.com</span>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <h5>Social Media</h5>
          <div class="social-icons">
            <a href="#" class="social-icon">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-pinterest-p"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div class="copyright">
        © 2025 All Rights Reserved
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

