<template>
  <section class="main main--level main--level-genre">
    <v-timer />
    <v-lives />
    <div class="main-wrap">
      <h2 class="title">
        Выберите {{ question.genre }} треки
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
        >Ответить</button>
      </form>
    </div>
  </section>
</template>

<script>
import AnswerGenre from '@/components/answers/answer-genre.vue';
import VLives from '@/components/base/v-lives.vue';
import VTimer from '@/components/base/v-timer.vue';
import VPlayer from '@/components/base/v-player.vue';

export default {
  name: 'genre',
  components: {
    AnswerGenre,
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
  computed: {
    question() {
      return this.$route.params.question;
    },
  },
  methods: {
    checkAnswer() {
      const answers = Array.from(this.$refs.answer).filter(item => item.checked);
      const rightAnswers = answers.every(item => item.value === this.question.genre);
      console.log(rightAnswers);
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
