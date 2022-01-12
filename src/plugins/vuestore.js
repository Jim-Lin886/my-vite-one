import { createStore } from "vuex";
import emunMutation from "./vuestore-mutation-type";

const store = createStore({
  state() {
    //this.$store.state.count
    return {
      count: 0,
      msgInfo: "Hellow World!!!",
      msgQueue: [
        { name: "AAA", read: false },
        { name: "BBB", read: true },
        { name: "CCC", read: false },
      ],
    };
  },
  getters: {
    //this.$store.getters.msgReaded
    msgReaded: (state) => state.msgQueue.filter((todo) => todo.read),

    // msgReaded: (state) => state.msgQueue,
  },
  mutations: {
    //store.commit([emunMutation.UPDATE_COUNT])
    [emunMutation.UPDATE_COUNT](state, payload) {
      state.count+= payload;
    },
    [emunMutation.UPDATE_MSG_INFO](state, payload) {
      state.msgInfo = payload;
    },
    [emunMutation.UPDATE_MSG_QUEUE](state, payload) {
      state.msgQueue.push(payload);
    },
  },
});

export default store;
