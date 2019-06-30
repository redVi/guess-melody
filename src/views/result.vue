<template>
  <section v-if="results.length" class="main main--result">
    <h2 class="title">
      {{ title }}
    </h2>

    <div class="main-stat">
      {{ stat }}
    </div>

    <span v-if="success" class="main-comparison">
      {{ $t('compare', { value: gamerIndex, all: playersCount }) }}
    </span>

    <button
      tabindex="0"
      class="main-replay"
      @click="playAgain"
    >
      {{ $t('play_again') }}
    </button>
  </section>

  <v-loader v-else />
</template>

<script>
import gameService from '@/services/game-service';
import VLoader from '@/components/v-loader/v-loader';

export default {
  name: 'Result',
  components: {
    VLoader,
  },
  data: () => ({
    results: [],
  }),
  created() {
    this.$emit('stop');
    this.getStat();
  },
  computed: {
    success() {
      const { query } = this.$route;
      return Object.keys(query).length && query.success;
    },
    title() {
      return this.success ? this.$t('success.title') : this.$t('fail.title');
    },
    stat() {
      const { time, tracks } = this.$route.query;
      return this.success
        ? this.$t('success.stat', { time, tracks })
        : this.$t('fail.stat');
    },
    // return gamers length + our gamer
    playersCount() {
      return this.results.length + 1;
    },
    gamerIndex() {
      const { time, tracks } = this.$route.query;
      return this.getGamerIndex(this.results, { time, answers: tracks });
    },
  },
  methods: {
    sortResults(all, current) {
      const total = all.concat([current]);

      return total.sort((prev, next) => {
        if (next.answers === prev.answers) return prev.time - next.time;
        return next.answers - prev.answers;
      });
    },
    getGamerIndex(all, current) {
      const total = this.sortResults(all, current);
      const indexOfAnswer = total.findIndex(
        elem => elem.time === current.time && elem.answers === current.answers,
      );

      return indexOfAnswer + 1;
    },
    async getStat() {
      this.results = await gameService.getStat();
    },
    playAgain() {
      this.$emit('reset');
      this.$router.push({ name: 'home' });
    },
  },
};
</script>
