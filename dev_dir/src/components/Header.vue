<template>
  <div>
    <div>
      headerです<router-link to="/">top</router-link> |
      <router-link to="/login" v-show="!sessionStart">login</router-link> |
      <router-link to="/signin" v-show="!sessionStart">signin</router-link>
      <router-link to="/logout" v-show="sessionStart">logout</router-link>
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
  methods: {},
};
</script>