<template>
  <div
    v-if="id && value"
    class="main-answer-wrapper"
    @click.prevent="checkAnswer"
    @keydown.space="checkAnswer"
  >
    <input class="main-answer-r" type="radio" name="answer" :id="id" :value="value" />
    <label class="main-answer" :for="id">
      <img
        class="main-answer-preview"
        :src="preview"
        :alt="title"
      >
      {{ title }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'ArtistAnswer',
  props: {
    id: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    preview: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    checkAnswer() {
      this.$emit('check');
    },
  },
};
</script>
