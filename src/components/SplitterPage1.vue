<template>
  <div>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-toolbar-button>
          <v-ons-icon icon="ion-navicon" size="28px" fixed-width="false"></v-ons-icon>
        </v-ons-toolbar-button>
      </div>
      <div class="center">Page 1</div>
      <div class="right">
        <v-ons-toolbar-button modifier="quiet">
          Main
        </v-ons-toolbar-button>
      </div>
    </v-ons-toolbar>

    <v-ons-row style="margin-top: 100px; text-align: center;">
      <v-ons-col>
        <v-ons-button modifier="light" @click="myLog">
          Toggle Menu
        </v-ons-button>
        <p style="color: #999; font-size: 13px;">Click "Toggle Menu" to close/open menu,<br> You can also swipe the page left/right.</p>
      </v-ons-col>
    </v-ons-row>
  </div>
</template>

<script>
  export default {
    name: 'page1',
    methods: {
      myLog() {
        console.log(this.$parent);
      }
    }
  }
</script>
