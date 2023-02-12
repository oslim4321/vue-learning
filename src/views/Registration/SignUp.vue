<template>
  <form @submit.prevent="submitForm">
    <label for="email">Email:</label>
    <input type="email" id="email" v-model="email" required />

    <label for="username">Username:</label>
    <input type="text" id="username" v-model="name" required />

    <label for="password">Password:</label>
    <input type="password" id="password" v-model="password" required />

    <input type="submit" value="Submit" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      name: "",
      password: "",
    };
  },
  methods: {
    async submitForm() {
      const formData = {
        email: this.email,
        name: this.name,
        password: this.password,
        error: "",
      };

      try {
        const response = await fetch("http://127.0.0.1:8000/api/createUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        console.log(data, "data");
        if (data.status) {
          localStorage.setItem("userData", data.message);
          this.$router.push({
            name: "Dashboard",
            params: { id: data.message },
          });
        }
      } catch (error) {
        console.error(error, "err");
      }
    },
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  padding: 30px;
  background-color: #f2f2f2;
  border-radius: 10px;
}

label,
input[type="submit"] {
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  border: 2px solid #ccc;
  border-radius: 4px;
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  font-size: 18px;
}

input[type="submit"] {
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

input[type="submit"]:hover {
  background-color: #3e8e41;
}
</style>