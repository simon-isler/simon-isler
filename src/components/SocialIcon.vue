<template>
  <a :href="url" class="text-brown font-semibold text-lg">
    <font-awesome-icon :icon="icon" class="fa-1x"></font-awesome-icon>
  </a>
</template>

<script>
export default {
  name: 'SocialIcon',
  props: {
    icon: String,
    url: String,
  },
};
</script>

<style scoped>

</style>