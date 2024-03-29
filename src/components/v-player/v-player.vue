<template>
  <div class="player-wrapper">
    <div class="player">
      <audio
        :src="src"
        :type="type"
        :play="play"
        ref="audio"
        @timeupdate="onTimeUpdateListener"
        @loadedmetadata="onDurationListener"
        @ended="revertState"
      ></audio>

      <button
        class="player-control"
        :class="playClass"
        :tabindex="0"
        aria-label="play or stop track"
        v-on-clickaway="rerender"
        @click.prevent="revertState"
      ></button>

      <div class="player-track">
        <span class="player-status">
          {{ $t('time', { current: currentTime, duration }) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: 'VPlayer',
  mixins: [clickaway],
  props: {
    multiply       : { type: Boolean, default: false },
    itShouldBePlay : { type: Boolean, default: false },
    skippedTargets : { type: Array,   default: () => ['player-control'] },
    src            : { type: String,  default: '' },
    type           : { type: String,  default: 'audio/mp3' },
  },
  data: () => ({
    play: false,
    currentTime: 0,
    duration: 0,
  }),
  computed: {
    playClass() {
      const state = this.play ? 'pause' : 'play';
      return `player-control--${state}`;
    },
  },
  mounted() {
    this.initState();
  },
  watch: {
    play() {
      if (this.play) {
        this.$refs.audio.play();
      } else {
        this.$refs.audio.pause();
      }
    },
  },
  methods: {
    initState() {
      this.play = this.itShouldBePlay;
    },
    revertState() {
      this.play = !this.play;
    },
    onDurationListener(evt) {
      const fullTime = evt.target.duration;
      this.duration = fullTime ? Math.floor(fullTime) : 0;
    },
    onTimeUpdateListener(evt) {
      const time = evt.target.currentTime;
      this.currentTime = time ? Math.floor(time) : 0;
    },
    rerender(evt) {
      // no need actions when the player is only one
      if (!this.multiply) return;

      const exceptions = this.skippedTargets
        .filter(target => evt.target.classList.contains(target));

      // stop playing music if the button from the list of exceptions was pressed
      if (Boolean(exceptions.length) === true) this.play = false;
    },
  },
};
</script>

<style lang="stylus" scoped src="./v-player.styl"></style>
