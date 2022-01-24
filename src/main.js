import { createApp } from "vue";
import { loadFonts } from "./plugins/webfontloader";
import { router } from "./plugins/route";
import vuetify from "./plugins/vuetify";
import store from "./plugins/vuestore";
import i18n from "./plugins/i18n"
import App from "./App.vue";


loadFonts();

var app = createApp(App);
app.use(vuetify);
app.use(router);
app.use(store);
app.use(i18n);
app.mount("#app");
