<template>
    <standard-button class="flat">
      <router-link to="/about">Click here to learn more</router-link>
      </standard-button>
    <router-view />
      <div><img alt="Picture of a typewriter" src="../assets/Typewriter.png"></div>
  <input-form></input-form>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods: {

    }
}
</script>

<style scoped>

</style>