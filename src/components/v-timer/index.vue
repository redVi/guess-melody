<template>
  <div class="timer-value" v-if="time">
    <span class="timer-value-mins">{{ minutes }}</span>
    <span class="timer-value-dots">:</span>
    <span class="timer-value-secs">{{ seconds }}</span>
  </div>
</template>

<script>
const formatTime = (time) => {
  if (time > 9) return time;
  return `0${time}`;
};

export default {
  name: 'VTimer',
  props: {
    time: {
      type: Number,
      required: true,
    },
  },
  computed: {
    minutes() {
      return formatTime(Math.floor(this.time / 60));
    },
    seconds() {
      return formatTime(this.time - (this.minutes * 60));
    },
  },
};
</script>

<style lang="stylus" scoped src="./v-timer.styl"></style>
