<template>
  <div class="main-answer-wrapper" @click.prevent="nextScreen">
    <input class="main-answer-r" type="radio" :id="id" name="answer" :value="value"/>
    <label class="main-answer" :for="id">
      <img class="main-answer-preview" :src="preview"
           :alt="title" width="134" height="134">
      {{ title }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'ArtistAnswer',
  props: {
    id: {
      type: Number,
      default: 0,
    },
    value: {
      type: String,
      default: '',
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
    nextScreen() {
      this.$emit('screen');
    },
  },
};
</script>
