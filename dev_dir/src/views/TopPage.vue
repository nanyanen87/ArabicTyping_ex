<template>
  <div>
    <Header />
    <h1>arabic typing</h1>
    <div class="modeSelectWrapper">
      <div class="collapsibleBox" v-on:mouseleave="mouseLeave('bookMode')">
        <ul class="collapsible">
          <li>
            <div
              class="collapsible-header"
              id="bookMode"
              v-on:mouseenter="mouseEnter('bookMode', $event)"
            >
              長文モード
            </div>
            <div class="collapsible-body">
              <p v-on:click="startGame" class="button">タイトル１</p>
              <p v-on:click="startGame" class="button">タイトル２</p>
              <p v-on:click="startGame" class="button">タイトル３</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="collapsibleBox" v-on:mouseleave="mouseLeave('wordMode')">
        <ul class="collapsible">
          <li>
            <div
              class="collapsible-header"
              id="wordMode"
              v-on:mouseenter="mouseEnter('wordMode', $event)"
            >
              単語モード
            </div>
            <div class="collapsible-body">
              <p>easy</p>
              <p>normal</p>
              <p>hard</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="keyboard">
      <p @click="setKeyboard" class="button" id="mac">>mac</p>
      <p @click="setKeyboard" class="button" id="ibm">ibm</p>
    </div>
    <div>
      <a @click="switchSound" class="btn-flat sound">Sound:OFF</a>
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
      keyboard: "mac",
      gameMode: "bookMode",
      gameSection: "",
      gameSound: false,
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
    mouseEnter(mode, event) {
      event.target.click();
      this.gameMode = mode;
      console.log(this.gameMode);
    },
    mouseLeave(modeName) {
      document.getElementById(`${modeName}`).click();
      console.log("leave");
    },
    startGame(e) {
      this.gameSection = e.target.textContent;
      this.$router.push({
        name: "TypingPage",
        query: {
          gameMode: this.gameMode,
          gameSection: this.gameSection,
          keyboard: this.keyboard,
          gameSound: this.gameSound,
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
    switchSound(e) {
      this.gameSound = !this.gameSound;
      if (this.gameSound === false) {
        e.target.textContent = "Sound:OFF";
      } else if (this.gameSound === true) {
        e.target.textContent = "Sound:ON";
      }
    },
  },
};
</script>

<style>
.modeSelectWrapper {
  display: flex;
  justify-content: center;
}
.collapsibleBox {
  width: 20%;
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