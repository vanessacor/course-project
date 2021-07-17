<template>
  <button :class="mode" :type="type">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    mode: {
      type: String,
      default: null,
    },
  },
};
</script>

<style scoped>
button {
  padding: 0.5rem;
  font-size: 1em;
  border: none;
  border-radius: 2px;
}
.default {
  background-color: transparent;
}
.primary {
  background-color: #f9bc60;
}

.danger {
  background-color: #e16162;
}
</style>
