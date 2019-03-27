<template>
  <section class="main main--welcome">
    <v-logo />

    <button
      class="main-play"
      v-html="$t('play')"
      @click="nextLevel"
    />

    <h2 class="title main-title">
      {{ $t('rules') }}
    </h2>

    <p class="text main-text" v-html="$t('description')" />
  </section>
</template>

<script>
import gamePropsMixin from '@/mixins/gamePropsMixin';
import gameQuestionMixin from '@/mixins/gameQuestionMixin';
import VLogo from '@/components/base/v-logo.vue';

export default {
  name: 'Home',
  mixins: [gamePropsMixin, gameQuestionMixin],
  components: {
    VLogo,
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
