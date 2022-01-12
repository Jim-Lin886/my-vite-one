import { createApp } from "vue";
import { loadFonts } from "./plugins/webfontloader";
import { router } from "./plugins/route";
import vuetify from "./plugins/vuetify";
import store from "./plugins/vuestore";
import App from "./App.vue";


loadFonts();

var app = createApp(App);
app.use(vuetify);
app.use(router);
app.use(store);
app.mount("#app");
