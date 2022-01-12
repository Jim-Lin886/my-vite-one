<template>
  <!-- <v-img :src="logo" class="my-3" contain height="200" /> -->
  <div>
    <div>靜態route-link</div>
    <router-link to="/">Go to Home</router-link>
    <span> / </span>
    <router-link to="/hellow">Go to About</router-link>
    <span> / </span>
    <router-link to="/MsgCenter">Go to Msg Center</router-link>
    <v-btn
        color="success"
        icon="mdi-domain"
        size="x-large"
    >XXX</v-btn>
  </div>
  <tab-bar></tab-bar>

  <div class="text-center">
    {{ msg }}
    <v-pagination v-model="page" :length="4" rounded="circle"></v-pagination>
  </div>
</template>

<script>
import TabBar from "../components/TabBar.vue";

export default {
  name: "Home",
  components: {
    TabBar,
  },
  data: () => ({
    msg: "hello world",
  }),
};
</script>

<style scoped></style>
