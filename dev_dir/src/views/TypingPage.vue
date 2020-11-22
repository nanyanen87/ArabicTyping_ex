<template>
  <div>
    <Header />

    <div class="topWrapper">
      <WaitGame class="upperLayer" @start-game="startGame" v-if="waiting" />
      <div class="middleWrapper" v-if="!waiting">
        <div class="sentenceBox">
          <h1>{{ gameOption.section }}</h1>
          <div>{{ nowSentence }}</div>
        </div>
        <div class="inputBox">
          {{ inputSentence }}
        </div>
        <div class="imgBox">
          <picture>
            <source media="(min-width: 960px)" v-bind:srcset="img.bigger" />
            <img v-bind:src="img.smaller" />
          </picture>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import WaitGame from "../components/WaitGame";
import soundPath from "../assets/sound/blip02.mp3";
export default {
  name: "TypingPage",
  data() {
    return {
      sentenceOrg: [],
      nowSentence: "",
      inputSentence: "",
      score: { startTime: 0, endTime: 0, resultScore: 0 },
      waiting: true,
      img: {
        bigger: require("../assets/img/" +
          this.gameOption.keyboard +
          "key900-300.png"),
        smaller: require("../assets/img/" +
          this.gameOption.keyboard +
          "key600-200.png"),
      },
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
    //関数型コンポーネントにした方が良さげ？
    async startGame() {
      this.waiting = false;
      this.score.startTime = await new Date();
      const missSound = await new Audio(soundPath);
      console.log(this.gameOption.sound);
      if (!this.gameOption.sound) {
        console.log("音量ゼロ");
        missSound.volume = 0;
      }
      let nowCharLocation = 0;
      let nowQuestion = 0;
      this.nowSentence = this.sentenceOrg[nowQuestion];

      let missCounts = 1,
        correctCounts = 0;

      document.addEventListener("keypress", (e) => {
        //error cannot read property '0' of undefined
        if (this.sentenceOrg[nowQuestion][nowCharLocation] === e.key) {
          this.inputSentence += e.key;
          nowCharLocation++;
          correctCounts++;
        } else {
          missCounts++;
          missSound.play();
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

      this.score.resultScore = Math.floor((c / seconds) * 60 * ((m / c) ^ 3));
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
h1 {
  font-size: 15px;
}
.topWrapper {
  position: relative;
}
.middleWrapper {
}
.sentenceBox {
}
.inputBox {
  /* 大きさを固定しないと入力した文字で描画がずれる */
  height: 30px;
}
.imgBox {
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
}
</style>