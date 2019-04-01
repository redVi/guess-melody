const nextLevelMixin = {
  data: () => ({
    time: 0,
  }),
  created() {
    this.initTimer();
  },
  updated() {
    this.initTimer();
  },
  methods: {
    initTimer() {
      this.time = new Date().getTime();
    },
    getAnswerTime() {
      return (new Date().getTime() - this.time) / 1000;
    },
    updateState(state, answer) {
      const { isAnswerSuccess, guessedTracks, time } = answer;

      if (isAnswerSuccess) {
        state.totalPointsEarned += time <= 5 ? 2 : 1;
        state.guessedTracks += guessedTracks || 1;
      } else {
        state.lives -= 1;
      }

      state.questions.splice(0, 1);

      return state;
    },
  },
};

export default nextLevelMixin;
