<template>
  <section id="projects">
    <h1>Student Projects</h1>
    <div class="filter">
      Thesis Group:
      <button v-on:click="filter()">All</button>
      <button v-on:click="filter('anezka')">Anezka Sebek</button>
      <button v-on:click="filter('brad')">Brad MacDonald</button>
      <button v-on:click="filter('aya')">Aya Karpinska</button>
      <button v-on:click="filter('kyle')">Kyle Li</button>
      <button v-on:click="filter('katherine')">Katherine Moriwaki</button>
      <button v-on:click="filter('john')">John Sharp</button>
      <button v-on:click="filter('mattie')">Mattie Brice</button>
      <button v-on:click="filter('sven')">Sven Travis</button>
      <button v-on:click="filter('elizabeth')">Elizabeth Stark</button>
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
    filter(label){
      if( !label ){
        this.visible = this.projects;
      } else {
        this.visible = this.projects.filter( i => {
          return i.thesisGroup == label
        });
      }
    }
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
</style>
