<template>
  <li>
    <base-card>
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
      <p><a :href="item.link">Link</a></p>
    </base-card>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
h3 {
  color: #fffffe;
}
p {
  color: #abd1c6;
}
a {
  color: #f9bc60;
  text-decoration: none;
  font-weight: bold;
}
a:hover {
  color: #e16162;
}
</style>