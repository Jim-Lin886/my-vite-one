<template>
  <h1>$store.count:{{ count }}</h1>
  <h1>use mapState</h1>
  <h2>countState:{{ countState }}</h2>
  <h2>msgInfoState:{{ msgInfoState }}</h2>
  <h2>msgQueueState:{{ msgQueueState }}</h2>
  <h1>use mapGetters</h1>
  <h2>msgReadedGetter:{{ msgReadedGetter }}</h2>
  <h1>Mutation</h1>
  <v-btn size="x-small" color="secondary" @click="btn_updateCount">
    Update Count
  </v-btn>
  <v-btn size="small" color="primary" @click="btn_updateMsgInfo">
    Update MsgInfo
  </v-btn>
  <v-btn color="warning" @click="btn_updateMsgQueue"> Update MsgQueue </v-btn>
  <h1>Action</h1>
  <v-btn color="error" size="large" @click="btn_clearAll"> Clear All </v-btn>
  <v-btn color="primary" @click="btn_actionCount"> async Clear All </v-btn>
  <h1>TBD</h1>
  
  <v-btn rounded="lg" color="primary"> TBD </v-btn>
  <v-btn :rounded="0" color="primary"> TBD </v-btn>
  <v-btn rounded="pill" color="primary"> TBD </v-btn>
</template>

<script>
import { ref, reactive } from "vue";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import emunMutation from "../plugins/vuestore-mutation-type";

export default {
  name: "MsgCenter",
  props: {
    collectionName: String,
  },
  setup(props) {
    const msgInfoNumber = ref(0);
    const msgQueueNumber = ref(0);
    const book = reactive({ title: "Vue 3 Guide" });

    // expose to template
    return {
      msgInfoNumber,
      msgQueueNumber,
      book,
    };
  },
  computed: {
    ...mapState({
      countState: "count",
      msgInfoState: "msgInfo",
      msgQueueState: "msgQueue",
    }),
    ...mapGetters({
      msgReadedGetter: "msgReaded",
    }),
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    ...mapMutations({
      updateCountMutation: emunMutation.UPDATE_COUNT,
      updateMsgInfoMutation: emunMutation.UPDATE_MSG_INFO,
      updateMsgQueueMutation: emunMutation.UPDATE_MSG_QUEUE,
    }),
    ...mapActions({
      setCountAction: emunMutation.ACTION_COUNT,
      setMsgInfoAction: emunMutation.SET_MSG_INFO,
      setMsgQueueAction: emunMutation.SET_MSG_QUEUE,
    }),
    btn_updateCount() {
      this.updateCountMutation(10);
    },
    btn_updateMsgInfo() {
      this.msgInfoNumber++;
      console.log(this.msgInfoNumber);
      let str = ["H", "A", "P", "P", "Y"];
      var newStr = this.msgInfoState + str[this.msgInfoNumber % 5];
      this.updateMsgInfoMutation(newStr);
    },
    btn_updateMsgQueue() {
      this.msgQueueNumber++;
      console.log(this.msgQueueNumber);
      let str = ["H", "A", "P", "P", "Y"];
      var newStr = str[this.msgQueueNumber % 5];
      console.log(newStr);
      this.updateMsgQueueMutation({
        name: newStr + newStr + newStr,
        read: this.msgQueueNumber % 3 == 0,
      });
    },
    btn_clearAll() {
      // this.setCountAction(0);
      // this.setMsgInfoAction("");
      // this.setMsgQueueAction([]);
      
      this.$store.dispatch("clearAll");

    },
    btn_actionCount() {
      this.$store.dispatch("asyncA");
    },
  },
};
</script>

<style></style>
