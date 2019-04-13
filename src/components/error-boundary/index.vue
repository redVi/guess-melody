<script>
export default {
  name: 'ErrorBoundary',
  data: () => ({
    error: false,
  }),
  errorCaptured(err, vm, info) {
    this.error = true;
  },
  render(h) {
    return this.error ? h('p', 'No data') : this.$slots.default[0];
  },
};
</script>
