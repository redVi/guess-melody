<template>
  <section class="main main--level main--level-genre">
    <v-timer />
    <v-lives :lives="game.lives" />

    <div class="main-wrap">
      <h2 class="title">
        {{ $t('genre.title', { n: question.genre }) }}
      </h2>

      <form class="genre" @submit.prevent="checkAnswer">
        <answer-genre
          v-for="(track, index) in question.tracks"
          :key="`${track.genre}-${index}`"
          :id="`${track.genre}-${index}`"
          :value="track.genre"
          ref="answer"
        >
          <v-player slot="player" :src="track.path" />
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
      const { question } = this;
      const resultTime = this.startTime - new Date().getTime();
      const answers = Array.from(this.$refs.answer).filter(item => item.checked);

      // the rules to check the correctness of all answers
      const tracksLength = question.tracks.filter(track => track.genre === question.genre).length;
      const answersLength = answers.length;
      const isCorrectValues = answers.every(item => item.value === question.genre);
      const isCorrectLength = tracksLength === answersLength;

      this.updateGameState({
        answer: isCorrectValues && isCorrectLength,
        time: resultTime,
        guessedTracks: answersLength,
      });

      this.nextLevel();
    },
  },
};
</script>
