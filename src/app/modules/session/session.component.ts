import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-session',
	templateUrl: './session.component.html',
	styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

	constructor(
		private router: Router,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
	}

	onClick() {
		console.log(this.route);
		this.router.navigate([{ outlets: { sub: 'asd' } }]);
	}

}
