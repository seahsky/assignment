import { CoreModule } from './../core/core.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';


@NgModule({
	declarations: [
		HomeComponent,
		HeaderComponent,
		SideMenuComponent
	],
	imports: [
		CommonModule,
		CoreModule,
		HomeRoutingModule
	],
	exports: [
		HomeComponent,
		HeaderComponent,
		SideMenuComponent
	]
})
export class HomeModule { }
