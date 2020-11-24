<template>
  <div>
    <div class="topWrapper">
      <div class="waitScreen" v-if="waiting">
        <p>スペースキーでスタート</p>
        <p>escでリスタート</p>
        <router-link to="/" class="link">タイトルへ</router-link>
      </div>
      <div class="middleWrapper" v-if="!waiting">
        <div class="sentenceBox">
          <h1>{{ gameOption.section }}</h1>
          <p class="arabicText">{{ nowSentence }}</p>
        </div>
        <div class="inputBox">
          <p>
            {{ inputSentence }}
          </p>
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
    this.getText();
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
  mounted: function () {
    this.waitGame();
    this.retryGame();
  },
  components: {},
  methods: {
    //関数型コンポーネントにした方が良さげ？
    waitGame() {
      document.addEventListener("keydown", (e) => {
        if (e.code === "Space") {
          console.log("start");
          this.startGame();
        }
      });
    },
    getText() {
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
        if (this.sentenceOrg[nowQuestion][nowCharLocation] === " ") {
          this.inputSentence += " ";
          nowCharLocation++;
        }
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
    retryGame() {
      document.addEventListener("keydown", (e) => {
        if (e.code === "Escape") {
          console.log(location.host);
          location.reload();
          // this.$router.push({
          //   name: "TypingPage",
          //   query: {
          //     gameMode: this.gameOption.mode,
          //     gameSection: this.gameOption.section,
          //     keyboard: this.gameOption.keyboard,
          //     gameSound: this.gameOption.sound,
          //   },
          // });
        }
      });
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 35px;
}
.arabicText {
  font-size: 30px;
  border-bottom: thin solid #fd9f30;
}
.topWrapper {
  position: relative;
}
.waitScreen {
  padding-top: 20px;
}
.waitScreen p:first-child {
  font-weight: bolder;
  font-size: 20px;
}

.inputBox p {
  /* 大きさを固定しないと入力した文字で描画がずれる */
  font-size: 30px;
  height: 30px;
}
.link {
  color: #fd9f30;
}
</style>