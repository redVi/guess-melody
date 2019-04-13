<template>
  <section class="main main--level main--level-genre">
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
          <v-player
            v-if="track"
            slot="player"
            :it-should-be-play="index === 0"
            :multiply="true"
            :src="track.path"
          />
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
import gamePropsMixin from '@/mixins/gamePropsMixin';
import gameQuestionMixin from '@/mixins/gameQuestionMixin';
import nextLevelMixin from '@/mixins/nextLevelMixin';
import VPlayer from '@/components/v-player';
import AnswerGenre from '@/components/answer-genre';

export default {
  name: 'Genre',
  mixins: [
    gamePropsMixin,
    gameQuestionMixin,
    nextLevelMixin,
  ],
  components: {
    AnswerGenre,
    VPlayer,
  },
  methods: {
    checkAnswer() {
      const { question } = this;
      const answers = Array.from(this.$refs.answer).filter(item => item.checked);

      const tracksLength = question.tracks.filter(track => track.genre === question.genre).length;
      const answersLength = answers.length;
      const isCorrectValues = answers.every(item => item.value === question.genre);
      const isCorrectLength = tracksLength === answersLength;

      this.$emit('update', this.updateState(
        this.game,
        {
          isAnswerSuccess: isCorrectValues && isCorrectLength,
          time: this.getAnswerTime(),
          guessedTracks: answersLength,
        },
      ));
    },
  },
};
</script>
