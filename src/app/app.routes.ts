import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: 'home', loadChildren: './modules/home/home.module#HomeModule' },

	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', redirectTo: 'home' }
];
