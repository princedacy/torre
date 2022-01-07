<template>
  <div id="app">
    <Header />
    <Profile :user='user'/>
    <Skills :experience='experience'/>
    <SkillDetails/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Profile from "./components/Profile.vue";
import Skills from './components/Skills.vue'
import SkillDetails from './components/SkillDetails.vue'
import axios from 'axios'
export default {
  name: "App",
  components: {
    Header,
    Profile,
    Skills,
    SkillDetails
  },
  data() {
    return {
      user: {
        id: "",
        name: "",
        picture: "",
      },
      experience: {
        master: [],
        expert: [],
        proficient: [],
        novice: [],
        no_experience_interested: []

      }
    };
  },
  mounted() {
    this.loadProfile();
  },
  methods: {
    /**
     * Fetch user profile 'princedacy'
     * @param {string} $username
     * @returns {Object} user
     */
    async loadProfile() {
      try {
        const res = await axios.get(`https://torre.bio/api/bios/princedacy`);
        console.log("res", res);
        this.user.id = res.data.person.id;
        this.user.name = res.data.person.name;
        this.user.picture = res.data.person.picture;
        this.experience.master = res.data.strengths.filter((exp)=> exp.proficiency === 'master') 
        this.experience.expert = res.data.strengths.filter((exp)=> exp.proficiency === 'expert') 
        this.experience.proficient = res.data.strengths.filter((exp)=> exp.proficiency === 'proficient') 
        this.experience.novice = res.data.strengths.filter((exp)=> exp.proficiency === 'novice') 
        this.experience.no_experience_interested = res.data.strengths.filter((exp)=> exp.proficiency === 'no-experience-interested') 
      } catch (error) {
        return error;
      }
    },
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
  height: 100%;
}
</style>
