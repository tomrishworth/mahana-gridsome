<template>
  <Layout>
    <hero-title
      class="mb-8"
      :crop="false"
      backgroundColor="#262625"
      :shadows="false"
      cloudinaryImageId="daysaver-logo_bl3icj.png"
    ></hero-title>
    <section class="mb-8">
      <div class="container-md ">
        <p>
          DAYSAVERmigraine™ is a new FMCG wellness brand developed in consultation with industry pioneering neurology
          specialists by Mahana Biopharma.
        </p>

        <p>
          Our proprietary terpene and CBD based formulations have been developed with care in New Zealand and are
          strictly focused on migraine relief for headache sufferers everywhere.
        </p>
        <g-image src="~/assets/images/daysaver.png" alt="Daysaver products" />
      </div>
    </section>
  </Layout>
</template>

<script>
import HeroTitle from '~/components/HeroTitle';

export default {
  metaInfo: {
    title: 'Daysaver',
    meta: [
      {
        key: 'og:title',
        property: 'og:title',
        content: 'Daysaver',
      },
      {
        key: 'og:url',
        property: 'og:url',
        content: 'https://mahanabiopharma.co.nz/daysaver',
      },
      {
        key: 'og:description',
        property: 'og:description',
        content:
          'DAYSAVERmigraine™ is a new FMCG wellness brand developed in consultation with industry pioneering neurology specialists by Mahana Biopharma.',
      },
      {
        key: 'og:image',
        property: 'og:image',
        content: 'https://res.cloudinary.com/mahana/image/upload/v1/Website/daysaver-logo_bl3icj.png',
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'Daysaver',
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content:
          'DAYSAVERmigraine™ is a new FMCG wellness brand developed in consultation with industry pioneering neurology specialists by Mahana Biopharma.',
      },
    ],
  },
  components: {
    HeroTitle,
  },
};
</script>

<style lang="scss" scoped>
// .static {
//   background-color: red;
// }
</style>
