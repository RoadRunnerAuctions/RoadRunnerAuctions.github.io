const About = {
  props: {
    about: { type: Object, required: true }
  },
  template: `
    <main>
      <section class="page-hero">
        <div class="eyebrow">{{ about.eyebrow }}</div>
        <h1 class="page-title">{{ about.title }}</h1>
        <p class="hero-text">{{ about.intro }}</p>
      </section>

      <section class="section-pad">
        <div class="row g-4">
          <div class="col-lg-7">
            <h2 class="section-title">{{ about.sectionTitle }}</h2>
            <p class="muted" v-for="paragraph in about.paragraphs" :key="paragraph">{{ paragraph }}</p>
          </div>
          <div class="col-lg-5">
            <div class="info-card highlight-card">
              <h3>{{ about.highlight.title }}</h3>
              <p class="muted mb-0">{{ about.highlight.text }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section-pad section-muted border-top">
        <div class="row g-3">
          <div class="col-md-4" v-for="card in about.cards" :key="card.title">
            <div class="info-card"><h3>{{ card.title }}</h3><p class="muted mb-0">{{ card.text }}</p></div>
          </div>
        </div>
      </section>

      <section class="section-pad">
        <div class="text-center mx-auto mb-4" style="max-width: 760px;">
          <h2 class="section-title">Ready for owner-approved content</h2>
          <p class="muted mb-0">These areas give the page room to grow without adding unconfirmed information.</p>
          <div class="owner-content-needed text-start">
            <strong>Owner Content Needed</strong>
            <span>Company history, team information, service area details, or any background you want visitors to know.</span>
          </div>
        </div>
        <div class="row g-3">
          <div class="col-md-4" v-for="slot in about.contentSlots" :key="slot.title">
            <div class="content-slot">
              <div class="slot-icon">+</div>
              <h3>{{ slot.title }}</h3>
              <p class="muted mb-0">{{ slot.text }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  `
};
