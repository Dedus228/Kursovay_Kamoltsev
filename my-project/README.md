# my-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Digital Team - сайт с дизайнами архитектуры зданий на vue 3

Digital Team - это современное портфолио архитектурного бюро, созданное с использованием Vue.js. Сайт демонстрирует проекты компании, галерею работ, сертификации и контактную информацию.

### Особенности

-Полностью адаптивный дизайн для всех устройств

-Анимации и интерактивные элементы

-Галерея с пагинацией и модальным окном

-Контактная форма с валидацией

### Технологический стек

- **Фреймворк:** [Vue 3]
- **Маршрутизация:** [Vue Router]
- **Стилизация:** [SCSS]
- **Выравнивание и границы:** [Bootstrap Grid]  адаптивная сетка
- **UI Компоненты:** [Font Awesome] - иконки
- **UI Компоненты:** [Google Maps API] - карта в разделе контактов

### Структура проекта

Проект имеет четкую и масштабируемую структуру, разделяя компоненты, сетка на (boostrap) и другие ресурсы.

```
src/
├── assets/              # Статические файлы: изображения, стили
├── components/          # Vue компоненты
│   ├── Certifications.vue # Страница квалификации
│   ├── Contacts.vue #Страница контактов
│   ├── Footer.vue #Колодец
│   ├── Gallery.vue #Галлерея
│   ├── Header.vue #Шапка
│   ├── Main.vue #Основная страница
│   └── Projects.vue #Страница проектов
├── Project_styles/      # Стили компонентов
│   ├── certifications_style.css
│   ├── contacts_style.css
│   ├── footer_style.css
│   ├── gallery_style.css
│   ├── header_style.css
│   ├── main_style.css
│   └── projects_style.css           
├── router/              # Конфигурация Vue Router
│   └── index.js
├── App.vue              # Корневой компонент приложения
└── main.js              # Точка входа в приложение
```
