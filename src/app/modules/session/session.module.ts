import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionRoutingModule } from './session-routing.module';

import { SessionAddDoneComponent } from './session-add-done/session-add-done.component';
import { SessionFormComponent } from './session-form/session-form.component';
import { SessionListComponent } from './session-list/session-list.component';
import { SessionComponent } from './session.component';
import { SessionDetailComponent } from './session-detail/session-detail.component';


@NgModule({
	declarations: [
		SessionAddDoneComponent,
		SessionFormComponent,
		SessionListComponent,
		SessionComponent,
		SessionDetailComponent
	],
	imports: [
		CommonModule,
		CoreModule,
		SessionRoutingModule
	],
	exports: [
		SessionAddDoneComponent,
		SessionFormComponent,
		SessionListComponent
	]
})
export class SessionModule { }
