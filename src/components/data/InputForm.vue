<template>
    <form @submit.prevent="submitUserInput(newUserInput)">
    <textarea v-model="newUserInput" rows="3" columns="5"></textarea><p></p>
    <standard-button type="submit">Submit Text To Convert</standard-button>
    </form>
  <p>
    {{ userInput }}
  </p>
</template>

<script>
export default({
    provide(){
        return {
        makeCypherKeys: this.userInput 
        }
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
})
</script>

<style scoped>

</style>