<template id="main">
  <v-ons-page>
    <div class="content">
      <v-ons-tabbar position="auto"
        :tabs="tabs"
        :visible="true"
        :index="activeIndex"
        @update="activeIndex = $event"
      >
      </v-ons-tabbar>
    </div>
  </v-ons-page>
</template>

<script>
  import navigationMaster from './components/NavigationMaster';
  import splitterMain from './components/SplitterMain';
  export default{
    data() {
      return {
        activeIndex: 0,
        tabs: [
          {
            icon: this.md() ? null : 'ion-home',
            label: 'Simple Navigation',
            page: navigationMaster
          },
          {
            icon: this.md() ? null : 'ion-star',
            label: 'Main',
            page: splitterMain
          }
        ]
      };
    },
    methods: {
      md() {
        return this.$ons.platform.isAndroid();
      }
    }
  };
</script>
