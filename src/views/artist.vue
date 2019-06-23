<template>
  <section class="main main--level main--level-artist">
    <div class="main-wrap">
      <h2 class="title main-title">
        {{ $t('artist.title') }}
      </h2>

      <v-player
        v-if="question.song"
        :it-should-be-play="true"
        :src="question.song.path"
        :key="playerKey"
      />

      <div class="main-list">
        <answer-artist
          v-for="(artist, index) in question.artists"
          :key="`${artist.value}-${index}`"
          :id="`${artist.value}-${index}`"
          :value="artist.value"
          :preview="artist.preview"
          :title="artist.title"
          :tabindex="index"
          @check="checkAnswer(artist.title)"
        />
      </div>
    </div>
  </section>
</template>

<script>
import gamePropsMixin from '@/mixins/gamePropsMixin';
import gameQuestionMixin from '@/mixins/gameQuestionMixin';
import nextLevelMixin from '@/mixins/nextLevelMixin';
import VPlayer from '@/components/v-player/v-player';
import AnswerArtist from '@/components/answer-artist/answer-artist.vue';

export default {
  name: 'Artist',
  mixins: [
    gamePropsMixin,
    gameQuestionMixin,
    nextLevelMixin,
  ],
  data: () => ({
    // forcibly rerender the player component
    // when the artist components go one after the other
    playerKey: 100,
  }),
  components: {
    AnswerArtist,
    VPlayer,
  },
  methods: {
    checkAnswer(value) {
      const isAnswerSuccess = value === this.question.song.title;

      this.playerKey += 1;
      this.$emit('update', this.updateState(
        this.game,
        {
          isAnswerSuccess,
          time: this.getAnswerTime(),
        },
      ));
    },
  },
};
</script>
