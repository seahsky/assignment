import { SessionModel } from './session.model';
import { Adapter } from './../interface/adapter';
import { OrderModel } from './order.model';
export class UserModel {
	constructor(
		public userId: number,
		public username: string,
		public password: string,
		public enabled: boolean,
		public lastLogin: Date,
		public isAdmin: boolean,
		public token: string,
		public sessions?: SessionModel[],
		public orders?: OrderModel[]
	) { }
}

export class UserAdapter implements Adapter<UserModel> {
	adapt(item: UserModel): UserModel {
		return new UserModel(
			item.userId,
			item.username,
			item.password,
			item.enabled,
			item.lastLogin,
			item.isAdmin,
			item.token
		);
	}
}
