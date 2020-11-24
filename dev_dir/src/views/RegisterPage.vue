<template>
  <div>
    <Header />
    <div>
      <form>
        <p>
          <label for="">題名</label>
          <input type="text" v-model="title" />
        </p>
        <p>
          <label for="">段落</label>
          <input type="number" v-model="paragraphNumber" />
        </p>
        <p>
          <label for="">文</label>
          <input type="number" v-model="sentenceNumber" />
        </p>
        <p>
          <label for="">文章</label>
          <input type="text" v-model="sentenceText" />
        </p>
        <a class="waves-effect waves-teal btn-flat" @click="registerText"
          >登録</a
        >
      </form>
    </div>
    <div class="checkText">
      確認
      <p>{{ title }}</p>
      <p>{{ sentenceText }}</p>
    </div>
    <div>
      <p>データベース内容表示</p>
      <button @click="getText">内容チェック</button>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  components: {
    Header,
  },
  data() {
    return {
      title: "أَلشَّمْسُ",
      paragraphNumber: 0,
      sentenceNumber: 0,
      sentenceText: "",
    };
  },
  methods: {
    registerText() {
      if (
        this.title === "" ||
        this.paragraphNumber <= 0 ||
        this.sentenceNumber <= 0 ||
        this.sentenceText === ""
      ) {
        alert("入力漏れがあります");
      } else {
        const params = new URLSearchParams();
        params.append("title", this.title);
        params.append("paragraphNumber", this.paragraphNumber);
        params.append("sentenceNumber", this.sentenceNumber);
        params.append("sentenceText", this.sentenceText);
        this.axios
          .post("/controllers/register", params)
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => {
            console.log("エラーです");
            console.log(error);
          });
      }
    },
    getText() {
      this.axios
        .get("/controllers/game", {
          params: {
            gameMode: "bookMode",
            gameSection: this.title,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.sentenceOrg = res.data;
        })
        .catch((error) => {
          console.log("エラーです");
          console.log(error);
        });
    },
  },
};
</script>

<style>
.checkText p {
  font-size: 50px;
}
input {
  text-align: center;
  font-size: 100%;
}
</style>