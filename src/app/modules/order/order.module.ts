import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';

import { OrderFormComponent } from './order-form/order-form.component';
import { OrderListComponent } from './order-list/order-list.component';


@NgModule({
	declarations: [
		OrderFormComponent,
		OrderListComponent
	],
	imports: [
		CommonModule,
		OrderRoutingModule
	],
	exports: [
		OrderFormComponent,
		OrderListComponent
	]
})
export class OrderModule { }
