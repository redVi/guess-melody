<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
    <circle
      cx="390" cy="390" r="370"
      class="timer-line"
      style="filter: url(../..#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"
    ></circle>

    <div class="timer-value">
      <span class="timer-value-mins">{{ minutes }}}</span>
      <span class="timer-value-dots">:</span>
      <span class="timer-value-secs">{{ seconds }}}</span>
    </div>
  </svg>
</template>

<script>
export default {
  name: 'VTimer',
  props: {
    minutes: {
      type: Number,
      default: 5,
    },
    seconds: {
      type: Number,
      default: 0,
    },
  },
};
</script>
