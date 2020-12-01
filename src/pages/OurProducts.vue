<template>
  <Layout>
    <hero-title
      class="mb-8 mb-sm-10"
      pageTitle="Our Products"
      cloudinaryImageId="louis-reed-pwcKF7L4-no-unsplash_m4ku8c.jpg"
      intro="Mahana is creating premium terpene and cannabinoid-based therapeutic products able to treat and support the health of patients suffering debilitating migraine headache.
"
    ></hero-title>
    <section class="container mb-8 mb-sm-10">
      <div class="row align-items-center">
        <div class="col-sm-6 pr-sm-8">
          <h2 class="text-2xl text-primary" data-aos="fade-up">Research</h2>
          <p class="text-md font-weight-semibold" data-aos="fade-up" data-aos-delay="200">
            Mahana is a science-led company with ongoing research programmes targeted at developing next-generation
            cannabis based migraine medicines
          </p>
          <p data-aos="fade-up" data-aos-delay="400">
            Developing a deeper understanding of the interaction of phytocannabinoids with the endocannabinoid system
            will lead to new areas of cannabinoid migraine therapeutics enabling improved quality of life, and better
            outcomes for migraine sufferers worldwide.
          </p>
          <p data-aos="fade-up" data-aos-delay="600">
            We take pride in the time and effort we put into developing the ingredients, formulations and technical
            specifications of our future product ranges. All Mahana medicinal cannabis products will be produced under
            GMP and will offer unique combinations and levels of cannabinoids designed to address the various stages of
            the migraine headache process, from day to day headache prophylactic management to acute rescue and
            recovery.
          </p>
        </div>
        <div class="col-sm-6" data-aos="fade-up" data-aos-delay="600">
          <g-image class="products-image" src="~/assets/images/research.png" alt="" width="500" />
        </div>
      </div>
    </section>
    <section class="container mb-8 mb-sm-11">
      <div class="row align-items-center">
        <div class="col-sm-6 order-sm-last">
          <h2 class="text-2xl text-primary" data-aos="fade-up">Quality Assurance</h2>
          <p class="text-md font-weight-semibold" data-aos="fade-up" data-aos-delay="200">
            Mahana will cultivate high quality cannabis flower for our R&D programmes.
          </p>
          <p data-aos="fade-up" data-aos-delay="400">
            Our high-tech medicinal cannabis grow facility will produce some of New Zealand’s finest medical cannabis.
            Our medical-grade cannabis products will be grown in accordance with rigorous health and safety standards
            and produced under Good Manufacturing Practices, known as GMP. This ensures all Mahana products are
            consistent, safe and reliable. GMP is the world’s gold standard for medicinal products.
          </p>
        </div>
        <div class="col-sm-6 order-sm-first" data-aos="fade-up" data-aos-delay="600">
          <g-image class="products-image" src="~/assets/images/quality-assurance.png" alt="" width="500" />
        </div>
      </div>
    </section>
    <section class="container mb-8 mb-sm-11">
      <h2 class="text-2xl text-primary text-center" data-aos="fade-up">Research Programs</h2>
      <p
        style="max-width: 700px;"
        class="mx-auto mb-8 text-md font-weight-semibold text-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Through our research partner, University of Auckland, we are interested in supporting Post-Graduate students in
        the following areas
      </p>
      <div class="row">
        <div class="col-sm-4 mb-4 mb-sm-0" data-aos="fade-up">
          <div class="callout">
            <g-image
              height="250"
              width="370"
              class="img-fluid"
              src="~/assets/images/chemical-engineering.jpg"
            ></g-image>
            <h3 class="mt-4 mb-1 text-dark text-lg font-weight-semibold">Chemical Engineering</h3>
            <h4 class="text-md mb-4 text-muted font-weight-normal">Extraction + Isolation</h4>
            <b-button variant="outline-secondary" @click="showModal('Chemical Engineering')">Enquire</b-button>
          </div>
        </div>
        <div class="col-sm-4 mb-4 mb-sm-0" data-aos="fade-up" data-aos-delay="200">
          <div class="callout">
            <g-image height="250" width="370" class="img-fluid" src="~/assets/images/plant-biology.jpg"></g-image>
            <h3 class="mt-4 mb-1 text-dark text-lg font-weight-semibold">Plant Biology</h3>
            <h4 class="text-md mb-4 text-muted font-weight-normal">Crop Diversity + Resilience</h4>
            <b-button variant="outline-secondary" @click="showModal('Plant Biology')">Enquire</b-button>
          </div>
        </div>
        <div class="col-sm-4 mb-4 mb-sm-0" data-aos="fade-up" data-aos-delay="400">
          <div class="callout">
            <g-image height="250" width="370" class="img-fluid" src="~/assets/images/neuropathic-pain.jpg"></g-image>
            <h3 class="mt-4 mb-1 text-dark text-lg font-weight-semibold">Neuropathic Pain</h3>
            <h4 class="text-md mb-4 text-muted font-weight-normal">Cannabinoids + Patient Efficacy</h4>
            <b-button variant="outline-secondary" @click="showModal('Neuropathic Pain')">Enquire</b-button>
          </div>
        </div>
      </div>
    </section>
    <b-modal v-model="modalShow" title="Research Enquiry" hide-footer>
      <form name="contact" method="POST" data-netlify="true">
        <div class="form-group">
          <label for="interestInput">I'm interested in</label>
          <input
            disabled
            :value="selectedProgram"
            type="text"
            name="interest"
            class="form-control"
            id="interestInput"
          />
        </div>
        <div class="form-group">
          <label for="firstNameInput">First name</label>
          <input type="text" name="firstName" class="form-control" id="firstNameInput" />
        </div>
        <div class="form-group">
          <label for="lastNameInput">Last name</label>
          <input type="text" name="lastName" class="form-control" id="lastNameInput" />
        </div>
        <div class="form-group">
          <label for="emailInput">Email Address</label>
          <input type="email" name="email" class="form-control" id="emailInput" />
        </div>
        <div class="form-group text-center">
          <button class="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </b-modal>
  </Layout>
</template>

<script>
import HeroTitle from '~/components/HeroTitle';

export default {
  metaInfo: {
    title: 'Our Products',
  },
  data() {
    return {
      modalShow: false,
      selectedProgram: null,
    };
  },
  methods: {
    showModal(value) {
      console.log(value);
      this.selectedProgram = value;
      this.modalShow = true;
    },
  },
  components: {
    HeroTitle,
  },
};
</script>

<style lang="scss" scoped>
.callout {
  display: block;
  &:hover {
    text-decoration: none;
  }
}
</style>
