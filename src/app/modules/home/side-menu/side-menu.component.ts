import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-side-menu',
	templateUrl: './side-menu.component.html',
	styles: []
})
export class SideMenuComponent implements OnInit {
	menuList = [
		{ title: 'Tea Sessions', link: 'session' },
		{ title: 'Orders', link: 'order' }
	];

	constructor(
		private router: Router
	) { }

	ngOnInit() {
	}

}
