<template>
  <div v-if="showBlock" class="block" @click="clearTimer">
    click me
    <!-- <p>{{ delay }}</p> -->
  </div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
      //   console.log(this.delay);
    }, this.delay);
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    clearTimer() {
      clearInterval(this.timer);
      // console.log(this.reactionTime);
      this.$emit("end", this.reactionTime);
    },
  },

  //   updated() {
  //     console.log("update success");
  //   },
};
</script>

<style>
.block {
  width: 400px;
  border-radius: 20px;
  background: crimson;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>