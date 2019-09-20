import { SessionModel } from './../../../model/session.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from 'src/app/service/session.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { OrderFormComponent } from '../../order/order-form/order-form.component';

@Component({
	selector: 'app-session-detail',
	templateUrl: './session-detail.component.html',
	styleUrls: ['./session-detail.component.css']
})
export class SessionDetailComponent implements OnInit {
	session;

	constructor(
		private http: HttpClient,
		private route: ActivatedRoute,
		private dialog: MatDialog,
		private sessionService: SessionService
	) { }

	async ngOnInit() {
		const id = this.route.snapshot.params.id;
		await this.sessionService.getSession(id).subscribe(res => {
			this.session = res;
		},
			err => err);
	}

	openDialog() {
		this.dialog.open(OrderFormComponent);
	}

}
