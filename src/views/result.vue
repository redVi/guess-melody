<template>
  <v-loader v-if="loading" />

  <section class="main main--result" v-else>
    <v-logo class="result__logo" />

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
// services
import GameService from '@/services/game-service';

// mixins
import gamePropsMixin from '@/mixins/gamePropsMixin';

// components
import VLogo from '@/components/core/v-logo.vue';
import VLoader from '@/components/core/v-loader.vue';

export default {
  name: 'Result',
  mixins: [gamePropsMixin],
  components: {
    VLogo,
    VLoader,
  },
  data: () => ({
    loading: true,
    results: [],
  }),
  created() {
    this.$emit('stop');
    this.getStat();
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
    async getStat() {
      this.results = await GameService.getStat().finally(() => {
        this.loading = false;
      });
    },
    playAgain() {
      this.$emit('reset');
      this.$router.push({ name: 'home' });
    },
  },
};
</script>
