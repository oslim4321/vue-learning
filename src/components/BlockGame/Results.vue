<template>
  <!-- from slot <slot></slot> ms -->
  <p>Reaction timme is: {{ score }} ms</p>
  <div class="rank">{{ rank }}</div>
</template>

<script>
export default {
  props: ["score"],

  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.score < 250) {
      this.rank = "Cool Finger";
    } else if (this.score < 400) {
      this.rank = "Rapid Reflexes";
    } else {
      this.rank = "Snail Pace...";
    }
  },
};
</script>

<style>
.rank {
  font-size: 20px;
  color: aqua;
  font-weight: bold;
}
</style>