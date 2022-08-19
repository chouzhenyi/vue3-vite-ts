import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import I18n from '@/js/plugins/i18n'

import {
    Button,
    Sidebar,
    SidebarItem,
    NavBar,
    Icon,
    PullRefresh,
    ActionBar,
    ActionBarIcon,
    ActionBarButton,
    ConfigProvider,
    Grid,
    GridItem,
    Tabbar,
    TabbarItem,
} from 'vant';

const app = createApp(App);
app.use(router);
app.use(I18n);
app.use(Button)
app.use(Sidebar);
app.use(SidebarItem)
app.use(NavBar)
app.use(Icon);
app.use(PullRefresh);
app.use(ActionBar);
app.use(ActionBarIcon);
app.use(ActionBarButton);
app.use(ConfigProvider);
app.use(Grid);
app.use(GridItem);
app.use(Tabbar);
app.use(TabbarItem);

app.mount('#app');
