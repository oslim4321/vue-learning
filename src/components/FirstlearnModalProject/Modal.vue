<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
      <p>{{ title }}</p>
      <slot></slot>
      <div class="action">
        <slot name="link"></slot>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  props: ["header", "text", "theme", "title"],
  data() {
    return {};
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>



<style >
.backdrop {
  top: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
}
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
/* .modal h1 {
  color: white;
}
.modal p {
  color: rgba(255, 255, 255, 0.6);
} */
/* .sale {
  background: crimson;
} */
.modal .action {
  text-align: center;
  margin: 30px 0 10px 0;
}
.modal .action a {
  text-align: center;
  padding: 10px;
  border: 1px solid #eee;
  margin: 30px 0 10px 0;
  color: #333;
  text-decoration: none;
  margin: 10px;
}
</style>