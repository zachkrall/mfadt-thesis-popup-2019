<template>
  <header>
    <!-- <div id="video">
      <video autoplay loop webkit-playsinline>
        <source src="/video.mp4" type="video/mp4"/>
      </video>
    </div> -->
      <div id="glitch-wrap" aria-label="Thesis Pop-Up">
        <div v-html="glitchText('THESIS')" aria-hidden="true"></div>
        <div v-html="glitchText('POPUP')" aria-hidden="true"></div>
      </div>
    <div id="bottom_text">
      <h2>SATURDAY, DECEMBER 14TH, 2019</h2>
      <a href="#" id="rsvp_link">RSVP</a>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  },
  methods: {
    glitchText(text){

      const letter = (x) => {
        let html = `<div class="letter">`;
        for(let i=0;i<21;i++){
          html += `<h1 class="glitch"><span style="top:${i*-5}px;animation-delay:${i*0.1}s;animation-duration:${i*0.1+0.2}s">${x}</span></h1>`;
        }
        html += `</div>`
        return html;
      }

      let t = text.split('').map( i => letter(i)).join('');

      // console.log(t);

      return t;

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
header{
  position:relative;
  display:flex;
  align-items: center;
  justify-content: center;
  background: var(--bg);
  height:60vh;
  min-height: 600px;
  color: var(--text);
}
header h2{
  font-weight:normal;
}
#video{
  position:absolute;
  top:0;left:0;
  width:100%;height:100%;
  overflow:hidden;
}
#video video{
  width:100vw;
  height:auto;
}
@media screen and (max-width: 1200px){
  #video{
  }
  #video video{
    height:100vh;
    width: calc(100vh * 16 / 9);
  }
}

#bottom_text{
  position:absolute;
  bottom:0;left:0;
  width:100%;
  padding:var(--padding);
  display:flex;
  align-items: center;
  justify-content: space-between;
}
@media screen and (max-width: 500px){
  #bottom_text{
    display:block;
  }
}
#bottom_text > * {
  font-size:inherit;
}
a#rsvp_link{
  color:inherit;
  border:1px solid var(--text);
  border-radius: 5px;
  text-decoration:none;
  padding: 0.25rem 0.8rem;
}
a#rsvp_link:hover{
  background: var(--text);
  color: var(--bg);
}
.letter{
  display:inline-block;
}
#glitch-wrap {
  text-align:center;
  /* mix-blend-mode: difference; */
}
#glitch-wrap > *{
  display:inline-block;
  margin:0 1rem;
}
.glitch{
  position:relative;
  height:5px;width:100%;
  overflow:hidden;
  padding-left:10px;
  font-size:90px;
}
@media screen and (max-width: 700px){
  #glitch-wrap > div:not(:first-of-type){
    margin-top:-40px;
  }
  .glitch{
    font-size: 60px;
  }
}
.glitch span{
  /* background:green; */
  position:relative;
  left:0;
  line-height:100px;

  animation-name: glitch;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
@keyframes glitch{
  from {
    left: 0px;
  }
  to {
    left: -10px;
  }
}
</style>
