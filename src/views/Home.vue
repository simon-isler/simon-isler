<template>
  <div class="home">
    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      title: "Hi, I'm Simon"
    }
  }
}
</script>

<style scoped>
  .home {
    display: grid;
    place-items: center;
  }

  .title {
    font-size: 5.5rem;
    font-weight: 500;
  }
</style>
