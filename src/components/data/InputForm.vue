<template>
  <div class="container">
      <p>The following assume that A is equal to 0 in the cypher index.</p>
      <div class="container">
      <form @submit.prevent="submitForm()">
      <textarea label="originalInput" v-model="enteredData"></textarea>
      <!-- <button @click="encode(enteredData)">Encode</button> --><p>
      <button @click="encode(enteredData, this.inputType='originalInput')">Encode Input Text</button></p>
      <p>This is your input text</p>
      <p v-if="this.$store.state.inputTextFinalArray.length > 0">
      {{ this.$store.state.inputTextFinalArray }}
      </p>
    </form>
    </div>
  <div class="container">
    <form @submit.prevent="submitForm2()">
      <textarea label="firstKey" v-model="firstKey"></textarea>
      <p><button @click="encode(firstKey, this.inputType='firstKey')">Encode Your First Key</button></p>
    </form>
    <p>This is your first key</p>
    <p v-if="this.$store.state.firstKeyFinalArray.length > 0">
      {{ this.$store.state.firstKeyFinalArray }}
    </p>
    </div>
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
    inputType: '',
    firstKey: ''
    };
  },
  methods: {
    submitForm() {
      console.log(this.enteredData)
    },
    submitForm2() {
      console.log(this.firstKey)
    },
    encode(text, inputType){
      console.log('Encode is running')
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
