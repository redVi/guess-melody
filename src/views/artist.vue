<template>
  <section class="main main--level main--level-artist">
    <v-timer />
    <v-lives :lives="game.lives" />

    <div class="main-wrap">
      <h2 class="title main-title">
        {{ $t('artist.title') }}
      </h2>

      <v-player :src="question.song.path" />

      <form class="main-list" action="">
        <answer-artist
          v-for="(artist, index) in question.artists"
          :key="index"
          :id="index"
          :value="artist.value"
          :preview="artist.preview"
          :title="artist.title"
          @click.prevent="answer = artist.title"
          @screen="checkAnswer(artist.title)"
        />
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
import AnswerArtist from '@/components/answers/answer-artist.vue';
import VLives from '@/components/base/v-lives.vue';
import VTimer from '@/components/base/v-timer.vue';
import VPlayer from '@/components/base/v-player.vue';

export default {
  name: 'Artist',
  mixins: [
    gamePropsMixin,
    gameQuestionMixin,
    nextLevelMixin,
  ],
  components: {
    AnswerArtist,
    VLives,
    VTimer,
    VPlayer,
  },
  data: () => ({
    answer: '',
  }),
  methods: {
    checkAnswer() {
      const answer = this.answer === this.question.song.title;

      this.updateGameState({ answer });
      this.nextLevel();
    },
  },
};
</script>
