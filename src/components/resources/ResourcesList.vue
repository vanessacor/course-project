<template>
  <ul>
    <ResourcesListItem v-for="resource in resourceList" :key="resource.id" :item="resource" />
  </ul>
</template>

<script>
import ResourcesListItem from '@/components/resources/ResourcesListItem.vue';

export default {
  props: {
    resourceList: {
      type: Array,
      required: true,
    },
  },
  components: { ResourcesListItem },
};
</script>

<style scoped>
ul {
  max-width: 40rem;
  margin: 0 auto;
  list-style: none;
}
</style>