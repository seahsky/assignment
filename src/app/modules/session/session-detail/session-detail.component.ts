import { SessionModel } from './../../../model/session.model';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-session-detail',
	templateUrl: './session-detail.component.html',
	styleUrls: ['./session-detail.component.css']
})
export class SessionDetailComponent implements OnInit {
	session: SessionModel;

	constructor() { }

	ngOnInit() {
	}

	openDialog() {
	}

}
