import {
  Locale,
  Messagr,
  routes,
  session,
} from '.';

const defaultState = {
  i18n: Locale[session.user.locale],
  messages: Messagr,
  routes: routes.routes,
  session,
};

export default function (state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
