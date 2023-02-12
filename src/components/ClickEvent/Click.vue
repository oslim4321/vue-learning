<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name" />
  <button @click="handleClick" class="butt">Click me</button>
  <h2>{{ propsSend }}</h2>
  <p
    :class="{
      danger: propsSend === 'i am selim',
      success: text === 'i love coding somehow',
    }"
  >
    {{ text }}
  </p>
</template>


<script>
export default {
  props: ["propsSend", "text"],
  data() {
    return {
      title: "i love vue js",
    };
  },
  methods: {
    handleClick() {
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
      console.log(this.$refs.name.value);
      console.log(this.title);
    },
  },
};
</script>

<style scoped>
.active {
  border: 1px solid red;
}
</style>