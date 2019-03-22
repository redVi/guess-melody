<template>
  <main class="app">
    <router-view
      :level="level"
      @level="level = level + 1"
      :questions="questions" />
  </main>
</template>

<script>
const questions = require('./store/questions.json');

export default {
  data: () => ({
    level: 0,
    questions: questions.questions,
  }),
};
</script>

<style lang="stylus" src="@/assets/styles/style.styl"></style>
