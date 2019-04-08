<template>
  <audio
    v-if="src"
    :src="src"
    :type="type"
    :play="play"
    v-on:ended="changePlayState"
    ref="audio"
  ></audio>
</template>

<script>
export default {
  name: 'VAudio',
  props: {
    play: {
      type: Boolean,
      default: false,
    },
    src: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'audio/mp3',
    },
  },
  mounted() {
    this.checkPlay();
  },
  beforeDestroy() {
    this.$emit('rerender');
  },
  methods: {
    checkPlay() {
      if (this.play) {
        this.$refs.audio.play();
      } else {
        this.$refs.audio.pause();
      }
    },
    changePlayState() {
      this.$emit('rerender');
    },
  },
};
</script>
