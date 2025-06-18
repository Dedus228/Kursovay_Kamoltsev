import { createRouter, createWebHistory } from 'vue-router';
import Main from '../components/Main.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../components/Gallery.vue'),
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../components/Projects.vue'),
  },
  {
    path: '/certifications',
    name: 'Certifications',
    component: () => import('../components/Certifications.vue'),
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../components/Contacts.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;