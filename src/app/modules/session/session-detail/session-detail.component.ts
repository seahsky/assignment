import { TeaSessionModel } from './../../../model/teaSession.model';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-session-detail',
	templateUrl: './session-detail.component.html',
	styleUrls: ['./session-detail.component.css']
})
export class SessionDetailComponent implements OnInit {
	session: TeaSessionModel;

	constructor() { }

	ngOnInit() {
	}

	openDialog() {
	}

}
