<template>
  <ul>
    <ResourcesListItem
      v-for="resource in storedResources"
      :key="resource.id"
      :item="resource"
    />
  </ul>
</template>

<script>
import ResourcesListItem from "@/components/resources/ResourcesListItem.vue";

export default {
  components: { ResourcesListItem },
  inject: ["storedResources"],
  methods: {
    deleteResource(id) {
      this.storedResources = this.storedResources.filter(
        (resource) => resource.id !== id
      );
    },
  },
};
</script>

<style scoped>
ul {
  max-width: 40rem;
  margin: 0 auto;
  list-style: none;
}
</style>