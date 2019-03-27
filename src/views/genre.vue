<template>
  <section class="main main--level main--level-genre">
    <v-timer />
    <v-lives />

    <div class="main-wrap">
      <h2 class="title">
        {{ $t('genre.title', { n: question.genre }) }}
      </h2>

      <form class="genre" @submit.prevent="checkAnswer">
        <answer-genre
          v-for="(track, index) in question.tracks"
          :key="index"
          :id="index"
          :value="track.genre"
          ref="answer"
        >
          <v-player slot="player" :src="question.path" />
        </answer-genre>

        <button
          class="genre-answer-send"
          type="submit"
        >
          {{ $t('answer') }}
        </button>
      </form>
    </div>
  </section>
</template>

<script>
// mixins
import gamePropsMixin from '@/mixins/gamePropsMixin';
import gameQuestionMixin from '@/mixins/gameQuestionMixin';
import nextLevelMixin from '@/mixins/nextLevelMixin';

// components
import AnswerGenre from '@/components/answers/answer-genre.vue';
import VLives from '@/components/base/v-lives.vue';
import VTimer from '@/components/base/v-timer.vue';
import VPlayer from '@/components/base/v-player.vue';

export default {
  name: 'Genre',
  mixins: [
    gamePropsMixin,
    gameQuestionMixin,
    nextLevelMixin,
  ],
  components: {
    AnswerGenre,
    VLives,
    VTimer,
    VPlayer,
  },
  methods: {
    checkAnswer() {
      const answers = Array.from(this.$refs.answer).filter(item => item.checked);
      const rightAnswer = answers.every(item => item.value === this.question.genre);

      this.updateGameState({ answer: rightAnswer });
      this.nextLevel();
    },
  },
};
</script>
