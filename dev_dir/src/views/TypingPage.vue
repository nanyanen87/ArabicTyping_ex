<template>
  <div>
    <h1>typing screen</h1>
    <div>
      <!-- どっちがいいんやろ -->
      <!-- <h2>{{$route.params.bookTitle}}</h2> -->
      <!-- <h2>{{bookTitle}}</h2> -->
      <div class="sentenceBox">
        <div>{{gameSection}}</div>
      </div>
      <p>keyboard:{{keyboard}}</p>
      <button @click="countScore">カウント:{{score}}</button>
      <button @click="endGame">終了</button>
    </div>
  </div>
</template>

<script>
export default {
  name:"TypingPage",
  data(){
    return{
      sentence:[],
      score: 0
    }
  },
  props:{
    gameMode   : String,
    gameSection: String,
    keyboard   : String, 
  },
  beforeMount:function(){
    this.axios.get('/controllers/game',{
      params:{
        gameSection:this.$route.query.gameSection
      }
    }).
      then(res => {
        console.log(res.data)
        this.sentence = ["hoge","piyo","fuga"];
      }).
      catch(error => {
        console.log("エラーです");        
        console.log(error)
      })
  },

  methods:{
    countScore(){
      this.score++
      let nowSetenceNum = this.score;//本来はタイピング終わった文章の数
      if(this.sentence.length===nowSetenceNum){
        this.endGame();
      }
    },
    endGame(){
      const URL = `/score?resultScore=${this.score}&gameMode=${this.$route.query.gameMode}&gameSection=${this.$route.query.gameSection}`
      this.$router.push(URL)
    }
    
  }
}
</script>