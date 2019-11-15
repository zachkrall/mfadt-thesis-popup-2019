<template>
  <section id="projects">
    <h1>Student Projects</h1>
    <div class="filter">
      <div id="border"></div>
      <button id="all-button" v-on:click="filter">All</button>
      <button data-thesis="anezka" v-on:click="filter">Anezka Sebek</button>
      <button data-thesis="brad" v-on:click="filter">Brad MacDonald</button>
      <button data-thesis="aya" v-on:click="filter">Aya Karpinska</button>
      <button data-thesis="kyle" v-on:click="filter">Kyle Li</button>
      <button data-thesis="katherine" v-on:click="filter">Katherine Moriwaki</button>
      <button data-thesis="john" v-on:click="filter">John Sharp</button>
      <button data-thesis="mattie" v-on:click="filter">Mattie Brice</button>
      <button data-thesis="sven" v-on:click="filter">Sven Travis</button>
      <button data-thesis="elizabeth" v-on:click="filter">Elizabeth Stark</button>
    </div>
    <div class="grid">
      <div v-for="p in visible">
        <h3>Project Title</h3>
        <h4>Student</h4>
        <p>Short project description</p>
        <p>{{ p.thesisGroup }}</p>
        <a class="btn" href="#">Website</a> <a class="btn" href="#">More Info</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Projects",
  data: function (){

    let array = [
      {thesisGroup: 'sven'},
      {thesisGroup: 'sven'},
      {thesisGroup: 'john'},
      {thesisGroup: 'sven'},
      {thesisGroup: 'sven'},
      {thesisGroup: 'john'},
      {thesisGroup: 'sven'}
    ];
    return {
      projects: array,
      visible: array
    }
  },
  methods: {
    filter(event){
      console.log(event);
      let e = event;
      let t = e.target.offsetTop;
      let l = e.target.offsetLeft;
      let h = e.target.clientHeight;
      let w = e.target.clientWidth;

      let b = document.getElementById('border');

      let label = e.target.getAttribute('data-thesis');

      b.style.width = w + 'px';
      b.style.height = h + 'px';
      b.style.top = t + 'px';
      b.style.left = l + 'px';

      if( !label ){
        this.visible = this.projects;
      } else {
        this.visible = this.projects.filter( i => {
          return i.thesisGroup == label
        });
      }
    }
  },
  mounted: function (){
    let e = document.getElementById('all-button');
    let t = e.offsetTop;
    let l = e.offsetLeft;
    let h = e.clientHeight;
    let w = e.clientWidth;

    let b = document.getElementById('border');

    b.style.width = w + 'px';
    b.style.height = h + 'px';
    b.style.top = t + 'px';
    b.style.left = l + 'px';
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid{
  margin-top:var(--padding);
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: calc( var(--padding) * 2 );
}

@media screen and (max-width: 700px){
  .grid{
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 500px){
  .grid{
    grid-template-columns: 1fr;
  }
}

h3{
  font-size:inherit;
}
h4{
  font-size:inherit;
  opacity:0.7;
}

p{
  padding: 0 0 calc( var(--padding) * 0.5 ) 0;
}

a.btn{
  color:inherit;
  border:1px solid var(--text);
  border-radius: 5px;
  text-decoration:none;
  padding: 0.25rem 0.3rem;
  margin-right:0.25rem;
}
a.btn:hover{
  background: var(--text);
  color: var(--bg);
}

button{
  font-size:inherit;
  color:inherit;
  border:0;
  background:transparent;
  cursor:pointer;
}
div.filter{
}
div#border{
  position:absolute;
  top:0;left:0;
  width:0;height:0;
  border:1px solid var(--text);
  border-radius:5px;
  transition:all ease 0.3s;
}
</style>
