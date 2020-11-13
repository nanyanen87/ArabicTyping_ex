<template>
  <div>
    <form>
      <p>
        <label for="">題名</label>
        <input type="text" v-model="title">
      </p>
      <p>
        <label for="">段落</label>
        <input type="number" v-model="paragraphNumber">
      </p>
      <p>
        <label for="">文</label>
        <input type="number" v-model="sentenceNumber">
      </p>
      <p>
        <label for="">文章</label>
        <input type="text" v-model="sentenceText">
      </p>
    </form>
    <input type="text">
    <input type="text">
    <input type="text">
    <input type="text">
  </div>
</template>

<script>
export default {
  data(){
    return{
      title:"",
      paragraphNumber:0,
      sentenceNumber:0,
      sentenceText:"",
    }

  }
}
</script>

<style>

</style>