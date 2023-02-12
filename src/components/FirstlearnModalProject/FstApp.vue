<template>
  <h1>{{ title }}</h1>
  <!-- template ref -->
  <!-- <input ref="name" type="text" />
  <button @click="handleClick">Click me</button> -->

  <div v-if="showModal">
    <Modal :header="header" :text="text" :theme="theme" @close="toggleModal">
      <template v-slot:link>
        <a href="">sign up now</a>
        <a href="">more info</a>
      </template>
      <!-- create a slot so it can be access as html tag in th modal component -->
      <h1>My first vue app</h1>
      <p>get you badge for halve price</p>
    </Modal>
  </div>

  <!-- modal 2 -->
  <div v-if="showModal2">
    <Modal @close="toggleModal2" :title="title">
      <h1>Sign up to a new letter</h1>
      <p>for update and promo</p>
    </Modal>
  </div>

  <div class="buttWrap">
    <button @click.alt="toggleModal">Open Modal (alt</button>
    <button @click="toggleModal2">Open Modal 2</button>
  </div>
</template>

<script>
import Modal from "./Modal.vue";
export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "My first vue app",
      header: "Sign Up for Giveaway",
      text: "get you badge for halve price",
      theme: "sale",
      showModal: false,
      showModal2: false,
    };
  },

  methods: {
    // handleClick() {
    //   console.log(this.$refs.name.value);
    //   this.$refs.name.classList.add("inp");
    // },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2;
    },
  },
};
</script>

<style>
#app {
  text-align: center;
}
body {
  margin: 0;
  padding: 0;
}
.buttWrap button {
  margin: 0 10px;
}
</style>
