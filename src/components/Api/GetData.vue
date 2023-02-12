<template>
  <h1>Hello we making get req</h1>
  <button @click="getData">Get Data</button>
  <input type="email" v-model="email" />
  <input type="text" v-model="password" />
  <button @click="makePostRequest">Send Data</button>

  {{ email }}
  {{ password }}

  <div v-for="data in fetchData" :key="data.type">
    {{ data.type }} is {{ data.base }}
  </div>
</template>


<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      response: "",
      fetchData: "",
    };
  },
  methods: {
    async getData() {
      const res = await fetch("http://127.0.0.1:8000/api/data");
      const data = await res.json();
      this.fetchData = data;
      console.log(data);
    },

    handleSubmit() {
      console.log(this.email, this.password);
    },

    async makePostRequest() {
      let data = { email: this.email, password: this.password };
      const res = await fetch("http://127.0.0.1:8000/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      try {
        const result = await res.json();
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>