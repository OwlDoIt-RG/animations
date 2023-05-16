import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
//import { createPinia } from "pinia";
import router from "./router";

gsap.registerPlugin(CSSPlugin);

const app = createApp(App);
//const pinia = createPinia();

//app.use(pinia);
app.use(router);

app.mount("#app");
