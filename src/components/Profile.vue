<template>
  <section>
    <div class="container">
      <div class="bio">
        <div class="avatar">
          <img
            :src="user.picture"
            :alt="user.name"
            :title="user.name"
            srcset=""
          />
        </div>
        <div class="names">
          <h5>{{user.name}}</h5>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props:['user']
};
</script>