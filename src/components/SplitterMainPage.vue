<template>
  <v-ons-page>
    <v-ons-row style="margin-top: 100px; text-align: center;">
      <v-ons-col>
        <p style="color: #999; font-size: 20px;"> Let's switch to <v-ons-button modifier="cta" @click="$router.push({ path: '/navigationMaster' })">the Navigator</v-ons-button> <<</p>
        <hr style="width:20%; margin-bottom:5%">
        <p style="color: #999; font-size: 13px;">Swipe the page right/left to open/close the side menu.</p>
      </v-ons-col>
    </v-ons-row>
  </v-ons-page>
</template>
