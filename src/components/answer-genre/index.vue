<template>
  <div
    v-if="value && id"
    class="genre-answer"
  >
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
  name: 'GenreAnswer',
  props: {
    id: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
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
  update() {
    this.checked = false;
  },
};
</script>
