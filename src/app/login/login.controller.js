import template from './login.html';

class LoginController {

  constructor(authService) {
    'ngInject';
    this.authService = authService;
    this.github = {};
  }

  login(user){
    return this.authService.signin(user);
  }

}

export default {
  template: template,
  controller: LoginController
};