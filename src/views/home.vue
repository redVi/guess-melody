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
import VLogo from '@/components/base/v-logo.vue';
import VLoader from '@/components/base/v-loader.vue';

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
      const questions = await GameService.getQuestions()
        .then(data => data)
        .catch(() => {
          this.$router.push('/error');
        });

      this.$emit('questions', questions);
    },
    startGame() {
      this.$emit('start');
      this.$router.push({ name: this.question.type });
    },
  },
};
</script>
