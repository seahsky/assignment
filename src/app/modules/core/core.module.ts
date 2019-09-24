import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
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
		HttpClientModule
	]
})
export class CoreModule { }
