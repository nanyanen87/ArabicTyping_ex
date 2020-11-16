<template>
  <div>
    <Header />
    <h1>ログイン画面</h1>
    <div>
      <form @submit.prevent="checkForm" method="post">
        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="(error,key) in errors" v-bind:key="key">{{ error }}</li>
          </ul>
        </p>
        <p>
          <label for="email">email:</label>
          <input type="email" id="email" v-model="email"/>
        </p>
        <p>
          <label for="password">password:</label>
          <input type="password" id="password" v-model="password"/>
        </p>
        <p>
          <input type="submit" value="Submit">
        </p>
      </form>
      <div>
        {{email}}
      </div>
      <div>
        <button @click="guestLogin">ゲストログイン</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "LoginPage",
  data() {
    return {
      email: "example@gmail.com",
      password: "guestNo1",
      errors: [],
    };
  },
  props: {
    nextPage: String,
    gameResultData: Object,
  },
  components: {
    Header,
  },
  methods: {
    checkForm() {
      this.errors = [];
      if (this.email === "") {
        this.errors.push("email is required.");
        //バリデーション随時追加する
      } else {
        const params = new URLSearchParams();
        params.append("email", this.email);
        params.append("password", this.password);
        this.axios
          .post("/controllers/login", params)
          .then((res) => {
            //falseが返ってきたら、遷移しない
            console.log(res);
            //todo リザルトデータをクエリに追加する。index.jsも変えないと
            const URL = this.$route.params.nextPage;
            this.$router.push(URL);
          })
          .catch((error) => {
            console.log("エラーです");
            console.log(error);
          });
      }
    },
    guestLogin() {
      this.email = "example@gmail.com";
      this.password = "guestNo1";
      this.checkForm();
    },
  },
};
</script>