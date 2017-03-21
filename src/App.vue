<template>
  <v-ons-page>
    <div class="content">
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
    </div>
    <router-view></router-view>
  </v-ons-page>
</template>
<script>
  export default{
    data() {
      return {
        title: 'My app'
      };
    },
    methods: {
      alert() {
        this.$ons.notification.alert('This is an Onsen UI alert notification test.');
      }
    }
  };
</script>
