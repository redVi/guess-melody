<template>
  <section class="main main--welcome">
    <v-logo />

    <button
      v-if="game && Object.keys(game.questions).length"
      class="main-play"
      v-html="$t('play')"
      @click="startGame"
    />

    <v-loader v-else />

    <h2 class="title main-title">
      {{ $t('rules') }}
    </h2>

    <p class="text main-text" v-html="$t('description')" />
  </section>
</template>

<script>
// services
import GameService from '@/services/game-service';

// mixins
import gamePropsMixin from '@/mixins/gamePropsMixin';
import gameQuestionMixin from '@/mixins/gameQuestionMixin';

// components
import VLogo from '@/components/v-logo';
import VLoader from '@/components/v-loader';

export default {
  name: 'Home',
  mixins: [gamePropsMixin, gameQuestionMixin],
  components: {
    VLogo,
    VLoader,
  },
  created() {
    this.fillQuestions();
  },
  methods: {
    async fillQuestions() {
      this.$emit('questions', await GameService.getQuestions());
    },
    startGame() {
      this.$emit('start');
      this.$router.push({ name: this.question.type });
    },
  },
};
</script>
