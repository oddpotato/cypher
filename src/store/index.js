import { createStore } from 'vuex'

export default createStore({
    state: {
        the_alphabet_array: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        formattedData: '',
        final_array: [],
        sanitized_text_array: [],
        correct_indices: '',
        regex: /[^A-Za-z]/g
    },
    mutations: {
        encode(state, text) {
            console.log('I promise this is running')
            console.log(text)
            console.log(state.sanitized_text_array + 'Well this is before');
            state.sanitized_text_array = text.replace(state.regex, "").toLowerCase().split("");
            console.log(state.sanitized_text_array);
            for (const element of state.sanitized_text_array) {
                console.log("Now it's going through some stuff1");
                for (const item of state.the_alphabet_array) {
                    console.log("Now it's going through some stuff2");
                    if (element === item) {
                        console.log("It's a match!");
                        state.final_array.push(state.the_alphabet_array.indexOf(item));
                        console.log(`${element} is at ${state.the_alphabet_array.indexOf(item)}`)
                    }
                }
            }
            state.correct_indices = state.final_array.map(x => x + 1).join(" ")
            console.log(state.correct_indices)

        }
    },
    actions: {

    },
    modules: {}
})