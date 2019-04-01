const gameQuestionMixin = {
  computed: {
    question() {
      const hasQuestion = this.game && this.game.questions.length;

      return hasQuestion ? this.game.questions[0] : [];
    },
  },
};

export default gameQuestionMixin;
