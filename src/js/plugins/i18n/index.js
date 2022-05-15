import { createI18n } from 'vue-i18n';
import zh from './config/zh';
import en from './config/en';
const I18n = createI18n({
    locale: 'zh',
    messages: {
        zh,
        en,
    }
});

export const $t = I18n.global.t;

export default I18n;