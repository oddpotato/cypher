<template>
<custom-header></custom-header>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <header></header>
  <form @submit.prevent="submitUserInput(newUserInput)">
    <input type="text" v-model="newUserInput">
    <button type="submit">Submit Your Entry</button>
  </form>
  <p>
    {{ userInput }}
  </p>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CustomHeader from './components/styling/CustomHeader.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    CustomHeader
  },
  data() {
    return {
      userInput: '',
      cypherOne: '',

    }
  },
  methods: {
    submitUserInput(newUserInput){
      console.log(newUserInput);
      console.log(this.userInput);
      this.userInput = newUserInput;
      console.log(this.userInput);
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
