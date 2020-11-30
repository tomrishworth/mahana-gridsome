<template>
  <div>
    <div class="logo mb-3">
      <img :src="partner.logo.url" :alt="partner.name" />
    </div>
    <p class="text-sm pl-sm-4">{{ partner.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'partner',
  props: ['partner'],
};
</script>

<style lang="scss" scoped>
.logo {
  text-align: center;
  img {
    object-fit: contain;
    width: 130px;
    height: 130px;
  }
}
</style>
