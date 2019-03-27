const gameQuestionMixin = {
  computed: {
    question() {
      return this.game.questions[0];
    },
  },
};

export default gameQuestionMixin;
