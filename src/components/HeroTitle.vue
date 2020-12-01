<template>
  <div
    class="hero container-fluid"
    :style="{ backgroundColor: backgroundColor }"
    :class="shadows ? 'shadows' : 'no-shadows'"
  >
    <cld-image
      v-if="cloudinaryImageId"
      class="hero-image"
      ref="heroImage"
      :class="crop ? 'crop' : 'no-crop'"
      cloudName="mahana"
      :secure="true"
      :publicId="cloudinaryImg"
    >
      <cld-transformation v-if="crop" crop="fill" :width="width" :height="height" format="auto" gravity="center" />
      <cld-transformation v-else format="auto" />
    </cld-image>
    <div class="hero-content">
      <h1 v-if="pageTitle" class="text-3xl" data-aos="fade-up">{{ pageTitle }}</h1>
      <h2 v-if="intro" class="faded text-lg font-weight-normal" data-aos="fade-up" data-aos-delay="200">{{ intro }}</h2>
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
import Rellax from 'rellax';

export default {
  props: {
    pageTitle: String,
    cloudinaryImageId: String,
    intro: String,
    crop: {
      type: Boolean,
      default: true,
    },
    shadows: {
      type: Boolean,
      default: true,
    },
    width: {
      type: Number,
      default: 2000,
    },
    height: {
      type: Number,
      default: 600,
    },
    backgroundColor: String,
  },
  computed: {
    cloudinaryImg() {
      return 'Website/' + this.cloudinaryImageId;
    },
  },
  mounted() {
    var rellax = new Rellax('.hero-image');
  },
};
</script>

<style lang="scss">
.hero {
  position: relative;
  // background-size: cover;
  // background-position-y: center;
  height: 600px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

// .hero-image {
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   img {
//     object-fit: cover;
//     width: 100%;
//     height: 600px;
//   }
// }

.crop {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  img {
    object-fit: cover;
    width: 100%;
    height: 600px;
  }
}

.no-crop {
  position: absolute;
  top: 50%;
  left: 50%;
  img {
    transform: translate(-50%, -50%);
  }
}

.hero-content {
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  position: relative;
  z-index: 10;
  padding-bottom: $spacer-8;
  h1,
  h2 {
    color: #fff;
  }
  h2 {
    line-height: 1.3;
  }
}

.shadows {
  .mask {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%);
    height: 400px;
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
  }
}
</style>
