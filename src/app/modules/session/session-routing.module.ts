import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionComponent } from './session.component';
import { SessionListComponent } from './session-list/session-list.component';
import { SessionFormComponent } from './session-form/session-form.component';
import { SessionDetailComponent } from './session-detail/session-detail.component';


const routes: Routes = [
	{
		path: '', component: SessionComponent, children: [
			{ path: '', component: SessionListComponent },
			{ path: 'form', component: SessionFormComponent },
			{ path: ':id', component: SessionDetailComponent }
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SessionRoutingModule { }
