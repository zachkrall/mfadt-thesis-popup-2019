<template>
  <div id="app">
    <Nav/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Nav from './ui/Nav.vue'
import Footer from './ui/Footer.vue'

export default {
  name: 'app',
  components: { Nav, Footer }
}

const root = document.documentElement;

const hue = Math.random() * 360;

const randomText = () => {
  return `hsl(${hue}, 50%, 40%)`;
}
const randomBg = () => {
  return `hsl(${hue}, 30%, 80%)`;
}

root.style.setProperty('--text', randomText() );
root.style.setProperty('--bg', randomBg() );
</script>

<style>
@import url('reset.css');
@import url('global.css');
</style>
