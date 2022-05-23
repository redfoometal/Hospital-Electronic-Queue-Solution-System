<template>
  <div class="main">
  </div>
</template>

<script>
export default {
    name: 'ShadowModal',
}
</script>

<style scoped>
.main{
    position: fixed;
    z-index: auto;
    width: 100%; 
    height: 100%; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4);
}
</style>