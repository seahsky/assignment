import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';

import { HeaderComponent } from 'src/app/header/header.component';
import { SessionFormComponent } from 'src/app/session-form/session-form.component';


@NgModule({
	declarations: [
		HeaderComponent,
		SessionFormComponent
	],
	imports: [
		CommonModule,
		MaterialModule,
		ReactiveFormsModule
	]
})
export class CoreModule { }
