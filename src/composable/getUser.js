import { ref } from "vue";
import { useRoute } from "vue-router";

const getUser = () => {
  const route = useRoute();
  console.log(route.params.id);
  // const loading = ref(false)
  const error = ref(null);
  const data = ref(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/getSingleUser/${route.params.id}`
      );
      console.log(response);
      if (!response.ok) {
        throw Error("cannot get user");
      }
      data.value = await response.json();
      console.log(data.value, "me");
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    } finally {
      // this.loading = false;
    }
  };
  return { data, error, fetchData };
};
export default getUser;
