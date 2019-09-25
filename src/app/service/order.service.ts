import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderAdapter, OrderModel } from '../model/order.model';

@Injectable({
	providedIn: 'root'
})
export class OrderService {

	constructor(
		private http: HttpClient,
		private adapter: OrderAdapter
	) { }

	public add(order: OrderModel) {
	}

	public get(orderId: number) {
	}

	public getBySession(sessionId: number) {
	}

	public getByCreatedBy(userId: number) {
	}

	public update(order: OrderModel) {
	}

	public delete(orderId: number) {
	}
}
