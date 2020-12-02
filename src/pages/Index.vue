<template>
  <Layout>
    <section class="hero container-fluid">
      <div class="hero-content pb-8 text-center">
        <h1 class="text-3xl" data-aos="fade-up" data-aos-offset="0">A Cure for Migraine is Coming</h1>
        <h2 class="faded text-lg mb-6" data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">
          Harnessing cannabis plant genetics to create novel migraine medicines from unique cultivars
        </h2>
        <div data-aos="fade-up" data-aos-delay="500" data-aos-offset="0">
          <h3 class="text-lg mb-5 hr">Register your interest</h3>
          <div id="mc_embed_signup">
            <form
              action="https://mahanabiopharma.us7.list-manage.com/subscribe/post?u=0ad08557738929089c8fbd124&amp;id=53d7f46597"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              class="validate form-dark"
              target="_blank"
              novalidate
            >
              <div id="mc_embed_signup_scroll" class="d-sm-flex justify-content-center align-items-center">
                <!-- <div class="indicates-required"><span class="asterisk">*</span> indicates required</div> -->
                <div class="mc-field-group flex-grow-1 mr-sm-4 mb-4 mb-sm-0">
                  <!-- <label for="mce-EMAIL">Email Address <span class="asterisk">*</span> </label> -->
                  <input
                    placeholder="Your Email Address"
                    type="email"
                    value=""
                    name="EMAIL"
                    class="form-control form-control-lg required email"
                    id="mce-EMAIL"
                  />
                </div>

                <div id="mce-responses" class="clear">
                  <div class="response" id="mce-error-response" style="display:none"></div>
                  <div class="response" id="mce-success-response" style="display:none"></div>
                </div>
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true">
                  <input type="text" name="b_0ad08557738929089c8fbd124_53d7f46597" tabindex="-1" value="" />
                </div>
                <div class="clear">
                  <input
                    type="submit"
                    value="Register"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    class="btn btn-lg btn-primary"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="hero-mask"></div>
    </section>
    <section class="container py-8 py-sm-10">
      <div class="row align-items-center ">
        <div style="z-index:10" class="col-sm-5" data-aos="fade-up">
          <p class="text-primary text-md section-text">
            <strong>Mahana Biopharma</strong> is a NZ owned and operated Medical Cannabis company dedicated to migraine
            headache product development and research for prescribers and patients in New Zealand and around the world
          </p>
        </div>
        <div class="col-sm-7" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <g-image src="~/assets/images/women-in-sun.jpg" alt="Smiling women in the sun" width="600" />
        </div>
      </div>
    </section>
    <section class="container mb-8 mb-sm-10">
      <div class="row align-items-center">
        <div class="col-sm-6 order-sm-last">
          <h3 class="text-primary" data-aos="fade-up">Our Products</h3>
          <p data-aos="fade-up" data-aos-delay="200">
            Mahana is creating premium terpene and cannabinoid-based therapeutic products able to treat and support the
            health of patients suffering debilitating migraine headache.
          </p>
          <p data-aos="fade-up" data-aos-delay="400">
            <g-link class="btn btn-outline-primary" to="/our-products">Find out more</g-link>
          </p>
        </div>
        <div class="col-sm-6 order-sm-first" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
          <g-image class="products-image" src="~/assets/images/our-products.png" alt="" width="500" />
        </div>
      </div>
    </section>
    <section class="container mb-8">
      <div class="row">
        <div class="col-sm-4 mb-4 mb-sm-0" data-aos="fade-up">
          <g-link class="callout img-zoom" to="/cannabis-and-migraines">
            <g-image height="250" width="370" class="img-fluid" src="~/assets/images/cannabis-migraine.jpg"></g-image>
            <h3 class="callout-title">Cannabis &amp; Migraine</h3>
            <div class="callout-mask"></div>
          </g-link>
        </div>
        <div class="col-sm-4 mb-4 mb-sm-0" data-aos="fade-up" data-aos-delay="200">
          <g-link class="callout img-zoom" to="/our-partners">
            <g-image height="250" width="370" class="img-fluid" src="~/assets/images/our-partners.jpg"></g-image>
            <h3 class="callout-title">Our Partners</h3>
            <div class="callout-mask"></div>
          </g-link>
        </div>
        <div class="col-sm-4 mb-4 mb-sm-0" data-aos="fade-up" data-aos-delay="400">
          <g-link class="callout img-zoom" to="/daysaver">
            <g-image
              height="250"
              width="370"
              class="callout-image img-fluid"
              src="~/assets/images/daysaver.jpg"
            ></g-image>
            <h3 class="callout-title tm pr-5">Daysaver</h3>
            <div class="callout-mask"></div>
          </g-link>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Mahana Biopharma',
  },
};
</script>

<style lang="scss" scoped>
.hero {
  background-image: url(../assets/images/homepage-hero-desktop.jpg);
  background-size: cover;
  height: calc(100vh + 100px);
  // min-height: 00px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  position: relative;
  .hr {
    @include media-breakpoint-up(sm) {
      position: relative;
      &::before {
        content: '';
        height: 1px;
        background-color: #fff;
        width: 30%;
        position: absolute;
        top: 50%;
        left: 0;
      }
      &::after {
        content: '';
        height: 1px;
        background-color: #fff;
        width: 30%;
        position: absolute;
        top: 50%;
        right: 0;
      }
    }
  }
}

.hero-content {
  max-width: 615px;
  color: #fff;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 10;
  text-shadow: 1px 1px 20px rgba(0, 0, 0, 0.4);
}

.hero-mask {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%);
  height: 300px;
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
}

.section-text {
  position: relative;
  z-index: 10;
  @include media-breakpoint-up(sm) {
    transform: translateX(160px);
  }
}

// .products-image {
//   transform: translateX(-70px);
// }

.callout {
  position: relative;
  display: block;
  max-width: 370px;
}

// .callout-image {
//   min-height: 250px;
// }

.callout-title {
  position: absolute;
  bottom: 0;
  left: 0;
  color: #fff;
  padding-left: $spacer-5;
  padding-bottom: $spacer-3;
  z-index: 10;
  font-size: $text-lg;
}

.callout-mask {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%);
  height: 100px;
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
}
</style>
