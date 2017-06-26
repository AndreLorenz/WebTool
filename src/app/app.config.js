/**
 * Application configuration.
 */
export default function (ENVIRONNEMENT, $compileProvider, $locationProvider, $httpProvider) {
  'ngInject';
  $locationProvider.html5Mode(true);
  $compileProvider.debugInfoEnabled(ENVIRONNEMENT !== 'prod' && ENVIRONNEMENT !== 'production');
  $httpProvider.interceptors.push(($location, $q, $injector) => {
    return {
      request: function (config) {
        config.headers = config.headers || {};
        const auth = $injector.get('authService');
        if (auth.getToken()) {
          config.headers['x-access-token'] = auth.getToken();
        }

        return config;
      },

      responseError: function (response) {
        if (response.status === 401 || response.status === 403) {
          $location.path('/signin');
        }

        return $q.reject(response);
      }
    }
  });
}
