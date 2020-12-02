// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import { NavbarPlugin, CardPlugin, VBScrollspyPlugin, ListGroupPlugin } from 'bootstrap-vue';
import BootstrapVue from 'bootstrap-vue';
import VueSimpleMarkdown from 'vue-simple-markdown';

// import '../node_modules/aos/dist/aos.css';
import '~/assets/scss/style.scss';

import '../cloudinary.js';

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.use(NavbarPlugin);
  Vue.use(CardPlugin);
  Vue.use(VBScrollspyPlugin);
  Vue.use(ListGroupPlugin);
  Vue.use(VueSimpleMarkdown);
  Vue.use(BootstrapVue);

  head.meta.push({
    key: 'og:type',
    property: 'og:type',
    content: 'website',
  });

  head.meta.push({
    key: 'og:description',
    property: 'og:description',
    content: 'Harnessing cannabis plant genetics to create novel migraine medicines from unique cultivars',
  });

  head.meta.push({
    key: 'twitter:description',
    name: 'twitter:description',
    content: 'Harnessing cannabis plant genetics to create novel migraine medicines from unique cultivars',
  });

  head.meta.push({
    name: 'theme-color',
    content: '#093185',
  });
}
