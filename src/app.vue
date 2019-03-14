<template>
  <main class="app">
    <router-view
      :game="game"
      :level="level"
      @level="level = level + 1"
      :questions="questions" />
  </main>
</template>

<script>
const questions = require('./store/questions.json');

const game = Object.freeze({
  lives: 3,
  totalPointsEarned: 0,
  guessedTracks: 0,
  questionsLeft: 10,
});

export default {
  data: () => ({
    level: 0,
    game,
    questions: questions.questions,
  }),
};
</script>

<style lang="stylus" src="@/assets/styles/style.styl"></style>
