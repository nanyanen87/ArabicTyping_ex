<template>
  <div>
    <Header />
    <h1>typing screen</h1>
    <div class="topWrapper">
      <!-- どっちがいいんやろ -->
      <!-- <h2>{{$route.params.bookTitle}}</h2> -->
      <!-- <h2>{{bookTitle}}</h2> -->
      <div class="sentenceBox">
        <div>{{ nowSentence }}</div>
      </div>
      <div>
        <WaitGame class="upperLayer" @start-game="startGame" v-if="waiting" />
      </div>
      <div class="inputBox">
        {{ inputSentence }}
        <!-- コンポーネントにして間にカウントダウンページを挟む？ -->
      </div>
      <img src="../assets/mackey.png" />
      <p>keyboard:{{ gameOption.keyboard }}</p>
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
      sentenceOrg: [],
      nowSentence: "",
      inputSentence: "",
      score: { startTime: 0, endTime: 0, resultScore: 0 },
      waiting: true,
    };
  },
  props: {
    gameOption: Object,
  },
  beforeMount: function () {
    this.axios
      .get("/controllers/game", {
        params: {
          gameMode: this.gameOption.mode,
          gameSection: this.gameOption.section,
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
  components: {
    Header,
    WaitGame,
  },
  methods: {
    startGame() {
      this.waiting = false;
      this.score.startTime = new Date();

      let nowCharLocation = 0;
      let nowQuestion = 0;
      this.nowSentence = this.sentenceOrg[nowQuestion];

      let missCounts = 1,
        correctCounts = 0;

      document.addEventListener("keypress", (e) => {
        //error 0が定義されていない
        if (this.sentenceOrg[nowQuestion][nowCharLocation] === e.key) {
          this.inputSentence += e.key;
          nowCharLocation++;
          correctCounts++;
        } else {
          missCounts++;
        }
        if (this.sentenceOrg[nowQuestion].length === nowCharLocation) {
          nowQuestion++;
          this.nowSentence = this.sentenceOrg[nowQuestion];
          this.inputSentence = "";
          nowCharLocation = 0;
        }
        if (this.sentenceOrg.length === nowQuestion) {
          this.endGame(missCounts, correctCounts);
        }
      });
    },
    endGame(m, c) {
      this.score.endTime = new Date();
      const seconds = (this.score.endTime - this.score.startTime) / 1000;
      // const K = 1;
      this.score.resultScore = (c / seconds) * 60 * ((m / c) ^ 3);
      this.$router.push({
        name: "ScorePage",
        query: {
          resultScore: this.score.resultScore,
          gameMode: this.gameOption.mode,
          gameSection: this.gameOption.section,
          keyboard: this.gameOption.keyboard,
        },
      });
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
  background-color: #e33e2b;
  /* opacity: 0.7; */
  height: 400px;
  width: 400px;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  z-index: 1;
}
</style>