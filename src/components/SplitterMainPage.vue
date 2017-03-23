<template>
  <v-ons-page>
    <v-ons-row style="margin-top: 100px; text-align: center;">
      <v-ons-col>
        <p style="color: #999; font-size: 20px;"> Let's <router-link to="/navigationMaster">explore the Navigator</router-link> from here!</p>
        <hr style="width:20%; margin-bottom:5%">
        <v-ons-button modifier="light">
          Toggle Menu
        </v-ons-button>
        <p style="color: #999; font-size: 13px;">Click "Toggle Menu" to open/close the menu.<br> You can also swipe the page right/left.</p>
      </v-ons-col>
    </v-ons-row>
  </v-ons-page>
</template>

<script>
  export default {
  }
</script>
