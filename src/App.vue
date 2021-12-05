<template>
<header><custom-header></custom-header></header>
<body>
  <div><img alt="Picture of a typewriter" src="./assets/Typewriter.png"></div>
  <input-form></input-form>
  </body>
<custom-footer></custom-footer>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
  },
}
</script>,

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');
body{
  background-color: #f8eddf;
}
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}

</style>
