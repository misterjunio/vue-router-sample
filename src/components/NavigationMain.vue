<template>
  <transition name="slide">
    <v-ons-navigator :page-stack="pageStack" @postpop="$router.go(-1)">
      <router-view>
        <component :is="page" v-for="page in pageStack" :key="page" :page-stack="pageStack"></component>
      </router-view>
    </v-ons-navigator>
  </transition>
</template>

<script>
  import navigationMaster from './NavigationMaster';
  export default {
    data() {
      return {
        next: null,
        pageStack: [navigationMaster]
      };
    }
  }
</script>
