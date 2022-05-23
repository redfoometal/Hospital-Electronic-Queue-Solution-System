<template>
  <div class='main'>
    <div class='entry-doctor'>
        <div>
          <img src="../assets/hospital.png" alt="calendar">
        </div>
        <div>
            <h2>Запись на прием</h2>
        </div>
        <div>
            <h3>Запишитесь на прием к врачу через наш сайт!</h3>
        </div>
        <div>
            <button>Записаться</button>
        </div>
    </div>
    <div class='cancel-entry-doctor'>
        <div>
          <img src="../assets/return.png" alt="calendar">
        </div>
        <div>
            <h2>Отмена записи</h2>
        </div>
        <div>
            <h3>Изменились планы? Верните талон через наш сайт</h3>
        </div>
        <div>
            <button>Отмена</button>
        </div>
    </div>
    <div class='calendar-entry'>
        <div>
          <img src="../assets/calendar.png" alt="calendar">
        </div>
        <div>
            <h2>График работы</h2>
        </div>
        <div>
            <h3>Нужно узнать график работы врачей? Можно проверить расписание приема</h3>
        </div>
        <div>
            <button>Посмотреть</button>
        </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'Body',
}
</script>

<style scoped>
.main{
    background-color: #31989F;
    width: 100vw;
    height: 83vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
}
.entry-doctor, .cancel-entry-doctor, .calendar-entry{
    background-color: #FFFFFF; 
    width: 25vw;
    height: 25vw;
    border-radius: 40px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
}

h2{
    font-weight: 700;
    font-size: 24px;
    line-height: 42px;
    color: #15A695;
}
h3{
    text-align: center;
    font-family: Verdana, Helvetica, Arial, sans-serif;
    font-size: 14px;
}
img{
    margin: 20px;
}
button{
  background: #62949E;
  border-radius: 34px;
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  border: none;
  margin: 20px;
  width: 150px;
}
button:hover {
    background: #2B8787;
}
button:active {
  transform: translateY(4px);
}

</style>