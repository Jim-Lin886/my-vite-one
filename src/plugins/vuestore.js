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
      setTimes: 1,
    };
  },
  getters: {
    //this.$store.getters.msgReaded

    msgReaded: (state) => state.msgQueue.filter((todo) => todo.read),
  },
  mutations: {
    //store.commit([emunMutation.UPDATE_COUNT])

    [emunMutation.UPDATE_COUNT](state, payload) {
      state.count += payload;
    },
    [emunMutation.UPDATE_MSG_INFO](state, payload) {
      state.msgInfo = payload;
    },
    [emunMutation.UPDATE_MSG_QUEUE](state, payload) {
      state.msgQueue.push(payload);
    },
  },
  actions: {
    //store.dispatch(emunMutation.SET_MSG_INFO)
    //context = {commit, dispatch. getters, state, rootGetters, rootState}

    [emunMutation.SET_COUNT](context, payload) {
      context.state.count = payload;
    },
    [emunMutation.ACTION_COUNT]({ dispatch }, payload) {
      dispatch(emunMutation.SET_COUNT, payload);
    },
    [emunMutation.SET_MSG_INFO]({ commit }, payload) {
      commit(emunMutation.UPDATE_MSG_INFO, payload);
    },
    [emunMutation.SET_MSG_QUEUE]({ state }, payload) {
      state.msgQueue = payload;
    },
    clearAll({ dispatch }) {
      dispatch("asyncClearAll").then((res) => {
        console.log("clearAll_then", res);
      }).catch((error) => {
        console.log("clearAll_catch", error);
      });
    },
    asyncClearAll({ state, commit, dispatch }) {
      var times = state.setTimes;

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          state.setTimes += 1;
          if (times % 2 == 0) {
            state.count = 0;
            commit(emunMutation.UPDATE_MSG_INFO, "");
            dispatch(emunMutation.SET_MSG_QUEUE, []);
            alert("asyncA_resolve");
            resolve("asyncA_resolve");
          } else {
            alert("asyncA_reject");
            reject("asyncA_reject");
          }
        }, 1000);
      });
    },
  },
});

export default store;
