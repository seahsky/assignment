import { Adapter } from './../interface/adapter';
import { UserModel } from './user.model';
export class SessionModel {
	constructor(
		public sessionId: number,
		public name: string,
		public description: string,
		public treatDate: Date,
		public cutoffDate: Date,
		public menuImage: string,
		public isPrivate: boolean,
		public createdBy: UserModel,
		public password: string,
		public privateCode: string
	) { }
}

export class SessionAdapter implements Adapter<SessionModel> {
	adapt(item: any): SessionModel {
		return new SessionModel(
			item.sessionId,
			item.name,
			item.description,
			item.treatDate,
			item.cutoffDate,
			item.menuImage,
			item.isPrivate,
			item.createdBy,
			item.password,
			item.privateCode
		);
	}
}
