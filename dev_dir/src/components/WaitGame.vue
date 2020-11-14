<template>
  <div>
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
p {
  color: aliceblue;
  font-weight: bold;
}
</style>