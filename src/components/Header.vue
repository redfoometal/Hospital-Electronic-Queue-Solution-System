<template>
    <div class='main'>
      <div class='main'>
        <div class="imageLogo">
          <img src="../assets/logo.png" alt="logo">
        </div>
        <div>
          <h1>Система электронной очереди в поликлинику</h1>
        </div>
      </div>
      <div class='main'>
        <div class='btn'>
          <button v-on:click="login">Вход</button>
        </div>
        <div class='btn'>
          <button>Регистрация</button>
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Header',
  methods:{
    ...mapActions([
      'TOGGLE_AUTH_VISIBLE',
    ]),
    login(){
      this.TOGGLE_AUTH_VISIBLE(true);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 42px;
  color: #FFFFFF;
}
.main{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  background-color: #004B53;
}
.imageLogo{
  padding-right: 20px;
}
.btn{
  padding-right: 20px;
}
button{
  background: #35BACC;
  border-radius: 34px;
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  border: none;
}
button:hover {
    background: #2B8787;
}
button:active {
  transform: translateY(4px);
}
</style>
