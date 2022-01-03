<template>
  <!-- <v-img :src="logo" class="my-3" contain height="200" /> -->
  <div class="text-center">
      {{msg}}
    <v-pagination v-model="page" :length="4" rounded="circle"></v-pagination>
  </div>
</template>

<script>
import logo from "../assets/logo.svg";
export default {
  name: "Home",
  data: () => ({
    msg: "hello world",
  }),
};
</script>

<style scoped></style>
