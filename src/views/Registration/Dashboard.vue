<template>
  <div>
    <p v-if="loading">Loading...</p>
    <p v-else-if="error">Error: {{ error }}</p>
    <div v-if="data">
      <h2>{{ data.message }} {{ data.status }}</h2>
      <!-- <p>{{ data.description }}</p> -->
    </div>
  </div>
</template>

<script>
import getUser from "../../composable/getUser";

export default {
  setup() {
    const { data, error, fetchData } = getUser();
    fetchData();
    return { data, error };
  },
};
</script>
