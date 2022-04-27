export default {
    install(app, options) {
        console.log(app, options);
        app.config.globalProperties.$translate = (key) => {
            return `-- ${key} --`
        }
        app.provide('i18n', options)
    }
};