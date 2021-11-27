<template>
  <div id="app">
    <Header />
    <Profile />
    <Skills />
    <SkillDetails/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Profile from "./components/Profile.vue";
import Skills from './components/Skills.vue'
import SkillDetails from './components/SkillDetails.vue'
export default {
  name: "App",
  components: {
    Header,
    Profile,
    Skills,
    SkillDetails
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
