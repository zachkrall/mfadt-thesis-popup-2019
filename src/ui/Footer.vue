<template>
  <footer>
    <div>
      <b>Thesis Pop Up Team</b><br/>
      Zhane Lloyd<br/>
      Kat Obermeyer<br/>
      Jeffrey Geiringer<br/>
      Zach Krall, Website<br/>
    </div>
    <div>
      Parsons School of Design<br/>
      The New School<br/>
      NYC
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
footer{
  padding: var(--padding);
  max-width:900px;
  margin:0 auto;
}
footer > div{
  display:inline-block;
  vertical-align: top;
  margin-right: var(--padding);
}
</style>
