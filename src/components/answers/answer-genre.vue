<template>
  <div class="genre-answer">
    <slot name="player"></slot>
    <input
      type="checkbox"
      name="answer"
      :checked="checked"
      :value="value"
      :id="id"
      @change="isChecked"
    >
    <label class="genre-answer-check" :for="id"></label>
  </div>
</template>

<script>
export default {
  name: 'genre-answer',
  props: {
    id: {
      type: Number,
      default: 0,
    },
    value: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    checked: false,
  }),
  methods: {
    isChecked() {
      this.checked = !this.checked;
    },
  },
};
</script>
