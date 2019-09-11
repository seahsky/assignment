export class UserModel {
	constructor(
		private UserId: number,
		private Username: string,
		private Password: string,
		private Enabled: boolean,
		private LastLogin: Date,
		private IsAdmin: boolean,
		private Token: string
	) { }

	get userId() {
		return this.UserId;
	}
	get username() {
		return this.Username;
	}
	get password() {
		return this.Password;
	}
	get enabled() {
		return this.Enabled;
	}
	get lastLogin() {
		return this.LastLogin;
	}
	get isAdmin() {
		return this.IsAdmin;
	}
	get token() {
		return this.Token;
	}
}
