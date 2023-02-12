<template>
  <h1>Oslim Reaction Timer</h1>
  <button :disabled="isPlaying" @click="start">Play</button>
  <Block v-if="isPlaying" :delay="delay" @end="EndGame" />
  <!-- <p>Reaction timme is: {{ score }} Milsec</p> -->
  <div>
    <Results :score="score" v-if="showResult">
      {{ score }}
    </Results>
  </div>
</template>


<script>
import Block from "./Block.vue";
import Results from "./Results.vue";
export default {
  name: "App",
  components: { Block, Results },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResult: false,
    };
  },

  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showResult = false;
    },
    EndGame(score) {
      this.isPlaying = false;
      this.score = score;
      this.showResult = true;
    },
  },
};
</script>

<style scoped>
#app {
  -webkit-font-smoothing: antialised;
  text-align: center;
  color: #444;
  margin-top: 40px;
}
button {
  padding: 9px 20px;
  background: #0faf87;
  border-radius: 4px;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: white;
  letter-spacing: 2px;
}
button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>