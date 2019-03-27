<template>
  <main class="app">
    <router-view :game="game" />
  </main>
</template>

<script>
export default {
  computed: {
    game() {
      return this.$store.getters['game/GET_GAME'];
    },
  },
};
</script>

<style lang="stylus" src="@/assets/styles/style.styl"></style>
