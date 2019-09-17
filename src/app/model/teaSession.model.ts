export class TeaSessionModel {
	constructor(
		private TeaSessionId: number,
		private Name: string,
		private Desc: string,
		private TreatDate: string,
		private CutoffDate: string,
		private MenuImageName: string,
		private IsPrivate: boolean,
		private Password: string,
		private PrivateCode: string,
		private CreatedBy: number
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
	get menuImageName() {
		return this.MenuImageName;
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
	get createdBy() {
		return this.CreatedBy;
	}

	set createdBy(createdBy: number) {
		this.CreatedBy = createdBy;
	}
}
