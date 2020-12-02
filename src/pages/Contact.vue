<template>
  <Layout>
    <hero-title class="mb-8" pageTitle="Contact Us" cloudinaryImageId="piha_lomlcn" imagePositionX="80"></hero-title>

    <div class="container-lg mb-10">
      <div class="row">
        <div class="col-sm-6">
          <h2 class="text-2xl mt-sm-8 mb-6">Media &amp; Investor Enquires</h2>
          <ul class="list-unstyled">
            <li class="mb-6">
              <h3 class="text-md mb-1">Ed McCullagh</h3>
              <h4 class="text-md text-muted">CEO, Founder</h4>
              <p><a href="mailto:ed@mahanabiopharma.co.nz">ed@mahanabiopharma.co.nz</a></p>
            </li>
            <li>
              <h3 class="text-md mb-1">Martin Wylie</h3>
              <h4 class="text-md text-muted">COO, Co-Founder</h4>
              <p><a href="mailto:martin@mahanabiopharma.co.nz">martin@mahanabiopharma.co.nz</a></p>
            </li>
          </ul>
        </div>
        <div class="col-sm-6">
          <g-image class="products-image" src="~/assets/images/glasshouse.png" alt="" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import HeroTitle from '~/components/HeroTitle';

export default {
  metaInfo: {
    title: 'Contact Us',
    meta: [
      {
        key: 'og:title',
        property: 'og:title',
        content: 'Contact Us',
      },
      {
        key: 'og:url',
        property: 'og:url',
        content: 'https://mahanabiopharma.co.nz/about',
      },

      {
        key: 'og:image',
        property: 'og:image',
        content: 'https://res.cloudinary.com/mahana/image/upload/c_fill,g_center,h_600,w_600/v1/Website/piha_lomlcn',
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'Contact Us',
      },
    ],
  },
  components: {
    HeroTitle,
  },
};
</script>
