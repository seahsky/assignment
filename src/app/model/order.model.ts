export class OrderModel {
	constructor(
		private OrderId: number,
		private ItemName: string,
		private Quantity: number,
		private Remark: string,
		private TeaSession: number
	) { }

	get orderId() {
		return this.OrderId;
	}
	get itemName() {
		return this.ItemName;
	}
	get quantity() {
		return this.Quantity;
	}
	get remark() {
		return this.Remark;
	}
	get teaSession() {
		return this.TeaSession;
	}
}
