<template>
<header><custom-header></custom-header></header>
        <div class="container">
<body>
<router-view />
  </body>
        </div> 
<custom-footer></custom-footer>
</template>

<script>

export default {
  name: 'App',
  // components: {
  //   StandardButton
  //   // HelloWorld,
  // },
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
