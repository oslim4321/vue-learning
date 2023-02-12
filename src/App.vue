<template>
  <!-- <FstApp /> -->
  <!-- <AppBlock /> -->
  <!-- <AppSign /> -->
  <!-- <Click propsSend="i am selim" :text='text' /> -->
  <!-- <GetData /> -->

  <Outlet />
</template>

<script>
import Outlet from "./router/Outlet";
// import FstApp from "./components/FirstlearnModalProject/FstApp.vue";
// import AppBlock from "./components/BlockGame/AppBlock.vue";
// import AppSign from "./components/Form/AppSign.vue";
// import Click from './components/ClickEvent/Click.vue'
// import GetData from "./components/Api/GetData.vue";
export default {
  name: "App",
  // data(){
  //   return{
  //     text: 'i love coding somehow'
  //   }
  // },
  components: {
    Outlet,
    //  FstApp,
    //  AppBlock,
    // AppSign,
    // Click
    // GetData,
  },
};
</script>

<style>
</style>
