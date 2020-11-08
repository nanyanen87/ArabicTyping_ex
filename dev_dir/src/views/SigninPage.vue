<template>
  <div>
    <Header />
    <h1>サインイン画面</h1>
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
        {{password}}/{{email}}
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
      email: "",
      password: "",
      errors: [],
      user: { session: true },
    };
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
          .post("/controllers/signin", params)
          .then((res) => {
            alert(res.data);
            console.log(res.data);
            //ここで場合わけ。ログインできなかったら警告文、できたらログインマーク消す
            // sessionで管理したい
          })
          .catch((error) => {
            console.log("エラーです");
            console.log(error);
          });
      }
    },
  },
};
</script>