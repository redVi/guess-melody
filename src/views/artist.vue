<template>
  <section class="main main--level main--level-artist">
    <v-timer />
    <v-lives />
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
import AnswerArtist from '@/components/answers/answer-artist.vue';
import VLives from '@/components/base/v-lives.vue';
import VTimer from '@/components/base/v-timer.vue';
import VPlayer from '@/components/base/v-player.vue';

export default {
  name: 'artist',
  components: {
    AnswerArtist,
    VLives,
    VTimer,
    VPlayer,
  },
  props: {
    level: {
      type: Number,
      default: 0,
    },
    questions: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    answer: '',
  }),
  computed: {
    question() {
      return this.$route.params.question;
    },
  },
  methods: {
    checkAnswer() {
      if (this.answer !== this.question.song.title) {
        console.log('wrong');
      }

      this.nextLevel();
    },
    nextLevel() {
      this.$emit('level', this.level + 1);
      const { level } = this;
      const screen = this.questions[level];

      this.$router.push({
        name: screen.type,
        params: { question: screen, level },
      });
    },
  },
};
</script>
