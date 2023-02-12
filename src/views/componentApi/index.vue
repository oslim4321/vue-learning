<template>
  <h1>component API</h1>
  <p ref="p">this is {{ name }} he ios {{ age }} yrs old</p>
  <button @click="handleClick">clck me</button>
  <input type="text" v-model="name" />
  <button @click="age++">Incre age</button>

  <input type="text" v-model="search" />
  <h2>Search terms: {{ search }}</h2>
  <div v-for="name in matchNames" :key="name">
    <h3>{{ name }}</h3>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed, watch, watchEffect } from "@vue/runtime-core";
export default {
  name: "compo",
  setup() {
    let name = ref("oslim");
    let age = ref(19);

    const p = ref(null);
    console.log(p, p.value);

    const handleClick = () => {
      //   p.value.classList.add("red");
      //   p.value.innerHTML = "this is danger now";
      //   console.log(p.value);
      name.value = "sultan";
      age.value = "okok";
    };

    /* computed props */
    const search = ref();
    const nameings = ref([
      "oslim",
      "emmy",
      "tatiana",
      "dav ",
      "ninja",
      "lurigi",
      "parkrr",
    ]);
    const matchNames = computed(() => {
      return nameings.value.filter((name) => name.includes(search.value));
    });

    watch(search, () => {
      console.log("watch has neen run");
    });
    watchEffect(() => {
      console.log("watch effect run", search.value);
    });

    return { name, age, handleClick, p, nameings, search, matchNames };
  },
};
</script>

<style>
.red {
  color: red;
}
</style>