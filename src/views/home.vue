<template>
  <section class="main main--welcome">
    <v-logo />
    <button class="main-play" @click="nextScreen">
      {{ $t('play') }}
    </button>

    <h2 class="title main-title">
      {{ $t('rules') }}
    </h2>

    <p class="text main-text" v-html="$t('description')"></p>
  </section>
</template>

<script>
import VLogo from '@/components/base/v-logo.vue';

export default {
  name: 'home',
  components: {
    VLogo,
  },
  props: {
    level: {
      type: Number,
      default: 0,
    },
    game: {
      type: Object,
      default: () => ({}),
    },
    questions: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    nextScreen() {
      const question = this.questions[0];

      this.$router.push({
        name: question.type,
        params: { question, level: this.level },
      });
    },
  },
};
</script>
