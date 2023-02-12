<template>
  <form @click.prevent="handleSubmit">
    <label>Email :</label>
    <input type="text" name="email" required v-model="emails" />
    <label>Password :</label>
    <input type="password" name="password" required v-model="password" />

    <label>Role :</label>
    <select v-model="select">
      <option value="" selected>Role</option>
      <option value="Web Developer">Web Developer</option>
      <option value="Web Designer">Web Designer</option>
    </select>

    <label>Skills</label>
    <input type="text" required v-model="temSkill" @keyup="addSkills" />
    <div v-for="skill in skills" :key="skill" class="pill">
      <span @click="delSkill(skill)">{{ skill }}</span>
    </div>

    <div class="term">
      <input type="checkbox" required v-model="terms" />
      <label>Accept terms and conditions</label>
    </div>

    <div class="submit">
      <button>Create Account</button>
    </div>
  </form>
  <p>{{ emails }}</p>
  <p>{{ password }}</p>
  <p>{{ select }}</p>
  <p>{{ terms }}</p>
</template>

<script>
export default {
  name: "SignUp",
  components: {},
  data() {
    return {
      emails: "",
      password: "",
      select: "",
      terms: false,
      temSkill: "",
      skills: [],
    };
  },
  methods: {
    addSkills(e) {
      if (e.key === "," && this.temSkill) {
        if (this.skills.includes(this.temSkill)) {
          alert("you cant make duplicate value");
          return;
        }
        this.skills.push(this.temSkill);
        this.temSkill = "";
        console.log(this.skills);
      }
    },
    delSkill(index) {
      this.skills = this.skills.filter((elem) => {
        return elem !== index;
      });
    },
    handleSubmit() {
      console.log("form submitted");
    },
  },
};
</script>

<style>
form {
  max-width: 329px;
  margin: 30px auto;
  background: white;
  padding: 40px;
  border-radius: 14px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.9);
}
label {
  color: #aaa;
  display: block;
  margin: 10px 0 15px;
  font-weight: bold;
  text-align: left;
}
input,
select {
  display: block;
  padding: 10px 10px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid grey;
  color: #555;
  outline: none;
}
/* select {
  border: 1px solid black;
} */
/* focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20 */
input:focus {
  border: 1px solid palevioletred;
}
.term {
  display: flex;
}

input[type="checkbox"] {
  background: red;
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 5px;
}
.pill {
  display: inline-block;
  margin: 20px 10px;
  padding: 5px 10px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
button {
  padding: 10px 20px;
  border-radius: 10px;
  background: chocolate;
  color: white;
  border: 0;
  margin-top: 10px;
}
.submit {
  text-align: center;
}
</style>