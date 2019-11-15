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


const randomTheme = () => {

  const root = document.documentElement;

  let options = [
    ['#2f2f2f', '#cccccc'],
    ['#eeeeee', '#0a0c0a'],
    ['#00FF00', '#001100'],
    ['#8C0031', '#B672EA'],
    ['#FFC9BF', '#A01E08'],
    ['#9690ED','#087741']
  ];

  let theme = options[ parseInt(Math.random()*options.length)];

  root.style.setProperty('--text', theme[0] );
  root.style.setProperty('--bg', theme[1] );
}

randomTheme();

</script>

<style>
@import url('reset.css');
@import url('global.css');
</style>
