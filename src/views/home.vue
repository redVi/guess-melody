<template>
  <section class="main main--welcome">
    <v-logo />

    <button
      v-if="game && Object.keys(game.questions).length"
      class="main-play"
      v-html="$t('play')"
      @click="nextLevel"
    />

    <v-loader v-else />

    <h2 class="title main-title">
      {{ $t('rules') }}
    </h2>

    <p class="text main-text" v-html="$t('description')" />
  </section>
</template>

<script>
// mixins
import gamePropsMixin from '@/mixins/gamePropsMixin';
import gameQuestionMixin from '@/mixins/gameQuestionMixin';

// components
import VLogo from '@/components/base/v-logo.vue';
import VLoader from '@/components/base/v-loader.vue';

export default {
  name: 'Home',
  mixins: [gamePropsMixin, gameQuestionMixin],
  components: {
    VLogo,
    VLoader,
  },
  created() {
    this.$store.dispatch('game/FILL_QUESTIONS');
  },
  methods: {
    nextLevel() {
      this.$router.push({ name: this.question.type });
    },
  },
};
</script>
