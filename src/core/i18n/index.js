import enUS from './locale/en-US.json';

const Locale = {
  'en-US': enUS,
};

export const getI18n = i18n => Locale[i18n];

export default Locale;
