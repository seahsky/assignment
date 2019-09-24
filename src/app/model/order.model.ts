import { Adapter } from './../interface/adapter';
export class OrderModel {
	constructor(
		public orderId: number,
		public itemName: string,
		public quantity: number,
		public remark: string,
		public session: number,
		public createdBy: number
	) { }
}

export class OrderAdapter implements Adapter<OrderModel> {
	adapt(item: any): OrderModel {
		return new OrderModel(
			item.orderId,
			item.itemName,
			item.quantity,
			item.remark,
			item.session,
			item.createdBy
		);
	}
}

