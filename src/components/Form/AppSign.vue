<template>
  <h1>Hello world</h1>
  <SignUp />
</template>

<script>
import SignUp from "./SignUp.vue";
export default {
  components: { SignUp },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: #eee;
  /* display: flex;
  align-items: center;
  justify-content: center; */
}
</style>