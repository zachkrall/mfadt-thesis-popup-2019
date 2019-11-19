<template>
  <section id="projects">
    <h1>Student Projects</h1>
    <div id="filter">
      <span>Viewing:</span>
      <div>
      <ul id="filter-ul" v-on:click="filter">
        <li class="filter-item selected" id="all-button">All Thesis Sections</li>
        <li class="filter-item" data-thesis="anezka">Anezka Sebek</li>
        <li class="filter-item" data-thesis="brad">Brad MacDonald</li>
        <li class="filter-item" data-thesis="aya">Aya Karpinska</li>
        <li class="filter-item" data-thesis="kyle">Kyle Li</li>
        <li class="filter-item" data-thesis="katherine">Katherine Moriwaki</li>
        <li class="filter-item" data-thesis="john">John Sharp</li>
        <li class="filter-item" data-thesis="mattie">Mattie Brice</li>
        <li class="filter-item" data-thesis="sven">Sven Travis</li>
        <li class="filter-item" data-thesis="elizabeth">Elizabeth Stark</li>
      </ul>
    </div>
    </div>
    <div class="grid">
      <div v-for="(p, key) in visible" v-bind:key="key">
        <h3>Project Title</h3>
        <h4>Student</h4>
        <p>Short project description</p>
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
    filter(e){

      document.getElementById('filter-ul').classList.toggle('active');

      Array.from(
        document.getElementsByClassName('filter-item')
      )
      .map( i => {
        i.classList.remove('selected')
      });

      event.target.classList.add('selected');

      document.getElementById('filter-ul').blur();

      let label = e.target.getAttribute('data-thesis');

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


button{
  font-size:inherit;
  color:inherit;
  border:0;
  background:transparent;
  cursor:pointer;
}
div.filter{

}

ul, li{ list-style:none;margin:0;padding:0;}

#filter{
  display:flex;
  align-items:top;
}
#filter span{
  padding: 0.25rem 0.3rem 0.25rem 0;
}
#filter div{
  display:inline-block;
  position:relative;
  flex-grow: 1;
  z-index:999;
}
#filter ul{
  position:absolute;
  top:0;left:0;
  display:inline-block;
  border:1px solid var(--text);
  border-radius:5px;
  background:var(--bg);
}

#filter ul li{
  display:none;
}
#filter ul li.selected,
#filter ul.active li{
  display:block;
  padding: 0.25rem 0.3rem;
  cursor:pointer;
}
#filter ul li.selected,
#filter ul li:hover{
  font-weight:bold;
}
</style>
