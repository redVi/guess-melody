<template>
  <section class="main main--result">
    <v-logo />
    <h2 class="title">{{ title }}</h2>
    <div class="main-stat" v-html="stat"></div>

    <span class="main-comparison" v-if="success">
      {{ $t('compare', { value: 5, all: 15  }) }}
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
  created() {
    this.$emit('stop');

    if (!Object.keys(this.$route.query).length) {
      return;
    }

    this.$route.params.success = true;
  },
  computed: {
    success() {
      const { params } = this.$route;

      return Object.keys(params).length && params.success;
    },
    title() {
      return this.success ? this.$t('success.title') : this.$t('fail.title');
    },
    stat() {
      const { time, guessedTracks } = this.game;
      const resultTime = Math.floor(time);

      return this.success
        ? this.$t('success.stat', { time: resultTime, tracks: guessedTracks })
        : this.$t('fail.stat');
    },
  },
  methods: {
    playAgain() {
      this.$emit('reset');
      // this.$store.commit('game/RESET_STATE');
      this.$router.push({ name: 'home' });
    },
  },
};
</script>
