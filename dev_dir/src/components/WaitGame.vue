<template>
  <div>
    <p>待機画面です</p>
    <p>スペースキーでスタート</p>
  </div>
</template>

<script>
export default {
  name: "WaitGame",
  mounted: function () {
    document.addEventListener("keypress", (e) => {
      if (e.code === "Space") {
        console.log("game start");
        this.$emit("start-game");
      }
    });
  },
};
</script>

<style scoped>
</style>