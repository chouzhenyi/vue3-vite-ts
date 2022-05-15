import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import I18n from '@/js/plugins/i18n'

import {
    Button,
    Sidebar,
    SidebarItem
} from 'vant';

const app = createApp(App);
app.use(router);
app.use(I18n);
app.use(Button)
app.use(Sidebar);
app.use(SidebarItem)

app.mount('#app');
