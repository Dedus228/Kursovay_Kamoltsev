<style lang="scss" scoped>
    @import '../Project_styles/certifications_style.css';
</style>

<template>
  <main>
    <div class="container">
      <div class="col-lg-6">
        <h1 class="page-title">
          <span class="title-light">Company</span>
          <span class="title-bold">Certifications</span>
        </h1>
      </div>
      <div class="certifications-content">
        <div class="row">
          <div class="col-md">
            <div class="content-section">
              <h3>Наши достижения и квалификации</h3>
              <p>
                Мы гордимся нашими профессиональными сертификатами и достижениями, 
                которые подтверждают высокий уровень экспертизы нашей команды в области 
                цифровых технологий и разработки.Мы гордимся нашими профессиональными сертификатами и достижениями, 
                которые подтверждают высокий уровень экспертизы нашей команды в области цифровых технологий и разработки. 
                Наши специалисты обладают глубокими знаниями и практическим опытом, подкрепленными международными сертификатами от ведущих технологических компаний и образовательных платформ. 
                Мы постоянно совершенствуем свои навыки, участвуем в отраслевых конференциях и внедряем инновационные решения, 
                чтобы предлагать клиентам передовые продукты и услуги. Наша приверженность качеству и профессионализму позволяет нам успешно реализовывать проекты любой сложности, 
                обеспечивая надежность, эффективность и современный подход к каждому решению.
              </p>
            </div>
          </div>
        <div class="additional-info">
          <div class="row">
            <div class="col-md-4">
              <div class="info-card">
                <h4>Партнерства</h4>
                <p>Мы являемся официальными партнерами ведущих технологических компаний</p>
                <ul>
                  <li>Microsoft Gold Partner</li>
                  <li>AWS Advanced Consulting Partner</li>
                  <li>Google Cloud Premier Partner</li>
                </ul>
              </div>
            </div>
            <div class="col-md-4">
              <div class="info-card">
                <h4>Соответствие стандартам</h4>
                <p>Наша работа соответствует международным стандартам качества</p>
                <ul>
                  <li>GDPR Compliance</li>
                  <li>SOC 2 Type II</li>
                  <li>PCI DSS Level 1</li>
                </ul>
              </div>
            </div>
            <div class="col-md-4">
              <div class="info-card">
                <h4>Экспертиза команды</h4>
                <p>Наши специалисты имеют подтвержденную квалификацию</p>
                <ul>
                  <li>15+ сертифицированных разработчиков</li>
                  <li>8+ архитекторов решений</li>
                  <li>5+ DevOps инженеров</li>
                </ul>
              </div>
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
  name: 'AppCertifications',
  mounted() {
    this.observeElements();
  },
  methods: {
    observeElements() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, {
        threshold: 0.1
      });
      document.querySelectorAll('.certification-item, .info-card').forEach(el => {
        observer.observe(el);
      });
    }
  }
};
</script>
