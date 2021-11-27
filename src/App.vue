<template>
  <div id="app">
    <Header />
    <Profile />
    <Skills />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Profile from "./components/Profile.vue";
import Skills from './components/Skills.vue'
export default {
  name: "App",
  components: {
    Header,
    Profile,
    Skills
  },
};
</script>

<style lang='scss'>
@import "@/assets/scss/style.scss";
#app {
  font-family: "Mulish", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $torre-light-grey;
  background-color: $torre-dark-grey;
  height: 100vh;
}
</style>
