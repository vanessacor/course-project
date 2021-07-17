<template>
  <TheHeader />
  <main>
    <section>
      <TheResources />
    </section>
  </main>
</template>

<script>
import TheResources from "@/components/resources/TheResources.vue";
import TheHeader from "@/components/layout/TheHeader.vue";

export default {
  name: "App",
  components: { TheHeader, TheResources },
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
