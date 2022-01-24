<template>
  <v-layout>
    <v-app-bar
      absolute
      color="#fcb69f"
      dark
      shrink-on-scroll
      scroll-target="#scrolling-techniques-2"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>

      <v-app-bar-title>{{ $t("label.title") }}</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item prepend-icon="mdi-home" title="Home"></v-list-item>

          <v-list-item prepend-icon="mdi-account" title="Account"></v-list-item>
        </v-list-item-group>
      </v-list> 
    </v-navigation-drawer>

  
    

    <v-main>
      <v-sheet
        id="scrolling-techniques-2"
        class="overflow-y-auto"

      >
        <v-container style="height: 100%">
          <language-chooser></language-chooser>
          <div>
            <!-- <v-img :src="logo" class="my-3" contain height="200" /> -->
            <div>
              <div>靜態route-link</div>
              <router-link to="/">Go to Home</router-link>
              <span> / </span>
              <router-link to="/hellow">Go to About</router-link>
              <span> / </span>
              <router-link to="/MsgCenter">Go to Msg Center</router-link>
              <v-btn color="success" icon="mdi-domain" size="x-large"
                >XXX</v-btn
              >
            </div>
            <tab-bar></tab-bar>

            <div class="text-center">
              {{ msg }}
              <v-pagination
                v-model="page"
                :length="4"
                rounded="circle"
              ></v-pagination>
            </div>
          </div>
        </v-container>
      </v-sheet>
    </v-main>
  </v-layout>
</template>

<script>
import TabBar from "../components/TabBar.vue";
import LanguageChooser from "./LanguageChooer.vue"

export default {
  name: "Home",
  components: {
    TabBar,
    LanguageChooser,
  },
  data: () => ({
    msg: "hello world",
    drawer: false,
  }),
};
</script>

<style scoped></style>
