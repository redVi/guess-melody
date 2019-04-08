<template>
  <section class="main">
    <h2 class="title main-title">
      {{ $t('error') }}
    </h2>

    <button
      tabindex="0"
      class="main-replay"
      @click="playAgain"
    >
      {{ $t('back_home') }}
    </button>
  </section>
</template>

<script>
export default {
  name: 'Error',
  methods: {
    playAgain() {
      this.$emit('reset');
      this.$router.push({ name: 'home' });
    },
  },
};
</script>
