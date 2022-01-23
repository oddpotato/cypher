import { createStore } from 'vuex'

export default createStore({
    state: {
        the_alphabet_array: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        formattedData: '',
        sanitized_text_array: [],
        correct_indices: '',
        regex: /[^A-Za-z]/g,
        final_array: [],
        inputTextFinalArray: [],
    },
    actions: {
        encode(context, payload) {
            context.commit('encode', payload)
        }
    },
    mutations: {
        encode(state, { text, inputType }) {
            // This takes the payload from the input form and converts it into things vuex can read
            localStorage.setItem('text', text);
            localStorage.setItem('inputType', inputType);
            // This sanitizes the input and converts it to an array
            state.sanitized_text_array = text.replace(state.regex, "").toLowerCase().split("");
            // This loops through the new array
            for (const element of state.sanitized_text_array) {
                // This loops through the alphabet array
                for (const item of state.the_alphabet_array) {
                    // If an element in the alphabet array matches and element in the new array
                    // it appends the element index onto the appropriate array
                    if (element === item) {
                        console.log("It's a match!");
                        if (inputType == 'originalInput') {
                            state.inputTextFinalArray.push(state.the_alphabet_array.indexOf(item));
                            console.log(`${element} is at ${state.the_alphabet_array.indexOf(item)}`)
                        } else {
                            state.final_array.push(state.the_alphabet_array.indexOf(item));
                        }
                    }
                }
            }
            state.correct_indices = state.final_array.map(x => x + 1).join(" ")
            console.log(state.correct_indices)

        }
    },
    modules: {}
})