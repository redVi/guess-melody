import Vue from 'vue';
import VueI18n from 'vue-i18n';
import BabelfishFormatter from 'vue-i18n-babelfish';

import en from '@/lang/en.json';
import ru from '@/lang/ru.json';

Vue.use(VueI18n);

const locale = navigator.language;

const formatter = new BabelfishFormatter({
  locale,
  fallbacks: {
    uk: 'ru',
  },
});

const messages = {
  'en-US': en,
  en,
  ru,
};

const i18n = new VueI18n({
  locale,
  formatter,
  messages,
});

export default i18n;
