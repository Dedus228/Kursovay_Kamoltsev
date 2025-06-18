<style lang="scss" scoped>
    @import '../Project_styles/main_style.css';
</style>

<template>
  <main>
    <!-- Lorum главная  -->
    <section class="hero-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="hero-content">
              <h1 class="hero-title">
                PROJECT<br>
                <span class="project-name">Lorum</span>
              </h1>
              <div class="carousel-navigation">
                <button class="nav-btn prev-btn" @click="prevSlide">
                  <i class="fas fa-arrow-left"></i>
                </button>
                <button class="nav-btn next-btn" @click="nextSlide">
                  <i class="fas fa-arrow-right"></i>
                </button>
              </div>
              <div class="slide-counter">
                <span class="current">{{ String(currentSlide).padStart(2, '0') }}</span>
                <span class="separator">/</span>
                <span class="total">{{ String(totalSlides).padStart(2, '0') }}</span>
              </div>
              <div class="hero-cta">
                <router-link to="/projects" class="read-more-btn">
                  VIEW MORE
                  <i class="fas fa-arrow-right"></i>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="hero-image-container">
              <div class="hero-image">
                <img :src="slides[currentSlide - 1].image" 
                class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

<!-- About -->
    <section class="about-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="about-images">
              <div class="row">
                <div class="col-12 mb-4">
                  <div class="about-image-main">
                    <img src="@/assets/a1.jpg" class="img-fluid" alt="Modern Architecture" />
                  </div>
                </div>
                <div class="col-6">
                  <div class="about-image-small">
                    <img src="@/assets/a2.jpg" class="img-fluid" alt="Building Detail" />
                  </div>
                </div>
                <div class="col-6">
                  <div class="about-image-small">
                    <img src="@/assets/a3.jpg" class="img-fluid" alt="Building Detail" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-content">
              <h2 class="section-title">About</h2>
              <p class="about-text">
                Lorem Ipsum - это просто фиктивный текст для полиграфической и наборной промышленности. Lorem Ipsum является стандартным фиктивным текстом в отрасли с 1500-х годов, чем и вдохновилялись современые архитекторы при постройке данноо комплекса ...
              </p>
              <router-link to="/projects" class="view-more-btn">
                READ MORE 
                <i class="fas fa-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

<!-- mission -->
    <section class="mission-section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="section-title text-center">Main Focus/Mission Statement</h2>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-lg-6">
            <div class="mission-item">
              <div class="mission-number">1</div>
              <div class="mission-content">
                <p>Мы должны знать, что такое долг перед богом, и должны понимать, что такое элита. Для достижения цели, лекция и содействие должны быть выполнены.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="mission-item">
              <div class="mission-number">2</div>
              <div class="mission-content">
                <p>Lorem Ipsum является стандартным фиктивным текстом в отрасли с 1500-х годов, чем и вдохновилялись современые архитекторы при постройке данноо комплекса.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

<!-- Our Projects -->
    <section class="projects-section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="section-title">Our Projects</h2>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-lg-6">
            <div class="project-card project-main">
              <img src="@/assets/project1.jpg" class="img-fluid" alt="Sample Project" />
              <div class="project-overlay">
                <h3 class="project-title">Sample Project</h3>
                <router-link to="/projects" class="project-link">
                  VIEW MORE 
                  <i class="fas fa-arrow-right"></i>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="project-card project-secondary mb-3">
              <img src="@/assets/horizon.jpg" class="img-fluid" alt="Project 2" />
            </div>
            <div class="row">
              <div class="col-6">
                <div class="project-card project-small">
                  <img src="@/assets/skyline.jpg" class="img-fluid" alt="Project 3" />
                </div>
              </div>
              <div class="col-6">
                <div class="project-card project-small">
                  <img src="@/assets/our1.jpg" class="img-fluid" alt="Project 4" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
              <div class="project-card project-small">
                <img src="@/assets/our2.jpg" class="img-fluid" alt="Project 5" />
              </div>
            </div>
            <div class="col-6">
              <div class="project-card project-small">
                <img src="@/assets/our3.jpg" class="img-fluid" alt="Project 6" />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>

<!-- contact -->
    <section class="contact-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h2 class="section-title">Contact Us</h2>
            <form class="contact-form" @submit.prevent="handleSubmit">
              <div class="form-group">
                <input 
                  type="text" 
                  class="form-control" 
                  placeholder="Name" 
                  v-model="formData.name"
                />
              </div>
              <div class="form-group">
                <input 
                  type="tel" 
                  class="form-control" 
                  placeholder="Phone Number*" 
                  v-model="formData.phone"
                />
              </div>
              <div class="form-group">
                <input 
                  type="email" 
                  class="form-control" 
                  placeholder="E-mail*" 
                  v-model="formData.email"
                />
              </div>
              <div class="form-group">
                <input 
                  type="text" 
                  class="form-control" 
                  placeholder="Interested in" 
                  v-model="formData.interestedIn"
                />
              </div>
              <div class="form-group">
                <textarea 
                  class="form-control" 
                  rows="4" 
                  placeholder="Message*"
                  v-model="formData.message"
                ></textarea>
              </div>
              <div class="form-group">
                <button type="submit" class="send-email-btn">
                  SEND MESSAGE
                  <i class="fas fa-arrow-right"></i>
                </button>
              </div>
            </form>
          </div>
          <div class="col-lg-6">
            <div class="contact-image">
              <img src="@/assets/contact-person.jpg" class="img-fluid" alt="Contact Person" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      currentSlide: 1,
      totalSlides: 3,
      slides: [
        {
          image: require('@/assets/project1.jpg'),
          alt: 'Project 1'
        },
        {
          image: require('@/assets/project2.jpg'),
          alt: 'Project 2'
        },
        {
          image: require('@/assets/project3.jpg'),
          alt: 'Project 3'
        }
      ],
      formData: {
        name: '',
        phone: '',
        email: '',
        interestedIn: '',
        message: ''
      }
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = this.currentSlide === this.totalSlides ? 1 : this.currentSlide + 1;
    },
    prevSlide() {
      this.currentSlide = this.currentSlide === 1 ? this.totalSlides : this.currentSlide - 1;
    },
    handleSubmit() {
      // Создаем объект с данными формы
      const formDataToSend = {
        name: this.formData.name.trim(),
        phone: this.formData.phone.trim(),
        email: this.formData.email.trim(),
        interestedIn: this.formData.interestedIn.trim(),
        message: this.formData.message.trim(),
      };
      
      // Выводим данные в консоль в формате JSON
      console.log('Form Data:', JSON.stringify(formDataToSend, null, 2));
      
      // Также  обычный объект для удобства отладки
      console.log('Form Object:', formDataToSend);
    },
  }
};
</script>
