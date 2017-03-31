<template>
  <transition name="slide">
    <v-ons-navigator :page-stack="pageStack">
      <router-view :page-stack="pageStack"></router-view>
    </v-ons-navigator>
  </transition>
</template>

<script>
  import navigationMaster from './NavigationMaster';
  export default {
    data() {
      return {
        pageStack: [navigationMaster]
      };
    }
  }
</script>
