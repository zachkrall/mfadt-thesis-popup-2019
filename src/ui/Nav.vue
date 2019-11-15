<template>
  <nav v-on:scroll.passive="scrollUpdate">
    <div>
      <a href="/" v-on:click="scroll">{{ title }}</a>
    </div>
    <div class="hide-on-mobile">
      <a href="#about" v-on:click="scroll">About</a>
      <a href="#projects" v-on:click="scroll">Projects</a>
      <a href="#directions" v-on:click="scroll">Directions</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data : function() {
    return {
      title: "MFADT"
    }
  },
  created: function () {
    window.addEventListener('scroll', this.scrollUpdate);
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.scrollUpdate);
  },
  methods: {
    scrollUpdate(){
      let nav = document.getElementsByTagName('nav')[0];
      let header = document.getElementsByTagName('header')[0];
      let val = header.clientHeight - nav.clientHeight;
      if( window.scrollY > val){
        this.title = "MFADT THESIS POPUP";
      } else {
        this.title = "MFADT";
      }
    },
    scroll(e){
      e.preventDefault();
      let id = e.target.href.split('#')[1];
      let element = document.getElementById(id) || null;
      let pos = 0;

      let nav = document.getElementsByTagName('nav')[0];

      if( element ){
        pos = element.offsetTop - nav.clientHeight;
      } else {
        pos = 0;
      }

      console.log(pos);

      window.scroll({
            top: pos,
            left: 0,
            behavior: 'smooth'
      });
    }
  }
};
</script>

<style scoped>
nav{
  z-index:999999;
  position:fixed;
  top:0;left:0;
  width: 100%;
  padding: var(--padding);

  display:flex;
  align-items:center;
  justify-content:space-between;

  background: var(--bg);

  color: var(--text);

  text-align:center;

  /* mix-blend-mode: difference; */
}
@media screen and (max-width: 500px){
  nav{
    justify-content:center;
  }
  .hide-on-mobile{
    display:none;
  }
}
nav a{
  color: inherit;
  text-decoration:none;
}
nav a:not(:first-child){
  margin-left:var(--padding);
}
</style>
