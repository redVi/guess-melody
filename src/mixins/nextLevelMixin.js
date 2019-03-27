const nextLevelMixin = {
  methods: {
    updateGameState(args) {
      this.$store.commit('game/REMOVE_QUESTION');
      this.$store.commit('game/UPDATE_GAME', args);
    },
    nextLevel() {
      const { game, $router } = this;

      if (game.questions.length <= 0 || game.lives <= 0) {
        $router.push({ name: 'result', params: { success: game.lives > 0 } });
        return;
      }

      $router.push({ name: game.questions[0].type });
    },
  },
};

export default nextLevelMixin;
