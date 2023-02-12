<template>
  <h2>Jobs</h2>
  <div v-for="job in jobs" :key="job.id" class="job">
    <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
      <h2>{{ job.title }}</h2>
    </router-link>
  </div>

  <button @click="getData">fetch data</button>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { title: "oslim Web Dev job", id: 1, details: "lorem" },
        { title: "fizz UI/UX job", id: 2, details: "lorem" },
        { title: "Tizzy Full Stack Job", id: 3, details: "lorem" },
      ],
    };
  },
  methods: {
    async getData() {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/getBlog");
        const data = await res.json();

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.job h2 {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 700px;
  cursor: pointer;
  color: #444;
  text-align: center;
}

.job h2:hover {
  background-color: #ddd;
  text-decoration: none;
}
.job a {
  text-decoration: none;
}
</style>