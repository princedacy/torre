<template>
    <section>
        <div class="container">
            <div class="skills">
                <div class="title">
                    <h5>Skills and interests:</h5>
                </div>
                <div class="skill-panel">
                    <div class="proficiency">
                        <div class='proficiency proficiency__title'>
                            <font-awesome-icon icon="biking" />
                            <h6>Master/Influencer</h6>
                        </div>
                        <div class="skills-list">
                            <div class="skill-item" v-for="(exp, index) in experience.master" :key="index">
                                <span @click="getSkillDetails()">{{exp.name}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="proficiency">
                        <div class='proficiency proficiency__title'>
                            <font-awesome-icon icon="running" />
                            <h6>Expert</h6>
                        </div>
                        <div class="skills-list">
                            <div class="skill-item" v-for="(exp, index) in experience.expert" :key="index">
                                <span @click="getSkillDetails()">{{exp.name}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="proficiency">
                        <div class='proficiency proficiency__title'>
                            <font-awesome-icon icon="running" />
                            <h6>Proficient</h6>
                        </div>
                        <div class="skills-list">
                            <div class="skill-item" v-for="(exp, index) in experience.proficient" :key="index">
                                <span @click="getSkillDetails()">{{exp.name}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="proficiency">
                        <div class='proficiency proficiency__title'>
                            <font-awesome-icon icon="walking" />
                            <h6>Novice</h6>
                        </div>
                        <div class="skills-list">
                            <div class="skill-item" v-for="(exp, index) in experience.novice" :key="index">
                                <span @click="getSkillDetails()">{{exp.name}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="proficiency">
                        <div class='proficiency proficiency__title'>
                            <font-awesome-icon icon="pray" />
                            <h6>No experience, but interested</h6>
                        </div>
                        <div class="skills-list">
                            <div class="skill-item" v-for="(exp, index) in experience.no_experience_interested" :key="index">
                                <span @click="getSkillDetails()">{{exp.name}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: ['experience'],
    data(){
        return{

        }
    },
    mounted(){
        console.log('exp', this.experience)
    },
    methods:{
        /**
         * Fetch user skills
         */
        fetchSkills(){
            this.$http
                .get('https://torre.bio/api/bios/princedacy')
                .then((res)=>{
                    console.log('res', res)
                })
                .catch((err)=>{
                    console.log('err', err)
                })
        },
        /**
         * Get skill details
         */
        getSkillDetails(){
            document.querySelector(".skill-details").style.left = "0";
            document.querySelector(".page-backdrop").style.left = "0";
        }
    }
}
</script>