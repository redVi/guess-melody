<template>
  <section class="main main--result">
    <v-logo />
    <h2 class="title">{{ title }}</h2>
    <div class="main-stat" v-html="stat"></div>

    <span class="main-comparison" v-if="success">
      {{ $t('compare', { value: 21 }) }}
    </span>

    <span
      role="button"
      tabindex="0"
      class="main-replay"
      @click="nextScreen"
    >
      {{ $t('play_again') }}
    </span>
  </section>
</template>

<script>
import VLogo from '@/components/base/v-logo.vue';

export default {
  name: 'result',
  components: {
    VLogo,
  },
  data: () => ({
    success: true,
  }),
  computed: {
    title() {
      return this.success ? this.$t('success.title') : this.$t('fail.title');
    },
    stat() {
      return this.success
        ? this.$t('success.stat', { time: 5, tracks: 8 })
        : this.$t('fail.stat');
    },
  },
  methods: {
    nextScreen() {
      this.$router.push({ name: 'home' });
    },
  },
};
</script>
