import Locale from '../i18n';
import messages from './config.json';

const Messagr = () => {
  const obj = {};
  Object.keys(messages).map((message) => {
    obj[message] = { ...messages[message], ...Locale['en-US'].app.messages[message] };
    return null;
  });
  return obj;
};

export default Messagr;
