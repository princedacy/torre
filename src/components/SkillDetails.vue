<template>
  <section>
    <div class="container">
      <div class="skill-details">
        <div class="skill-header">
          <div class="close">
            <font-awesome-icon icon="times" @click="closeDetails()" />
          </div>
          <div class="skill-title">
            <h3>{{skill.name}}</h3>
          </div>
        </div>
        <div class="experience">
          <div class="qualifications">
            <div class="single-quali">
              <p>
                Proficiency: <font-awesome-icon icon="biking" />
                <span> {{skill.proficiency}}</span>
              </p>
              <p>Recommendations: <span>{{skill.recommendations}}</span></p>
            </div>
          </div>
          <div class="work-experience">
            <h6 class="title">{{user.name}}'s related experiences:</h6>
            <div class="work-card" v-for="(job, index) in jobs" :key="index">
              <h6 class="position">{{job.name}}</h6>
              <span v-for="(pos, index) in job.organizations" :key="index">{{pos.name}}</span>
              <span><span v-if="job.fromMonth || job.fromYear">{{job.fromMonth}} {{job.fromYear}}</span> - <span v-if="job.toMonth || job.toYear">{{job.toMonth}} {{job.toYear}}</span><span v-else>current</span></span>
            </div>
          </div>
          <div class="people">
            <h6 title="title">Other people with this skill:</h6>
            <div class="person">
              <div class="left-side">
                <img src="@/assets/images/aiony-haust-3TLl_97HNJo-unsplash.jpg" alt="" class="avatar" />
                <div class="details">
                  <span class="names"
                    >Jane Doe <img src="@/assets/images/verified_tick.svg"
                  /></span>
                  <span class="position">Web developer</span>
                </div>
              </div>
              <div class="right-side">
                <button><font-awesome-icon icon="eye" /></button>
              </div>
            </div>
            <div class="person">
              <div class="left-side">
                <img src="@/assets/images/jurica-koletic-7YVZYZeITc8-unsplash.jpg" alt="" class="avatar" />
                <div class="details">
                  <span class="names"
                    >John Doe <img src="@/assets/images/verified_tick.svg"
                  /></span>
                  <span class="position">Web developer</span>
                </div>
              </div>
              <div class="right-side">
                <button><font-awesome-icon icon="eye" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page-backdrop">
      </div>
    </div>
  </section>
</template>
<script>
import {EventBus} from '@/event-bus'
export default {
  props: ['user', 'experience', 'jobs'],
  data(){
    return {
      skill: {}
    }
  },
  mounted(){
    EventBus.$on('opened', payload => {
      this.skill = payload
    })
  },
  methods: {
    closeDetails() {
      document.querySelector(".skill-details").style.left = "105%";
      document.querySelector(".page-backdrop").style.left = "105%";
    },
  },
};
</script>