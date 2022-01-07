<template>
  <section>
    <div class="container">
      <div class="skill-details">
        <div class="skill-header">
          <div class="close">
            <font-awesome-icon icon="times" @click="closeDetails()" />
          </div>
          <div class="skill-title">
            <h3>Software development</h3>
          </div>
        </div>
        <div class="experience">
          <div class="qualifications">
            <div class="single-quali">
              <p>
                Proficiency: <font-awesome-icon icon="biking" />
                <span> Master/influencer</span>
              </p>
              <p>Recommendations: <span>7</span></p>
            </div>
          </div>
          <div class="work-experience">
            <h6 class="title">Alexander's related experiences:</h6>
            <div class="work-card">
              <h6 class="position">Founding Member and Tech Lead</h6>
              <span>The Executive Company</span>
              <span>Feb 2015 - Dec 2017</span>
            </div>
            <div class="work-card">
              <h6 class="position">Senior Software Engineer</h6>
              <span>Testing Inc.</span>
              <span>Mar 2010 - Jan 2015</span>
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
export default {
  methods: {
    closeDetails() {
      document.querySelector(".skill-details").style.left = "105%";
      document.querySelector(".page-backdrop").style.left = "105%";
    },
  },
};
</script>