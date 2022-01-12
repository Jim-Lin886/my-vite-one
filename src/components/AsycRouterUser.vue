<template>
  <tab-bar></tab-bar>
  <h1>UserID: {{ $route.params.xxId }}</h1>

  <pre>{{ userInfo }}</pre>
</template>

<script>
import TabBar from "../components/TabBar.vue";
export default {
  name: "AsyRouterUser",
  components: {
    TabBar,
  },
  data() {
    return {
      userInfo: {},
    };
  },
  computed: {
    userId() {
      console.log("AsycRouterUser - computed - userId:", this.$route.params);
      return this.$route.params.xxId;
    },
  },
  watch: {
    userId: async function (val) {
      console.log("AsycRouterUser - watch - userId:", val);
      this.userInfo = await this.fetchUserInfo(val);
    },
  },
  methods: {
    async fetchUserInfo(id) {
      console.log("fetchUserInfo - id:", id);
      return await fetch("https://jsonplaceholder.typicode.com/users/" + id)
        .then((response) => response.json())
        .then((json) => json);
    },
  },
  async created() {
    console.log("AsycRouterUser - async created - this.userId", this.userId);
    this.userInfo = await this.fetchUserInfo(this.userId);
  },
};
</script>
