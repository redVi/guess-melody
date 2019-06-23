<template>
  <main class="app">
    <v-timer :time="game.time" />
    <v-lives :lives="game.lives" />
    <router-view
      :game="game"
      @start="startGame"
      @stop="stopGame"
      @questions="getQuestions"
      @update="updateGame"
      @reset="resetGame"
    />
  </main>
</template>

<script>
import { SECOND, TIME_OF_GAME, INITIAL_STATE } from '@/constants';
import VLives from '@/components/v-lives/v-lives';
import VTimer from '@/components/v-timer/v-timer';

export default {
  components: {
    VLives,
    VTimer,
  },
  data: () => ({
    interval: 0,
    timer: 0,
    game: INITIAL_STATE(),
  }),
  methods: {
    getQuestions(questions) {
      this.game.questions = questions;
    },
    resetGame() {
      this.game = Object.assign({}, INITIAL_STATE());
    },
    updateGame(game) {
      const isGameConditionDone = game.questions.length <= 0 || game.lives <= 0;

      if (isGameConditionDone) {
        this.$router.push({
          name: 'result',
          query: {
            success: game.lives > 0,
            time: game.time,
            tracks: game.guessedTracks,
            total: game.totalPointsEarned,
          },
        });

        return;
      }

      this.$router.push({ name: game.questions[0].type });
    },
    startGame() {
      this.interval = window.setInterval(() => {
        this.game.time += 1;
      }, SECOND);

      this.timer = window.setTimeout(() => {
        this.$router.push({ name: 'result' });
      }, TIME_OF_GAME);
    },
    stopGame() {
      this.game.lives = 0;
      window.clearInterval(this.interval);
      window.clearInterval(this.timer);
    },
  },
};
</script>

<style lang="stylus" src="./assets/styles/style.styl"></style>
