<template>
  <div id="home">
    <Header />
    <About />
    <Projects />
    <Directions />
  </div>
</template>

<script>
import Header from "../sections/Header.vue";
import About from "../sections/About.vue";
import Projects from "../sections/Projects.vue";
import Directions from "../sections/Directions.vue";

export default {
  name: "Home",
  components: { Header, About, Projects, Directions },
  props: {
    msg: String
  }
};
</script>

<style scoped>

</style>
