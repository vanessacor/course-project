<template>
  <Header />
  <main>
    <section>
      <ResourcesList :resourceList="storedResources" />
    </section>
  </main>
</template>

<script>
import ResourcesList from '@/components/resources/ResourcesList.vue';
import Header from '@/components/layout/Header.vue';

export default {
  name: 'App',
  components: { Header, ResourcesList },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official guide to Vue.js',
          link: 'https://vuejs.org',
        },
        {
          id: 'mdn',
          title: 'MDN Web Docs',
          description: 'Resources for developers, by developers',
          link: 'https://developer.mozilla.org/en-US',
        },
        {
          id: 'vuex',
          title: 'Vuex',
          description: 'Documentation for VUEX',
          link: 'https://vuex.vuejs.org/guide/',
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  text-align: center;
  color: #001e1d;
  background-color: #abd1c6;
}
main {
  padding-top: 3rem;
  margin-bottom: 3rem;
}
</style>
