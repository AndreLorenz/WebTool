export class AuthService {

	constructor($rootScope, $http, $localStorage) {
		'ngInject';
		this.$rootScope = $rootScope;
		this.$http = $http;
		this.$localStorage = $localStorage;
	}

	getToken() {
		return this.$localStorage.token;
	}

	setToken(token) {
		this.$localStorage.token = token;
	}

	getUser() {
		return this.$localStorage.currentUser;
	}

	setUser(currentUser) {
		this.$localStorage.currentUser = currentUser;
	}

	signin(data) {
		this.$http({
			method: 'POST',
			url: `http://localhost:8784/signin`,
			params: data
		}).then(res => {
			if (res.data.err) return console.log(res.data.err.message);
			this.setToken(res.data.token);
			this.setUser(res.data.user);
		}).catch((err) => {
			console.log(err);
		});
	}

	logout() {
		delete this.$localStorage.token;
		$q.when();
	}

}