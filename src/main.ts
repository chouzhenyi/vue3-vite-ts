import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import toast from '@/js/plugins/toast.js';
import I18n from '@/js/plugins/i18n'
import {
    Button,
    Locale,
    Sidebar,
    SidebarItem
} from 'vant';
import enUS from 'vant/es/locale/lang/en-US'
import zhCN from 'vant/es/locale/lang/zh-CN'

const app = createApp(App);
app.use(toast, {
    name: '赵铁柱'
});
app.use(router);
app.use(I18n);
app.use(Button)
app.use(Sidebar);
app.use(SidebarItem)

app.mount('#app');
