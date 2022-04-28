import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import toast from '@/js/plugins/toast.js';
import I18n from '@/js/plugins/i18n'

const app = createApp(App);
app.use(toast, {
    name: '赵铁柱'
});
app.use(router);
app.use(I18n);

app.mount('#app');
