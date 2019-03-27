import messages from './messages/config.json';
import routes from './routes/config.json';
import session from './session/config.json';

import Locale from './i18n';
import Messagr from './messages';
import Routr from './routes';
import Templatr from './templates';

export * from './session';

export {
  Locale,
  messages,
  Messagr,
  routes,
  Routr,
  session,
  Templatr,
};
