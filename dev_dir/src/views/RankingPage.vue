<template>
  <div>
    <h1>ランキング</h1>
  </div>
</template>

<script>
export default {
  name:"RankingPage",
  beforeMount:function(){
    //ログイン済でなければ、ログインページにリダイレクト。そしてログイン後のパスを/rankingにしする
    //this.$router.push("/login/ranking")
  }
}
</script>