const { createApp } = Vue;

createApp({
  components: {
    NavBar,
    Home,
    About,
    Services,
    HowItWorks,
    Contact,
    NotFound,
    SiteFooter
  },
  data() {
    return {
      route: window.location.hash || '#/',
      siteData
    };
  },
  computed: {
    cleanRoute() {
      return this.route.replace('#', '').replace(/\/$/, '') || '/';
    },
    currentPage() {
      const pages = {
        '/': 'Home',
        '/about': 'About',
        '/services': 'Services',
        '/how-it-works': 'HowItWorks',
        '/contact': 'Contact'
      };
      return pages[this.cleanRoute] || 'NotFound';
    },
    currentPageProps() {
      const propsByPage = {
        Home: { home: this.siteData.home, company: this.siteData.company },
        About: { about: this.siteData.about },
        Services: { services: this.siteData.services },
        HowItWorks: { howItWorks: this.siteData.howItWorks },
        Contact: { contact: this.siteData.contact, company: this.siteData.company },
        NotFound: {}
      };
      return propsByPage[this.currentPage] || {};
    }
  },
  mounted() {
    window.addEventListener('hashchange', this.updateRoute);
  },
  beforeUnmount() {
    window.removeEventListener('hashchange', this.updateRoute);
  },
  methods: {
    updateRoute() {
      this.route = window.location.hash || '#/';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
  template: `
    <div class="site-shell">
      <NavBar :company="siteData.company" :navigation="siteData.navigation" />
      <component :is="currentPage" v-bind="currentPageProps" />
      <SiteFooter :company="siteData.company" :footer="siteData.footer" />
    </div>
  `
}).mount('#app');
