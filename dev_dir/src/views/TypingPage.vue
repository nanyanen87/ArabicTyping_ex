<template>
  <div>
    <Header />
    <h1>typing screen</h1>
    <div class="topWrapper">
      <!-- どっちがいいんやろ -->
      <!-- <h2>{{$route.params.bookTitle}}</h2> -->
      <!-- <h2>{{bookTitle}}</h2> -->
      <div class="sentenceBox">
        <div>{{ gameSection }}</div>
      </div>
      <div>
        <WaitGame class="upperLayer" @start-game="startGame" v-if="waiting" />
      </div>
      <div>
        {{ sentence[0] }}
        <!-- コンポーネントにして間にカウントダウンページを挟む？ -->
      </div>
      <p>keyboard:{{ keyboard }}</p>
      <button @click="endGame">終了</button>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import WaitGame from "../components/WaitGame";
export default {
  name: "TypingPage",
  data() {
    return {
      sentence: [],
      score: { startTime: 0, endTime: 0, resultScore: 0 },
      waiting: true,
    };
  },
  props: {
    gameMode: String,
    gameSection: String,
    keyboard: String,
  },
  beforeMount: function () {
    this.axios
      .get("/controllers/game", {
        params: {
          gameSection: this.$route.query.gameSection,
        },
      })
      .then((res) => {
        console.log(res.data);
        this.sentence = ["hoge", "piyo", "fuga"];
      })
      .catch((error) => {
        console.log("エラーです");
        console.log(error);
      });
  },
  components: {
    Header,
    WaitGame,
  },
  methods: {
    startGame() {
      this.waiting = false;
      //タイマースタート
      this.score.startTime = new Date();
      // キー入力待ち受け

      document.addEventListener("keypress", (e) => {
        console.log(e.key);
        //タイピング入力処理
        //問題文配列のlength === nowSentenceNum ! endGame()
      });
    },
    endGame() {
      this.score.endTime = new Date();
      this.score.resultScore = this.score.endTime - this.score.startTime;
      const URL = `/score?resultScore=${this.score.resultScore}&gameMode=${this.$route.query.gameMode}&gameSection=${this.$route.query.gameSection}`;
      this.$router.push(URL);
    },
  },
};
</script>

<style scoped>
.topWrapper {
  position: relative;
}
.upperLayer {
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: aqua;
  /* opacity: 0.7; */
  height: 400px;
  width: 400px;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  z-index: 1;
}
</style>