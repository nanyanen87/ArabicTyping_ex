<template>
  <div id="nav">
    <router-view />
  </div>
</template>
<script>
export default {
  components: {},
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fd9f30;
  height: 100%;
}

#nav {
  height: 100%;
}

#nav a {
  font-weight: bold;
  /* color: #fa6a3b; */
}

/* #nav a.router-link-exact-active {
  color: #fa6a3b;
} */
</style>
