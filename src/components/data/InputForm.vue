<template>
  <div class="container">
    <div class="container">
    {{ this.$store.state.the_alphabet_array }}
    </div>
      <form @submit.prevent="submitForm()">
      <textarea label="OG Text" v-model="enteredData"></textarea>
      <!-- <button @click="encode(enteredData)">Encode</button> -->
      <button @click="encode2(enteredData, this.inputType='originalInput')">Encode2</button>
      <p>This button turns your original text into the relevant indices if you assume A = 1</p>
    </form>
    <!-- {{enteredData}} -->
  </div>
  <div class="container">
    <p v-if="this.$store.state.inputTextFinalArray.length > 0">
      {{ this.$store.state.inputTextFinalArray }}
    </p>
  </div>
  <div class="container">
    {{ this.$store.state.correct_indices }}
  </div>
</template>  

<script>

export default {
  data() {
    return { 
    enteredData: '',
    inputType: ''
    };
  },
  methods: {
    submitForm() {
      console.log(this.enteredData)
    },
    encode2(text, inputType){
      const payload = {text: text, inputType: inputType}
      this.$store.dispatch('encode', payload)
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
</style>
