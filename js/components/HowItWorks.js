const HowItWorks = {
  props: {
    howItWorks: { type: Object, required: true }
  },
  template: `
    <main>
      <section class="page-hero">
        <div class="eyebrow">{{ howItWorks.eyebrow }}</div>
        <h1 class="page-title">{{ howItWorks.title }}</h1>
        <p class="hero-text">{{ howItWorks.intro }}</p>
      </section>

      <section class="section-pad section-muted border-bottom">
        <h2 class="section-title">{{ howItWorks.bidderTitle }}</h2>
        <div class="row g-3 mt-2">
          <div class="col-md-6 col-lg-3" v-for="(step, index) in howItWorks.bidderSteps" :key="step.title">
            <div class="step-card"><div class="step-number">{{ index + 1 }}</div><h3>{{ step.title }}</h3><p class="muted mb-0">{{ step.text }}</p></div>
          </div>
        </div>
      </section>

      <section class="section-pad">
        <h2 class="section-title">{{ howItWorks.sellerTitle }}</h2>
        <div class="row g-3 mt-2">
          <div class="col-md-6 col-lg-3" v-for="(step, index) in howItWorks.sellerSteps" :key="step.title">
            <div class="step-card"><div class="step-number">{{ index + 1 }}</div><h3>{{ step.title }}</h3><p class="muted mb-0">{{ step.text }}</p></div>
          </div>
        </div>
      </section>

      <section class="section-pad section-muted border-top">
        <div class="text-center mx-auto mb-4" style="max-width: 760px;">
          <h2 class="section-title">{{ howItWorks.faqTitle }}</h2>
          <p class="muted mb-0">{{ howItWorks.faqIntro }}</p>
        </div>
        <div class="row g-3">
          <div class="col-md-6" v-for="faq in howItWorks.faqs" :key="faq.question">
            <div class="faq-card">
              <h3>{{ faq.question }}</h3>
              <p class="muted mb-0">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  `
};
