import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SessionFormComponent } from './session-form/session-form.component';

@Component({
	selector: 'app-session',
	templateUrl: './session.component.html',
	styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private dialog: MatDialog
	) { }

	ngOnInit() {
	}

	onClick() {
		console.log(this.route);
	}

	openDialog() {
		this.dialog.open(SessionFormComponent);
	}

}
