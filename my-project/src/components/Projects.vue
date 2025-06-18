<style lang="scss" scoped>
    @import '../Project_styles/projects_style.css';
</style>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="projects-header">
            <h1 class="projects-title">
              <span class="title-light">Our</span><br>
              <span class="title-bold">Projects</span>
            </h1>
          </div>
        </div>
      </div>

      <div class="projects-list">
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          class="project-item"
          :class="{ 'with-background': project.hasBackground }"
        >
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="project-image">
                <img :src="project.image" :alt="project.title" class="img-fluid" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="project-content">
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-description">{{ project.description }}</p>
                <a href="#" class="view-more-btn">
                  VIEW MORE
                  <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          title: 'LORUM Project',
          description: 'Lorem Ipsum - это просто фиктивный текст для полиграфической и наборной промышленности. Lorem Ipsum является стандартным фиктивным текстом в отрасли с 1500-х годов, чем и вдохновилялись современые архитекторы при постройке данноо комплекса ...',
          image: require('@/assets/project1.jpg'),
          hasBackground: true
        },
        {
          title: 'SKYLINE TOWER Project',
          description: "Небесный шпиль — это символ современной архитектуры, воплощающий инновации и эстетику. Его уникальный дизайн стал эталоном с начала XXI века, когда группа архитекторов объединила передовые технологии и экологические материалы, чтобы создать знаковое сооружение для мегаполиса ...",
          image: require('@/assets/skyline.jpg'),
          hasBackground: false
        },
        {
          title: 'HORIZON COMPLEX Project',
          description: "Горизонт будущего — это смелый проект, отражающий передовые тенденции в строительстве. С конца XX века он стал ориентиром для архитекторов, стремящихся объединить высокие технологии и минималистичный дизайн, создавая пространство для жизни и работы нового поколения ... ",
          image: require('@/assets/horizon.jpg'),
          hasBackground: true
        }
      ]
    };
  }
};
</script>
