// Server routes paths
export const SERVER_URLS = {
  URL_LOGIN: '/user/login',
  URL_REGISTER: '/user/register',
  URL_PASSWORD_RESET: '/user/password-reset',
  URL_PASSWORD_RESET_CONFIRM: '/user/password-reset/confirm/[uidb64]/[token]',
  URL_USER_CHANGE_EMAIL: '/user/change-email',
  URL_USER_CHANGE_PASSWORD: '/user/change-password',
  URL_USER_PROFILE: '/user/profile',

  // home
  URL_LANDING: '/',
  URL_HOME: '/home',
  URL_BUSINESS: '/business',
  URL_CLIENTS: '/clients',
  URL_EMPLOYEES: '/employees',
  URL_PROVIDERS: '/providers',
};

export default SERVER_URLS;
