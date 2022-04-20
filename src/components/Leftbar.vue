<template>
    <div class="main">
        <div>
            <img src="../assets/leftbarpic.png" alt="">
        </div>
        <div>
            <button><img src="../assets/calendar.png" alt="">Расписание приема врачей</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Leftbar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
    background: #1A8B93;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 83vh;
}
button{
    display: flex;
    align-items: center;
    background: #1A8B93;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    border: none;
}
button:hover {
    background: #2B8787;
}
button:active {
  transform: translateY(4px);
}
</style>
