<template>
  <div class="loader">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.loader{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 8px solid lightgray;
  border-top: 8px solid lightblue;
  animation: spin 2s linear infinite;
}
@keyframes spin{
  0%{ transform: rotate(0deg);}
  100% { transform: rotate(360deg) ;}
}
</style>
