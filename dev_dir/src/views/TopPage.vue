<template>
  <div>
    <Header />
    <h1>arabic typing</h1>
    <div class="modeSelectWrapper">
      <div>
        <ul class="collapsible">
          <li>
            <div class="collapsible-header">
              <i class="material-icons">filter_drama</i>First
            </div>
            <div class="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">
              <i class="material-icons">place</i>Second
            </div>
            <div class="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">
              <i class="material-icons">whatshot</i>Third
            </div>
            <div class="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="bookMode modeBox">
        <p
          v-show="isMouseOver.bookMode"
          v-on:mouseenter="mouseEnter('bookMode')"
        >
          長文モード
        </p>
        <div
          v-show="!isMouseOver.bookMode"
          v-on:mouseleave="mouseLeave('bookMode')"
        >
          <p v-on:click="startGame" class="button">タイトル１</p>
          <p v-on:click="startGame" class="button">タイトル２</p>
          <p v-on:click="startGame" class="button">タイトル３</p>
        </div>
      </div>
      <div class="bookMode modeBox">
        <p
          v-show="isMouseOver.wordMode"
          v-on:mouseenter="mouseEnter('wordMode')"
        >
          単語モード
        </p>
        <div
          v-show="!isMouseOver.wordMode"
          v-on:mouseleave="mouseLeave('wordMode')"
        >
          <p v-on:click="startGame" class="button">easy</p>
          <p v-on:click="startGame" class="button">normal</p>
          <p v-on:click="startGame" class="button">hard</p>
        </div>
      </div>
    </div>
    <div class="keyboard">
      <p @click="setKeyboard" class="button" id="mac">>mac</p>
      <p @click="setKeyboard" class="button" id="ibm">ibm</p>
    </div>
    <div>ようこそ {{ userName }}</div>
  </div>
</template>

<script>
import Header from "../components/Header";
import M from "materialize-css";
export default {
  name: "TopPage",
  data() {
    return {
      isMouseOver: { bookMode: true, wordMode: true },
      keyboard: "mac",
      gameMode: "bookMode",
      gameSection: "",
      userName: "",
    };
  },
  beforeMount: function () {
    //session確認
    this.axios
      .get("/controllers/session")
      .then((res) => {
        this.userName = res.data.userName;
        //ここでheaderの中身を変更する？
      })
      .catch((error) => {
        console.log(error);
      });
  },
  mounted: function () {
    M.AutoInit();
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".collapsible");
      var instance = M.Collapsible.init(elems, {
        accordion: true,
      });
      instance;
    });
  },
  components: {
    Header,
  },
  methods: {
    mouseEnter(mode) {
      this.isMouseOver[mode] = false;
      this.gameMode = mode;
    },
    mouseLeave(mode) {
      this.isMouseOver[mode] = true;
      this.gameMode = "";
    },
    startGame(e) {
      let keyboard = this.keyboard;
      let gameMode = this.gameMode;
      //テキストが日本語か英語かでmouseLeave反応しないことがある、これが原因か？
      let gameSection = e.target.textContent;
      this.$router.push({
        name: "TypingPage",
        query: {
          gameMode: gameMode,
          gameSection: gameSection,
          keyboard: keyboard,
        },
      });
    },
    setKeyboard(e) {
      const mac = document.getElementById("mac");
      const ibm = document.getElementById("ibm");
      this.keyboard = e.target.id;
      let elem = document.getElementById(this.keyboard);
      elem.innerText = ">" + this.keyboard;
      if (this.keyboard === "mac") {
        ibm.innerText = "ibm";
      } else {
        mac.innerText = "mac";
      }
      console.log(this.keyboard);
    },
  },
};
</script>

<style>
.modeSelectWrapper {
  display: flex;
  justify-content: center;
}
.modeBox {
  display: inline-block;
  padding: 10px;
  margin: 5px;
}
.modeBox div p {
  background-color: #fd9f30;
  border-radius: 6px;
  color: white;
}
.keyboard p {
  display: inline-block;
  padding: 0 5px;
}
.button {
  cursor: pointer;
}
</style>