import { createRouter, createWebHistory } from "vue-router";
import TopPage from "../views/TopPage.vue";
import TypingPage from "../views/TypingPage.vue";
import ScorePage from "../views/ScorePage.vue";
const routes = [
  {
    path: "/",
    name: "TopPage",
    component: TopPage,
  },
  {
    path: "/typing",
    name: "TypingPage",
    component: TypingPage,
    // props: true はpassname:route.params.passnameのシンタックス
    props: (route) => ({
      //ここでオブジェクトにしたらいいんか！なるほど
      gameMode: route.query.gameMode,
      gameSection: route.query.gameSection,
      keyboard: route.query.keyboard,
    }),
  },
  {
    path: "/score",
    name: "ScorePage",
    component: ScorePage,
    props: (route) => ({
      gameMode: route.query.gameMode,
      gameSection: route.query.gameSection,
      keyboard: route.query.keyboard,
      resultScore: Number(route.query.resultScore),
    }),
  },
  {
    path: "/login/:nextPage",
    name: "LoginPage",
    props: (route) => ({
      nextPage: route.params.nextPage,
    }),
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginPage.vue"),
  },
  {
    //:nextPageをつけるとno matchになる。なぜだ
    path: "/signin:nextPage",
    name: "SigninPage",
    props: (route) => ({
      nextPage: route.params.nextPage,
    }),
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SigninPage.vue"),
  },
  {
    path: "/ranking",
    name: "RankingPage",
    props: (route) => ({
      gameResultData: route.query.gameResultData,
    }),
    component: () => import("../views/RankingPage.vue"),
  },
  {
    path: "/register",
    name: "RegisterPage",
    props: true,
    component: () => import("../views/RegisterPage.vue"),
  },
  {
    path: "/logout",
    name: "LogoutPage",
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LogoutPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
