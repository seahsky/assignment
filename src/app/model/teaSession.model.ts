export class TeaSessionModel {
	constructor(
		private TeaSessionId: number,
		private Name: string,
		private Desc: string,
		private TreatDate: string,
		private CutoffDate: string,
		private MenuImage: string,
		private IsPrivate: boolean,
		private Password: string,
		private PrivateCode: string
	) { }

	get teaSessionId() {
		return this.TeaSessionId;
	}
	get name() {
		return this.Name;
	}
	get desc() {
		return this.Desc;
	}
	get treatDate() {
		return this.TreatDate;
	}
	get cutoffDate() {
		return this.CutoffDate;
	}
	get menuImage() {
		return this.MenuImage;
	}
	get isPrivate() {
		return this.IsPrivate;
	}
	get password() {
		return this.Password;
	}
	get privateCode() {
		return this.PrivateCode;
	}
}
