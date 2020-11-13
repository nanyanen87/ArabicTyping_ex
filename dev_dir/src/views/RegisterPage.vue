<template>
  <div>
    <Header />
    <div>
      <form @submit.prevent="registerText" method="post">
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
        <input type="submit" value="Submit" />
      </form>
    </div>
    <div>
      <p>データベース内容表示</p>
      <button>内容チェック</button>
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
      title: "",
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
  },
};
</script>

<style>
</style>