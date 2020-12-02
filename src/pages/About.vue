<template>
  <Layout>
    <hero-title
      class="mb-8"
      pageTitle="About us"
      cloudinaryImageId="petr-vysohlid-9fqwGqGLUxc-unsplash_ow747i.jpg"
      intro="Mahana exists to improve the quality of life for millions of migraine headache sufferers worldwide. To find a cure for migraine, we are proud to have assembled a team of global industry leaders.
"
    ></hero-title>
    <section class="container-md mb-10">
      <p class="page-intro">
        Mahana has built a best in class business management and clinical research team with members experienced in
        advanced migraine and neurological study, as well as technical terpene and cannabinoid cultivation, extraction,
        fractionation and purification.
      </p>
      <p>
        Our founders have a broad range of business experience covering multiple industry sectors, from concept up
        start-ups to NZX50 listed companies.
      </p>

      <p>
        Our operational team includes GMP production processes and endocannabinoid system experts, with our research
        team supported by experts in migraine headache pain and neurology.
      </p>
    </section>
    <section id="our-partners" class="container-lg mb-10">
      <h2 class="text-center text-2xl text-primary mb-8">Our Partners</h2>
      <div class="row">
        <partner
          class="col-sm-4 mb-6"
          v-for="partner in sortedPartners"
          :key="partner.id"
          :partner="partner.node"
        ></partner>
      </div>
    </section>
  </Layout>
</template>

<script>
import HeroTitle from '~/components/HeroTitle';
import Partner from '~/components/Partner';

export default {
  name: 'about',
  metaInfo: {
    title: 'About us',
    meta: [
      {
        key: 'og:title',
        property: 'og:title',
        content: 'About us',
      },
      {
        key: 'og:url',
        property: 'og:url',
        content: 'https://mahanabiopharma.co.nz/about',
      },
      {
        key: 'og:description',
        property: 'og:description',
        content:
          'Mahana exists to improve the quality of life for millions of migraine headache sufferers worldwide. To find a cure for migraine, we are proud to have assembled a team of global industry leaders.',
      },
      {
        key: 'og:image',
        property: 'og:image',
        content:
          'https://res.cloudinary.com/mahana/image/upload/c_fill,g_center,h_600,w_600/v1/Website/petr-vysohlid-9fqwGqGLUxc-unsplash_ow747i.jpg',
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'About us',
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content:
          'Mahana exists to improve the quality of life for millions of migraine headache sufferers worldwide. To find a cure for migraine, we are proud to have assembled a team of global industry leaders.',
      },
    ],
  },
  components: {
    HeroTitle,
    Partner,
  },
  computed: {
    sortedPartners() {
      let teamMembers = this.$page.partners.edges;
      return teamMembers.sort((a, b) => a.node.position - b.node.position);
    },
  },
};
</script>

<page-query>
query {
  partners: allDatoCmsPartner {
    edges {
      node {
        position
        logo {
          url
        }
        description
      }
    }
  }
}
</page-query>
