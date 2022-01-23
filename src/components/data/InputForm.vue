<template>
  <div class="container">
      <form @submit.prevent="submitForm()">
      <textarea label="OG Text" v-model="enteredData"></textarea>
      <button @click="encode(enteredData)">Encode</button>
      <p>This button turns your original text into the relevant indices if you assume A = 1</p>
    </form>
    <!-- {{enteredData}} -->
  </div>
  <div class="container">
    {{ correct_indices }}
  </div>
</template>  

<script>
export default {
  data() {
    return { 
    enteredData: '',
    formattedData: '',
    the_alphabet_array: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    final_array: [],
    sanitized_text_array: [],
    correct_indices: ''
    };
  },
  methods: {
    submitForm() {
      console.log(this.enteredData)
    },
    encode(text) {
    console.log('I promise this is running')
    console.log(text)
    const regex = /[^A-Za-z]/g;
    console.log(this.sanitized_text_array + 'Well this is before');
    this.sanitized_text_array = text.replace(regex,"").toLowerCase().split("");
    console.log(this.sanitized_text_array);
    for (const element of this.sanitized_text_array){
      console.log("Now it's going through some stuff1");
    for (const item of this.the_alphabet_array){
      console.log("Now it's going through some stuff2");
      if(element === item){
        console.log("It's a match!");
      this.final_array.push(this.the_alphabet_array.indexOf(item));
      console.log(`${element} is at ${this.the_alphabet_array.indexOf(item)}`)}    
    }}
    this.correct_indices = this.final_array.map(x => x + 1).join(" ")
    console.log(this.correct_indices)
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
