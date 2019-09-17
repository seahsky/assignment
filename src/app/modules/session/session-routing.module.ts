import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionComponent } from './session.component';
import { SessionListComponent } from './session-list/session-list.component';
import { SessionFormComponent } from './session-form/session-form.component';


const routes: Routes = [
	{
		path: '', component: SessionComponent, children: [
			{ path: '', component: SessionListComponent },
			{ path: 'form', component: SessionFormComponent }
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SessionRoutingModule { }
