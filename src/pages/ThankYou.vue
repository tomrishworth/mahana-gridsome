<template>
  <div class="thanks bg-dark">
    <div class="text-center thanks-inner d-flex justify-content-center flex-column">
      <img
        class="my-6 mx-auto"
        src="https://res.cloudinary.com/mahana/image/upload/f_auto/v1606100361/Website/logo_jbhlbs.png"
        alt="Mahana Logo"
        width="150"
      />
      <h1 class="text-lg text-white">Thanks for your interest in Mahana BioPharma</h1>
      <p class="text-white text-md faded mb-6">We'll be in touch shortly</p>
      <div>
        <g-link class="btn btn-outline-primary" to="/">Go back to the homepage</g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'thankYou',
  metaInfo: {
    title: 'Thank You',
  },
};
</script>

<style lang="scss" scoped>
.thanks {
  height: 100vh;
}

.thanks-inner {
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}
</style>
