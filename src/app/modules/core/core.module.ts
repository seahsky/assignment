import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { SessionFormComponent } from '../session/session-form/session-form.component';


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
