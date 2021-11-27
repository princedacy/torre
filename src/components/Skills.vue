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
                            <div class="skill-item">
                                <span @click="getSkillDetails()">Software development</span>
                            </div>
                            <div class="skill-item">
                                <span @click="getSkillDetails()">Team management</span>
                            </div>
                        </div>
                    </div>
                    <div class="proficiency">
                        <div class='proficiency proficiency__title'>
                            <font-awesome-icon icon="running" />
                            <h6>Proficient</h6>
                        </div>
                        <div class="skills-list">
                            <div class="skill-item">
                                <span @click="getSkillDetails()">Unit testing</span>
                            </div>
                            <div class="skill-item">
                                <span @click="getSkillDetails()">Data analysis</span>
                            </div>
                            <div class="skill-item">
                                <span @click="getSkillDetails()">Functional programming</span>
                            </div>
                            <div class="skill-item">
                                <span @click="getSkillDetails()">Reactive programming</span>
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
    data(){
        return{

        }
    },
    mounted(){
        this.fetchSkills()
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
        }
    }
}
</script>