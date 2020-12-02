<template>
  <div>
    <header class="header w-100">
      <b-navbar type="dark" toggleable="lg" class="d-flex">
        <b-navbar-brand href="/">
          <img
            class="d-none d-sm-block"
            src="https://res.cloudinary.com/mahana/image/upload/f_auto/v1606100361/Website/logo_jbhlbs.png"
            alt="Mahana Logo"
            width="130"
          />
          <g-image class="p-3 d-sm-none" src="~/assets/images/logo-sm.svg" alt="Mahana Logo" width="200" />
        </b-navbar-brand>
        <b-navbar-toggle class="ml-auto" target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="pt-4 pr-4 ml-auto">
            <b-nav-item class="tm" router-component-name="g-link" to="/daysaver">Daysaver</b-nav-item>
            <b-nav-item router-component-name="g-link" to="/our-products">Our Products</b-nav-item>
            <b-nav-item router-component-name="g-link" to="/cannabis-and-migraines">Cannabis & Migraine</b-nav-item>
            <b-nav-item router-component-name="g-link" to="/our-plans">Our Plans</b-nav-item>
            <b-nav-item router-component-name="g-link" to="/about">About</b-nav-item>
            <b-nav-item router-component-name="g-link" to="/contact">Contact</b-nav-item>
            <!-- <b-button variant="outline-primary" v-b-modal.invest-modal>Invest</b-button> -->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
    <transition name="page" appear>
      <main>
        <slot />
      </main>
    </transition>

    <footer>
      <div class="bg-primary">
        <div class="container py-6">
          <!-- Begin Mailchimp Signup Form -->
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
              <h3 class="text-md text-white d-lg-none mb-4">Register your interest</h3>
              <div id="mc_embed_signup_scroll" class="d-sm-flex justify-content-center align-items-center">
                <h3 class="text-md text-white flex-shrink-0 mr-4 pull-down-3 d-none d-lg-block">
                  Register your interest
                </h3>

                <div class="mc-field-group mx-sm-1 mb-4 mb-sm-0">
                  <!-- <label for="mce-EMAIL">Email Address <span class="asterisk">*</span> </label> -->
                  <input
                    placeholder="Email"
                    type="email"
                    value=""
                    name="EMAIL"
                    class="form-control required email"
                    id="mce-EMAIL"
                  />
                </div>
                <div class="mc-field-group mx-sm-1 mb-4 mb-sm-0">
                  <!-- <label for="mce-FNAME">First Name </label> -->
                  <input
                    placeholder="First name"
                    type="text"
                    value=""
                    name="FNAME"
                    class="form-control"
                    id="mce-FNAME"
                  />
                </div>
                <div class="mc-field-group mx-sm-1 mb-4 mb-sm-0">
                  <!-- <label for="mce-LNAME">Last Name </label> -->
                  <input
                    placeholder="Last name"
                    type="text"
                    value=""
                    name="LNAME"
                    class="form-control"
                    id="mce-LNAME"
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
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    class="btn btn-secondary"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="bg-dark text-center py-4">
        <div class="mt-3">
          <img
            src="https://res.cloudinary.com/mahana/image/upload/f_auto/v1606100361/Website/logo_jbhlbs.png"
            alt="Mahana Logo"
            width="120"
          />
        </div>
        <b-nav class="justify-content-center py-6">
          <b-nav-item class="tm" router-component-name="g-link" to="/daysaver">Daysaver</b-nav-item>
          <b-nav-item router-component-name="g-link" to="/our-products">Our Products</b-nav-item>
          <b-nav-item router-component-name="g-link" to="/cannabis-and-migraines">Cannabis & Migraine</b-nav-item>
          <b-nav-item router-component-name="g-link" to="/our-plans">Our Plans</b-nav-item>
          <b-nav-item router-component-name="g-link" to="/about">About</b-nav-item>
          <b-nav-item router-component-name="g-link" to="/contact">Contact</b-nav-item>
        </b-nav>
        <!-- <ul class="social-links list-unstyled d-flex justify-content-center mb-0 pb-4">
          <li>
            <a class="p-2 display-block" href=""><g-image src="~/assets/images/facebook-icon.svg"></g-image></a>
          </li>
          <li>
            <a class="p-2 display-block" href=""><g-image src="~/assets/images/instagram-icon.svg"></g-image></a>
          </li>
        </ul> -->
        <div class="py-4">
          <p class="text-white text-xs faded">&copy; Mahana Bio 2020</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import AOS from 'aos';

export default {
  mounted() {
    AOS.init({
      duration: 1000,
    });
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss" scoped>
.header {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  &::before {
    content: '';
    background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    width: 100%;
    height: 200px;
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
  }
}

.sign-up-form {
  h3 {
    @include media-breakpoint-down(xs) {
      text-align: center;
      margin-bottom: $spacer-4;
    }
  }
  .sign-up-button {
    @include media-breakpoint-down(xs) {
      text-align: right;
    }
  }
}

.sign-up-field {
  margin-bottom: $spacer-3;
  @include media-breakpoint-up(sm) {
    width: 200px;
    margin-bottom: 0;
  }
}

.navbar {
  position: relative;
  z-index: 7;
}

.navbar-collapse.show {
  .navbar-nav {
    padding: $spacer-4;
    background-color: rgba(0, 0, 0, 0.8);
  }
}

.navbar-brand {
  @include media-breakpoint-up(sm) {
    position: absolute;
    top: 0;
    left: $spacer-8;
    // &::before {
    //   content: '';
    //   width: 400px;
    //   height: 400px;
    //   position: absolute;
    //   top: -50px;
    //   left: -100px;
    //   border-radius: 50%;
    //   background: radial-gradient(circle, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 60%);
    //   z-index: 1;
    // }
    img {
      position: relative;
      z-index: 2;
    }
  }
}

.nav-link {
  font-size: $text-sm;
  font-weight: 700;
  // &.router-link-active {
  //   color: $primary;
  // }
}

footer {
  .nav-link {
    color: #fff;
  }
}

.page-enter-active {
  transition: opacity 500ms;
}

.page-enter {
  opacity: 0;
}
</style>
