import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { CoreModule } from './modules/core/core.module';
import { SessionListComponent } from './session-list/session-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
@NgModule({
	declarations: [
		AppComponent,
		SessionListComponent,
		OrderListComponent,
		UserListComponent,
		SideMenuComponent
	],
	imports: [
		CoreModule,
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(routes, { useHash: false, enableTracing: true, preloadingStrategy: PreloadAllModules }),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
