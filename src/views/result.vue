<template>
  <section class="main main--result">
    <v-logo />
    <h2 class="title">title</h2>
    <div class="main-stat">result</div>
    <!--    ${ data === `win` ? compare() : `` }-->
    <span
        role="button"
        tabindex="0"
        class="main-replay"
        @click="nextScreen"
    >reply</span>
  </section>
</template>

<script>
import VLogo from '@/components/base/v-logo.vue';

export default {
  name: 'result',
  components: {
    VLogo,
  },
  methods: {
    nextScreen() {
      this.$router.push({ name: 'home' });
    },
  },
};
</script>
