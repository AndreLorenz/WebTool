import template from './generator.html';

class GeneratorController {

  constructor($scope, $state, generatorService) {
    'ngInject';
    this.$scope = $scope;
    this.$state = $state;
    this.generatorService = generatorService;
    this.config = { webservice: true };
  }

  save(config) {
    this.$state.transitionTo('preview-generator');
  }

}

export default {
  template: template,
  controller: GeneratorController
};