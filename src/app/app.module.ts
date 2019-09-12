import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { CoreModule } from './modules/core/core.module';

import { routes } from './app.routes';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
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
