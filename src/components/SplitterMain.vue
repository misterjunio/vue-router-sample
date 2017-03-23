<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-toolbar-button @click="() => openSide = !openSide">
          <v-ons-icon icon="ion-navicon" size="28px" fixed-width="false"></v-ons-icon>
        </v-ons-toolbar-button>
      </div>
      <div class="center">{{ pageTitle }}</div>
      <div class="right">
        <v-ons-toolbar-button modifier="quiet" @click="$router.replace({ name: 'home' })">
          Home
        </v-ons-toolbar-button>
      </div>
    </v-ons-toolbar>
    <v-ons-splitter>
      <v-ons-splitter-side
        swipeable width="150px" collapse side="left"
        :open="openSide"
        @update="openSide = $event"
      >
        <v-ons-page>
          <v-ons-toolbar modifier="transparent"></v-ons-toolbar>
          <v-ons-list-item class="menu-main" @click="$router.push({ path: '/splitterMain' })">
            <v-ons-icon icon="fa-home"></v-ons-icon>
            Main
          </v-ons-list-item>
          <v-ons-list class="menu-list">
            <v-ons-list-item class="menu-item" @click="openPage('splitterPage1')">
              <v-ons-icon icon="fa-plus"></v-ons-icon>
              New Post
            </v-ons-list-item>
            <v-ons-list-item class="menu-item" @click="openPage('splitterPage2')">
              <v-ons-icon icon="fa-bookmark"></v-ons-icon>
              Bookmark
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
        openSide: false,
        pageTitle: 'Side Menu'
      }
    },
    methods: {
      openPage: function(page) {
        this.pageTitle = page === 'splitterPage1' ? 'Page1' : 'Page2';
        if (this.$route.path === '/splitterMain/' + page) {
          return;
        }
        this.$router.push({ path: '/splitterMain/' + page });
        this.openSide = !this.openSide;
      }
    }
  }
</script>

