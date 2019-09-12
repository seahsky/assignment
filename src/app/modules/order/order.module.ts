import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';

import { OrderFormComponent } from './order-form/order-form.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderComponent } from './order.component';


@NgModule({
	declarations: [
		OrderFormComponent,
		OrderListComponent,
		OrderComponent
	],
	imports: [
		CommonModule,
		CoreModule,
		OrderRoutingModule
	],
	exports: [
		OrderFormComponent,
		OrderListComponent
	]
})
export class OrderModule { }
