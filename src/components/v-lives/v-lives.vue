<template>
  <div class="main-lives" v-if="lives > 0">
    <img
      v-for="index in lives"
      :key="index"
      src="img/icon-heart.svg"
      width="24"
      height="24"
    >
  </div>
</template>

<script>
export default {
  name: 'VLives',
  props: {
    lives: { type: Number, default: 0 },
  },
};
</script>

<style lang="stylus" scoped src="./v-lives.styl"></style>
