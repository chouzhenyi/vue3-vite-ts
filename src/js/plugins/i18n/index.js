import { createI18n } from 'vue-i18n';
import zh from './config/zh';
import en from './config/en';
const I18n = createI18n({
    locale: 'en',
    messages: {
        zh,
        en,
    }
});

export default I18n;