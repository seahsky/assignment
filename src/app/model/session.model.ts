export class SessionModel {
	constructor(
		private name: string,
		private description: string,
		private treatDate: Date,
		private cutoffDate: Date,
		private menuImage: string,
		private isPrivate: boolean,
		private createdBy: number,
		private password?: string,
		private privateCode?: string,
		private sessionId?: number
	) { }

	get TeaSessionId() {
		return this.sessionId;
	}
	get Name() {
		return this.name;
	}
	get Description() {
		return this.description;
	}
	get TreatDate() {
		return this.treatDate;
	}
	get CutoffDate() {
		return this.cutoffDate;
	}
	get MenuImage() {
		return this.menuImage;
	}
	get IsPrivate() {
		return this.isPrivate;
	}
	get Password() {
		return this.password;
	}
	get PrivateCode() {
		return this.privateCode;
	}
	get CreatedBy() {
		return this.createdBy;
	}

	set CreatedBy(createdBy: number) {
		this.createdBy = createdBy;
	}
}
