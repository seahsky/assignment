import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{
		path: '', component: HomeComponent, children: [
			{ path: 'session', loadChildren: '../session/session.module#SessionModule' },
			{ path: 'order', loadChildren: '../order/order.module#OrderModule' }
		]
	},

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HomeRoutingModule { }
