<style lang="scss" scoped>
    @import '../Project_styles/header_style.css';
</style>

<template>
  <header>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-6 col-md-3">
          <router-link to="/" class="logo">
            <div class="logo-text">
              <span class="logo-main">DT</span>
              <span class="logo-sub">Digital Team</span>
            </div>
          </router-link>
        </div>
        <div class="col-12 col-md-6 order-md-2">
          <nav :class="{ active: isNavActive }">
            <router-link to="/" :class="{ active: $route.path === '/' }">MAIN</router-link>
            <router-link to="/gallery" :class="{ active: $route.path === '/gallery' }">GALLERY</router-link>
            <router-link to="/projects" :class="{ active: $route.path === '/projects' }">PROJECTS</router-link>
            <router-link to="/certifications" :class="{ active: $route.path === '/certifications' }">CERTIFICATIONS</router-link>
            <router-link to="/contacts" :class="{ active: $route.path === '/contacts' }">CONTACTS</router-link>
          </nav>
        </div>
        <div class="col-6 col-md-3 d-flex justify-content-end order-md-3">
          <div class="profile-icon">
            <i class="far fa-user"></i>
          </div>
          <span class="hamburger d-md-none" :class="{ active: isNavActive }" @click="toggleNav">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isNavActive: false,
    };
  },
  methods: {
    toggleNav() {
      this.isNavActive = !this.isNavActive;
    },
  },
};
</script>
