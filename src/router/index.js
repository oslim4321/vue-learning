import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Job from "../views/Jobs/Job.vue";
import JobDetails from "../views/Jobs/JobDetails";
import NotFountd from "../views/NotFountd.vue";
import SignUp from "../views/Registration/SignUp.vue";
import Dashboard from "../views/Registration/Dashboard.vue";
import index from "../views/componentApi/index";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/Job",
    name: "Jobs",
    component: Job,
  },
  {
    path: "/Job/:id",
    name: "JobDetails",
    component: JobDetails,
  },
  /* redirect */
  {
    path: "/Signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/Dashboard/:id",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/compoAPI",
    component: index,
  },
  {
    path: "/all-job",
    redirect: "/job",
  },
  /* 404 */
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: NotFountd,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
