<template>
  <div id="app">
    <header>
      <h1>Star Wars Catalog</h1>
    </header>
    <main>
      <section class="charter-list">
        <ul>
            <Loader  v-if="loading"/>
          <li v-else
          v-for="char in charters" :key="char.name">
          {{char.name}}
          </li>
        </ul>
        <span>
          <button>&lt;</button>
          <p>/</p>
          <button>&gt;</button>
        </span>
      </section>
      <section class="charter-info">
        <Loader  />
      </section>
    </main>
  </div>
</template>

<script>
import Loader from "./components/Loader.vue";

export default {
  name: "App",
  components: {
    Loader,
  },
  data(){
    return{
      loading: true, 
    }
  },
  async mounted(){
    await this.$store.dispatch('fetchCharters')
    this.loading = flase 
  },
  computed:{
    charters(){
      return this.$$store.$state.charters
    }
  }
};
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=Source+Sans+Pro:wght@700&display=swap');
#app{
  height: 100%;
  background-color: #535556;
}
header{
  background-image: url('~@/assets/header.png') ;
  height: 30vh;
  background-size: cover;
}
h1{
  font-family: 'Source Sans Pro', sans-serif;
  color: yellow;
}
html, body{
  font-family: 'Roboto', sans-serif;
  margin: 0px;
  height: 100%;
}
main{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
}
span{
  display: flex;
  background-color: black;
}
section{
  background-color: #E1DEDE;
}
</style>
