<template>
  <v-ons-page>
    <v-ons-splitter>
      <v-ons-splitter-side
        swipeable width="150px" collapse side="left"
        :open="openSide"
        @update="openSide = $event"
      >
        <v-ons-page>
          <v-ons-toolbar modifier="transparent"></v-ons-toolbar>
          <v-ons-list class="menu-list">
            <v-ons-list-item class="menu-item" @click="openPage('splitterPage1')">
              <v-ons-icon icon="fa-plus"></v-ons-icon>
              New Post
            </v-ons-list-item>
            <v-ons-list-item class="menu-item" @click="openPage('splitterPage2')">
              <v-ons-icon icon="fa-bookmark"></v-ons-icon>
              Bookmark
            </v-ons-list-item>
            <v-ons-list-item class="menu-item" @click="openPage('splitterPage1')">
              <v-ons-icon icon="fa-twitter"></v-ons-icon>
              Official Twitter
            </v-ons-list-item>
          </v-ons-list>
          <br>
          <v-ons-list class="bottom-menu-list">
            <v-ons-list-item class="bottom-menu-item" @click="openPage('splitterPage2')">
              Settings
              <div class="notification menu-notification">3</div>
            </v-ons-list-item>
            <v-ons-list-item class="bottom-menu-item" @click="openPage('splitterPage1')">
              Help
            </v-ons-list-item>
            <v-ons-list-item class="bottom-menu-item" @click="openPage('splitterPage2')">
              Send feedback
            </v-ons-list-item>
          </v-ons-list>
        </v-ons-page>
      </v-ons-splitter-side>
      <v-ons-splitter-content>
        <router-view></router-view>
      </v-ons-splitter-content>
    </v-ons-splitter>
  </v-ons-page>
</template>

<script>
export default {
  name: 'splitterMain',
  data() {
    return {
      openSide: false
    }
  },
  methods: {
    openPage: function(page) {
      if (this.$route.path === '/' + page) {
        return;
      }
      this.$router.push({ name: page });
      this.openSide = !this.openSide;
    }
  }
}
</script>

