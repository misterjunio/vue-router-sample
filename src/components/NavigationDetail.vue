<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button @click.prevent="$router.go(-1)">Back</v-ons-back-button>
      </div>
      <div class="center">Details</div>
    </v-ons-toolbar>
    <v-ons-list modifier="inset" style="margin-top: 10px">
      <v-ons-list-item class="item">
        <v-ons-row>
          <v-ons-col width="60px">
            <div class="item-thum"></div>
          </v-ons-col>
          <v-ons-col>
            <header>
              <span class="item-title">{{ detail.title }}</span>
              <span class="item-label">{{ detail.label }}</span>
            </header>
            <p class="item-desc">{{ detail.desc }}</p>
          </v-ons-col>
        </v-ons-row>
      </v-ons-list-item>
      <v-ons-list-item modifier="chevron" tappable>
        <v-ons-icon icon="ion-chatboxes" fixed-width="true" style="color: #ccc"></v-ons-icon>
        Add a note
      </v-ons-list-item>
    </v-ons-list>
    <v-ons-list style="margin-top: 10px">
      <v-ons-list-item class="item" v-for="i in [1,2,3]" :key="i">
        <header>
          <span class="item-title">Lorem ipsum dolor sit amet</span>
        </header>
        <p class="item-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </v-ons-list-item>
    </v-ons-list>
    <p style="margin-top: 5%; text-align:center">
      <v-ons-button modifier="cta" @click="logit()">Test</v-ons-button>
    </p>
  </v-ons-page>
</template>

<script>
  export default {
    props: [
      'detail',
      'pageStack'
    ],
    methods: {
      logit() {
        console.log(this.pageStack);
      }
    },
    beforeRouteLeave (to, from, next) {
      this.pageStack.pop();
      next();
    }
  }
</script>
