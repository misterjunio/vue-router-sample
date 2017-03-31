<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">Simple Navigation</div>
      <div class="right">
        <v-ons-toolbar-button modifier="quiet" @click="$router.replace({ name: 'home' })">
          Home
        </v-ons-toolbar-button>
      </div>
    </v-ons-toolbar>
    <v-ons-list>
      <v-ons-list-item modifier="chevron" class="item" v-for="(item, index) in items" :key="item.title" @click="$router.push({ name: 'navigationDetail', params: { detail: item, pageStack: pageStack } })">
        <v-ons-row>
          <v-ons-col width="60px">
            <div class="item-thum"></div>
          </v-ons-col>
          <v-ons-col>
            <header>
              <span class="item-title">{{item.title}}</span>
              <span class="item-label">{{item.label}}</span>
            </header>
            <p class="item-desc">{{item.desc}}</p>
          </v-ons-col>
        </v-ons-row>
      </v-ons-list-item>
    </v-ons-list>
    <p style="margin-top: 5%; text-align:center">
      Let's switch to <v-ons-button modifier="cta" @click="$router.push({ path: '/splitterMain' })">the Splitter</v-ons-button> >>
    </p>
    <p style="margin-top: 5%; text-align:center">
      <v-ons-button modifier="cta" @click="logit()">Test</v-ons-button>
    </p>
  </v-ons-page>
</template>

<script>
  import navigationDetail from './NavigationDetail';
  export default {
    data() {
      return {
        items: [
          {
            title: 'Item Title',
            label: '4 h',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          },
          {
            title: 'Another Item Title',
            label: '6 h',
            desc: 'Ut enim ad minim veniam.'
          },
          {
            title: 'Yet Another Item Title',
            label: '1 day ago',
            desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
          },
          {
            title: 'And One More Item Title',
            label: '3 days ago',
            desc: 'Minim veniam aute irure dolor in eiusmod tempor incididunt ut labore et dolore eu fugiat nulla pariatur.'
          }
        ],
      };
    },
    props: [
      'pageStack'
    ],
    methods: {
      logit() {
        console.log(this.pageStack);
      }
    },
    beforeRouteLeave (to, from, next) {
      if (to.name === 'navigationDetail') {
        this.pageStack.push(navigationDetail);
      }
      next();
    }
  };
</script>
