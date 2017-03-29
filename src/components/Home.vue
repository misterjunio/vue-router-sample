<template>
  <transition name="fade">
    <v-ons-page>
      <v-ons-toolbar>
        <div class="center">Home</div>
        </div>
      </v-ons-toolbar>
      <div class="content">
        <v-ons-row id="home-tabs">
          <v-ons-col>
            <v-ons-button modifier="cta" class="home-button" @click="goTo('/navigationMain')">Explore Navigator</v-ons-button>
          </v-ons-col>
          <v-ons-col>
            <v-ons-button modifier="cta" class="home-button" @click="goTo('/splitterMain')">Explore Splitter</v-ons-button>
          </v-ons-col>
        </v-ons-row>
        <router-view></router-view>
      </div>
    </v-ons-page>
  </transition>
</template>

<script>
  export default {
    methods: {
      goTo: function(page) {
        this.$router.push(page);
      }
    }
  }
</script>