<template>
  <section id="directions">
    <h1>Directions</h1>
    <p class="measured">
      The MFA Design + Technology department is located on the 12th floor of
      Building D (6 East 16th Street, New York, NY).
    </p>
    <p class="measured">
      The nearest subways are 14th Street–6th Ave on the F and M train and 14th
      Street–Union Square on the 4, 5, 6, N, Q, R, W, and L trains.
    </p>
    <p>
      <a href="https://www.google.com/maps/place/6+E+16th+St,+New+York,+NY+10003/@40.7369955,-73.9944101,17z/data=!3m1!4b1!4m5!3m4!1s0x89c259a2868a69e1:0x79b19a0b47c6d645!8m2!3d40.7369955!4d-73.9922214" class="btn">Google Maps</a>
    </p>
  </section>
</template>

<script>
export default {
  name: "Directions",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p:not(:last-of-type){
  margin-bottom:1rem;
}
</style>
