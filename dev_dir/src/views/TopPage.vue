<template>
  <div class="topWrapper">
    <Header class="header" />
    <div class="main">
      <h1>arabic typing</h1>
      <div class="modeSelectWrapper">
        <div class="modeSelectBox">
          <div
            class="collapsibleBox"
            v-on:mouseleave="mouseLeave('bookMode')"
            v-on:mouseenter="mouseEnter('bookMode')"
          >
            <ul class="collapsible">
              <li>
                <div class="collapsible-header" id="bookMode">長文モード</div>
                <div class="collapsible-body">
                  <p v-on:click="startGame" class="button">أَلشَّمْسُ</p>
                  <p class="button">title1</p>
                  <p class="button">title2</p>
                  <p v-on:click="startGame" class="button">example</p>
                  <!-- <p v-on:click="startGame" class="button"></p> -->
                </div>
              </li>
            </ul>
          </div>
          <div
            class="collapsibleBox"
            v-on:mouseleave="mouseLeave('wordMode')"
            v-on:mouseenter="mouseEnter('wordMode')"
          >
            <ul class="collapsible">
              <li>
                <div class="collapsible-header" id="wordMode">単語モード</div>
                <div class="collapsible-body">
                  <p class="button">未実装です</p>
                  <p>easy</p>
                  <p>normal</p>
                  <p>hard</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="gameOptionWrapper">
        <div class="keyboard">
          <p @click="setKeyboard" id="mac">>mac</p>
          <p @click="setKeyboard" id="ibm">ibm</p>
        </div>
        <div class="sound">
          <p @click="switchSound" class="isSound">Sound:OFF</p>
        </div>
        <div>
          <p>ようこそ {{ userName }}</p>
        </div>
      </div>
    </div>
    <Footer class="footer" />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
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
  mounted: function () {
    //materializeのjs初期化
    M.AutoInit();
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".collapsible");
      var instance = M.Collapsible.init(elems, {
        accordion: true,
      });
      instance;
    });
    this.session();
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    mouseEnter(modeName) {
      document.getElementById(`${modeName}`).click();
      this.gameMode = modeName;
      console.log("over");
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
    },
    switchSound(e) {
      this.gameSound = !this.gameSound;
      if (this.gameSound === false) {
        e.target.textContent = "Sound:OFF";
      } else if (this.gameSound === true) {
        e.target.textContent = "Sound:ON";
      }
    },
    session() {
      this.axios
        .get("/controllers/session")
        .then((res) => {
          if (res.data.session) {
            this.userName = res.data.userName;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.topWrapper {
  margin: 0 auto;
  height: 100%;
  display: grid;
  grid-template:
    "header" 50px
    "main" 1fr
    "footer" 50px;
}
.header {
  grid-area: header;
}
.main {
  grid-area: main;
}
.footer {
  grid-area: footer;
}
.modeSelectWrapper {
  display: flex;
  justify-content: center;
}
.gameOptionWrapper {
  padding-top: 72px;
}
.modeSelectBox {
  position: fixed;
  display: flex;
  justify-content: center;
}
.collapsibleBox {
  width: 20%;
  min-width: 200px;
  text-align: center;
}
.collapsible-body {
  background-color: white;
  z-index: 1;
}
.keyboard {
  display: flex;
  justify-content: center;
}
.keyboard p {
  padding: 0 5px;
  margin: 10px;
  cursor: pointer;
}
.button {
  cursor: pointer;
  border-bottom: thin solid #fd9f30;
  font-size: 25px;
  font-weight: bolder;
}
.sound {
  display: flex;
  justify-content: center;
}
.isSound {
  cursor: pointer;
  border: thin solid #fd9f30;
  border-radius: 10px;
  width: 120px;
}
</style>