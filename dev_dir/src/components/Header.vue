<template>
  <div>
    <div>
      <router-link class="link" to="/">top</router-link> |
      <router-link
        class="link"
        :to="{ name: 'LoginPage', params: { nextPage: '/' } }"
        v-show="!sessionStart"
        >login</router-link
      >
      |
      <router-link
        class="link"
        :to="{ name: 'SigninPage', params: { nextPage: '/' } }"
        v-show="!sessionStart"
        >signin</router-link
      >
      <router-link class="link" to="/logout" v-show="sessionStart"
        >logout</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {},
  data() {
    return {
      sessionStart: false,
    };
  },
  beforeMount: function () {
    this.axios
      .get("/controllers/session")
      .then((res) => {
        this.sessionStart = res.data.session;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    onclick() {},
  },
};
</script>
<style scoped>
div {
  background-color: #fd9f30;
  color: aliceblue;
}
.link {
  line-height: 50px;
  color: aliceblue;
}
</style>
