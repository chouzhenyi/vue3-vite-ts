import { createApp } from "vue";
import { createPinia } from "pinia";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "amfe-flexible";
import App from "./App.vue";
import router from "./router";
import "@/assets/main.less";
import TopHeader from "@/components/common/TopHeader.vue";

const app = createApp(App);
app.component("TopHeader", TopHeader);
app.use(createPinia());
app.use(router);
app.use(Antd);

app.mount("#app");
