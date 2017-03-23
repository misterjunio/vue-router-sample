<template id="main">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">Home</div>
      </div>
    </v-ons-toolbar>
    <div class="content">
      <router-link to="/navigationMaster">Explore Navigator</router-link>
      <router-link to="/splitterMain">Explore Splitter</router-link>
      <router-view></router-view>
    </div>
  </v-ons-page>
</template>

<script>
  export default{
  };
</script>
