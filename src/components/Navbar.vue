<template>
  <nav>
    <a><router-link to="/">Home</router-link> <br /></a>
    <a> <router-link :to="{ name: 'About' }">About</router-link></a>
    <a> <router-link :to="{ name: 'Jobs' }">Jobs</router-link> </a>
  </nav>
  <div class="button">
    <button @click="Back">Go back</button>
    <button @click="Redirect">Redirect</button>
    <button @click="Forward">Go forward</button>
  </div>
</template>

<script>
export default {
  methods: {
    Back() {
      this.$router.go(-1);
    },
    Redirect() {
      this.$router.push({ name: "About" });
    },
    Forward() {
      this.$router.forward();
    },
  },
};
</script>

<style scope>
nav {
  display: flex;
  gap: 30px;
}
nav a {
  text-decoration: none;
  color: crimson;
}
nav .router-link-active {
  text-decoration: none;
  color: crimson;
  padding: 10px;
  background-color: #2c3e;
  text-decoration: none;
  font: 29px;
  border-radius: 10px;
}
button {
  border: 0;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 4px 0;
  cursor: pointer;
  outline: 2px solid saddlebrown;
}
</style>
