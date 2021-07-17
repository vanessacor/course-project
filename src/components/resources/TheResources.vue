<template>
  <section>
    <base-button
      type="default"
      :class="currentTabComponent === 'ResourcesList' ? 'active' : ''"
      @click="changeTab('ResourcesList')"
      >Resources List</base-button
    >
    <base-button
      type="default"
      @click="changeTab('AddResource')"
      :class="currentTabComponent === 'AddResource' ? 'active' : ''"
      >Add Resource</base-button
    >
  </section>
  <keep-alive>
    <component :is="currentTabComponent"></component>
  </keep-alive>
</template>

<script>
import ResourcesList from "@/components/resources/ResourcesList.vue";
import AddResource from "@/components/resources/AddResource.vue";

export default {
  components: { ResourcesList, AddResource },
  provide() {
    return {
      storedResources: this.storedResources,
    };
  },
  data() {
    return {
      currentTabComponent: "ResourcesList",
      storedResources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "The official guide to Vue.js",
          link: "https://vuejs.org",
        },
        {
          id: "mdn",
          title: "MDN Web Docs",
          description: "Resources for developers, by developers",
          link: "https://developer.mozilla.org/en-US",
        },
        {
          id: "vuex",
          title: "Vuex",
          description: "Documentation for VUEX",
          link: "https://vuex.vuejs.org/guide/",
        },
      ],
    };
  },
  methods: {
    changeTab(tab) {
      this.currentTabComponent = tab;
    },
  },
};
</script>

<style scoped>
button {
  background-color: transparent;
}
.active {
  background-color: #e8e4e6;
}
</style>