<template>
  <div id="home">
    <Header />
    <About />
    <Projects />
    <Directions />
    <!-- <section>
        <h2>Acknowledgments</h2>
        <div><b>Zhane Lloyd</b>, Lorem Ipsum</div>
        <div><b>Kat Obermeyer</b>, Lorem Ipsum</div>
        <div><b>Jeffrey Geiringer</b>, Promotional Design<div>
        <div><b>Zach Krall</b>, Website Development</div>
    </section> -->
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
