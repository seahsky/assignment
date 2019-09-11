import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionRoutingModule } from './session-routing.module';

import { SessionAddDoneComponent } from './session-add-done/session-add-done.component';
import { SessionFormComponent } from './session-form/session-form.component';
import { SessionListComponent } from './session-list/session-list.component';


@NgModule({
	declarations: [
		SessionAddDoneComponent,
		SessionFormComponent,
		SessionListComponent
	],
	imports: [
		CommonModule,
		SessionRoutingModule
	],
	exports: [
		SessionAddDoneComponent,
		SessionFormComponent,
		SessionListComponent
	]
})
export class SessionModule { }
