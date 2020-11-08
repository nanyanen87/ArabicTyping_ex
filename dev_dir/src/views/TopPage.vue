<template>
  <div>
    <Header />
    <h1>arabic typing</h1>
    <div class="modeSelectBox">
      <div class="bookMode modeBox">
        <p v-show="isMouseOver" v-on:mouseenter="mouseEnter('bookMode')">
          長文モード
        </p>
        <div v-show="!isMouseOver" v-on:mouseleave="mouseLeave()">
          <p v-on:click="startGame" class="button">タイトル１</p>
          <p v-on:click="startGame" class="button">タイトル２</p>
          <p v-on:click="startGame" class="button">タイトル３</p>
        </div>
      </div>
      <div class="wordMode modeBox">
        <p>単語モード</p>
        <div v-show="false">
          <p v-on:click="startGame" class="button">hard</p>
          <p v-on:click="startGame" class="button">normal</p>
          <p v-on:click="startGame" class="button">eazy</p>
        </div>
      </div>
      <div class="keyboard">
        <p @click="setKeyboard" class="button">mac</p>
        <p @click="setKeyboard" class="button">ibm</p>
      </div>
    </div>
    <div>ようこそ {{ userName }}</div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "TopPage",
  data() {
    return {
      isMouseOver: true,
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
  components: {
    Header,
  },
  methods: {
    mouseEnter(mode) {
      this.isMouseOver = false;
      this.gameMode = mode;
    },
    mouseLeave() {
      this.isMouseOver = true;
      this.gameMode = "";
    },
    startGame(e) {
      let keyboard = this.keyboard;
      let gameMode = this.gameMode;
      let gameSection = e.target.textContent;

      let URL = `/typing?gameMode=${gameMode}&gameSection=${gameSection}&keyboard=${keyboard}`;
      this.$router.push(URL);
    },
    setKeyboard(e) {
      this.keyboard = e.target.textContent;
      //todo 描画で選択したものがわかるようにする
      //e.target.textContent = >>文字列
      console.log(this.keyboard);
    },
  },
};
</script>

<style>
.modeBox {
  display: inline-block;
  padding: 5px;
}
.keyboard p {
  display: inline-block;
  padding: 0 5px;
}
.button {
  cursor: pointer;
}
</style>