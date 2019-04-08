<template>
  <div class="player-wrapper">
    <div class="player">
      <audio
        :src="src"
        :type="type"
        :play="play"
        @timeupdate="onTimeUpdateListener"
        @loadedmetadata="onDurationListener"
        @ended="revertState"
        ref="audio"
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

<script src="./v-player.js"></script>
<style lang="stylus" scoped src="./v-player.styl"></style>
