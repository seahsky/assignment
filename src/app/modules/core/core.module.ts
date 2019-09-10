import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';

import { HeaderComponent } from 'src/app/header/header.component';
import { SessionFormComponent } from 'src/app/session-form/session-form.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
	declarations: [
		HeaderComponent,
		SessionFormComponent
	],
	imports: [
		CommonModule,
		MaterialModule,
		ReactiveFormsModule,
		HttpClientModule
	],
	exports: [
		CommonModule,
		MaterialModule,
		ReactiveFormsModule,
		HttpClientModule,
		HeaderComponent,
		SessionFormComponent
	]
})
export class CoreModule { }
