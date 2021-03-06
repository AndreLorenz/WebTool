/**
 * Application route definition.
 */
export default function ($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('login', {
      url: '/login',
      component: 'login'
    })
    .state('generator', {
      url: '/generator',
      component: 'generator'
    })
    .state('preview-generator', {
      url: '/preview-generator',
      component: 'previewGenerator'
    });

  $urlRouterProvider.otherwise('/');

}
