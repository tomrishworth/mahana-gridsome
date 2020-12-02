<template>
  <Layout>
    <hero-title
      class="mb-8"
      pageTitle="Cannabis &amp; Migraine"
      cloudinaryImageId="matthew-brodeur-qcCPIhhdgTw-unsplash_suoz9a.jpg"
      intro="Mahana is creating premium terpene and cannabinoid-based therapeutic products able to treat and support the health of patients suffering debilitating migraine headache.
"
    ></hero-title>
    <section class="container-lg mb-10">
      <div class="row">
        <div class="col-sm-4 mb-6 mb-sm-0">
          <!-- <b-list-group class="menu" v-b-scrollspy:faq-list> -->
          <b-list-group class="menu mr-sm-6">
            <b-list-group-item v-for="faq in sortedFaqs" :key="faq.id" :href="`#${slug(faq.node.question)}`">
              {{ faq.node.question }}
            </b-list-group-item>
          </b-list-group>
        </div>

        <div id="faq-list" class="col-sm-8">
          <div
            class="mb-4 pb-4 mb-sm-7 pb-sm-7 border-bottom border-primary border-width-3"
            :id="slug(faq.node.question)"
            v-for="faq in sortedFaqs"
            :key="faq.id"
          >
            <h3 class="text-2xl">{{ faq.node.question }}</h3>
            <vue-simple-markdown :source="faq.node.answer"></vue-simple-markdown>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import slugify from 'slugify';
import HeroTitle from '~/components/HeroTitle';

export default {
  metaInfo: {
    title: 'Cannabis &amp; Migraine',
    meta: [
      {
        key: 'og:title',
        property: 'og:title',
        content: 'Cannabis &amp; Migraine',
      },
      {
        key: 'og:url',
        property: 'og:url',
        content: 'https://mahanabiopharma.co.nz/cannabis-and-migraine',
      },
      {
        key: 'og:description',
        property: 'og:description',
        content:
          'Mahana is creating premium terpene and cannabinoid-based therapeutic products able to treat and support the health of patients suffering debilitating migraine headache.',
      },
      {
        key: 'og:image',
        property: 'og:image',
        content: 'https://www.datocms-assets.com/35711/1602826007-image-2.png',
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'Cannabis &amp; Migraine',
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content:
          'Mahana is creating premium terpene and cannabinoid-based therapeutic products able to treat and support the health of patients suffering debilitating migraine headache.',
      },
    ],
  },
  components: {
    HeroTitle,
  },
  methods: {
    slug(string) {
      return slugify(string, { remove: /[*+~.()'"!?:@]/g }).toLowerCase();
    },
  },
  computed: {
    sortedFaqs() {
      let faqs = this.$page.faqs.edges;
      return faqs.sort((a, b) => a.node.position - b.node.position);
    },
  },
};
</script>

<page-query>
query  {
  faqs:allDatoCmsFaq {
    edges {
      node {
        position 
        question
        answer
      }
    }
  }
}

</page-query>

<style lang="scss" scoped>
.menu {
  position: sticky;
  top: 20px;
}

.list-group-item {
  font-size: $text-base;
  font-weight: 700;
  border: none;
  padding: 10px;
  margin-bottom: $spacer-2;
  @include media-breakpoint-down(xs) {
    padding-left: 0;
  }
  &.active {
    background: none;
    color: $blue;
  }
}
</style>
