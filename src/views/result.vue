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
      @click="playAgain"
    >
      {{ $t('play_again') }}
    </span>
  </section>
</template>

<script>
import gamePropsMixin from '@/mixins/gamePropsMixin';
import VLogo from '@/components/base/v-logo.vue';

export default {
  name: 'Result',
  mixins: [gamePropsMixin],
  components: {
    VLogo,
  },
  computed: {
    success() {
      return Object.keys(this.$route.params).length && this.$route.params.success;
    },
    title() {
      return this.success ? this.$t('success.title') : this.$t('fail.title');
    },
    stat() {
      return this.success
        ? this.$t('success.stat', { time: 5, tracks: this.game.guessedTracks })
        : this.$t('fail.stat');
    },
  },
  methods: {
    playAgain() {
      this.$store.commit('game/RESET_STATE');
      this.$router.push({ name: 'home' });
    },
  },
};
</script>
