<style lang="scss" scoped>
    @import '../Project_styles/gallery_style.css';
</style>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="gallery-header">
            <h1 class="gallery-title">
              <span class="title-light">Photo</span><br>
              <span class="title-bold">Gallery</span>
            </h1>
          </div>
        </div>
      </div>
      
      <div class="row gallery-grid">
        <div 
          v-for="(image, index) in currentPageImages" 
          :key="index"
          :class="getImageClass(index)"
          class="gallery-item"
        >
          <div class="image-container" @click="openModal(getCurrentImageIndex(index))">
            <img :src="image.src" :alt="image.alt" class="img-fluid gallery-image" />
            <div class="image-overlay">
              <i class="fas fa-search-plus"></i>
            </div>
          </div>
        </div>
      </div>
      
      <div class="row mt-5">
        <div class="col-12">
          <div class="pagination-container">
            <div class="pagination-info">
              <span class="current-page">{{ String(currentPage).padStart(2, '0') }}</span>
              <span class="separator">/</span>
              <span class="total-pages">{{ String(totalPages).padStart(2, '0') }}</span>
            </div>
            <div class="pagination-controls">
              <button 
                class="nav-btn prev-btn" 
                @click="prevPage" 
                :disabled="currentPage === 1"
              >
                <i class="fas fa-arrow-left"></i>
              </button>
              <button 
                class="nav-btn next-btn" 
                @click="nextPage" 
                :disabled="currentPage === totalPages"
              >
                <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div v-if="modalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">
          <i class="fas fa-times"></i>
        </button>
        <img :src="galleryImages[currentModalImage].src" :alt="galleryImages[currentModalImage].alt" class="modal-image" />
        <div class="modal-nav">
          <button class="modal-nav-btn prev" @click="prevModalImage" :disabled="currentModalImage === 0">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="modal-nav-btn next" @click="nextModalImage" :disabled="currentModalImage === galleryImages.length - 1">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
        <div class="modal-counter">
          {{ currentModalImage + 1 }} / {{ galleryImages.length }}
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Gallery',
  data() {
    return {
      currentPage: 1,
      imagesPerPage: 6,
      modalOpen: false,
      currentModalImage: 0,
      galleryImages: [
        {
          src: require('@/assets/g1.jpg'),
          alt: 'Modern Architecture 1'
        },
        {
          src: require('@/assets/g2.jpg'),
          alt: 'Modern Architecture 2'
        },
        {
          src: require('@/assets/g3.jpg'),
          alt: 'Project Architecture 1'
        },
        {
          src: require('@/assets/g4.jpg'),
          alt: 'Project Architecture 2'
        },
        
        {
          src: require('@/assets/our1.jpg'),
          alt: 'Contemporary Building'
        },
        {
          src: require('@/assets/our2.jpg'),
          alt: 'Urban Architecture'
        },
        {
          src: require('@/assets/our3.jpg'),
          alt: 'Commercial Project'
        },
        {
          src: require('@/assets/project2.jpg'),
          alt: 'Residential Design'
        },
        {
          src: require('@/assets/project3.jpg'),
          alt: 'Architectural Detail'
        },
        {
          src: require('@/assets/project1.jpg'),
          alt: 'Interior Space'
        },
        {
          src: require('@/assets/skyline.jpg'),
          alt: 'Structural Design'
        },
        {
          src: require('@/assets/horizon.jpg'),
          alt: 'Modern Facade'
        }
      ]
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.galleryImages.length / this.imagesPerPage);
    },
    currentPageImages() {
      const start = (this.currentPage - 1) * this.imagesPerPage;
      const end = start + this.imagesPerPage;
      return this.galleryImages.slice(start, end);
    }
  },
  methods: {
    getImageClass(index) {
      const patterns = [
        'col-lg-4 col-md-6 col-12', 
        'col-lg-4 col-md-6 col-12', 
        'col-lg-4 col-md-6 col-12', 
        'col-lg-4 col-md-6 col-12', 
        'col-lg-4 col-md-6 col-12', 
        'col-lg-4 col-md-6 col-12',    
      ];
      return patterns[index % patterns.length];
    },
    getCurrentImageIndex(pageIndex) {
      return (this.currentPage - 1) * this.imagesPerPage + pageIndex;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage += 1;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      }
    },
    openModal(imageIndex) {
      this.currentModalImage = imageIndex;
      this.modalOpen = true;
      document.body.style.overflow = 'hidden';
    },
    closeModal() {
      this.modalOpen = false;
      document.body.style.overflow = 'auto';
    },
    nextModalImage() {
      if (this.currentModalImage < this.galleryImages.length - 1) {
        this.currentModalImage += 1;
      }
    },
    prevModalImage() {
      if (this.currentModalImage > 0) {
        this.currentModalImage -= 1;
      }
    }
  },
  mounted() {
    // Добавляем обработчик клавиш для модального окна
    document.addEventListener('keydown', (e) => {
      if (this.modalOpen) {
        if (e.key === 'Escape') {
          this.closeModal();
        } else if (e.key === 'ArrowLeft') {
          this.prevModalImage();
        } else if (e.key === 'ArrowRight') {
          this.nextModalImage();
        }
      }
    });
  }
};
</script>

