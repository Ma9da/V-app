import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// project style
import "~/assets/style/index.scss";

// to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss";
import "uno.css";

// font awsome
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// library.add(fas);
// import { fab } from "@fortawesome/free-brands-svg-icons";
// library.add(fab);
// import { far } from "@fortawesome/free-regular-svg-icons";
// library.add(far);
// import { dom } from "@fortawesome/fontawesome-svg-core";
// dom.watch();


const app = createApp(App);



app.use(store);
app.use(router);
// app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
