import Vue from 'vue';
import VueI18n from 'vue-i18n';

import en from '../lang/en.json';
import ru from '../lang/ru.json';

Vue.use(VueI18n);

const messages = {
  'en-US': en,
  en,
  ru,
};

const i18n = new VueI18n({
  locale: navigator.language,
  messages,
  fallbackLocale: 'en-US',
});

export default i18n;
