import { SessionModel } from './../../../model/session.model';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SessionFormComponent } from '../session-form/session-form.component';
import { SessionService } from 'src/app/service/session.service';


const datas = [
	{ name: 'test session', treatDate: '11-3-18' },
	{ name: 'test session', treatDate: '11-3-18' },
	{ name: 'test session', treatDate: '11-3-18' },
	{ name: 'test session', treatDate: '11-3-18' },
	{ name: 'test session', treatDate: '11-3-18' },
	{ name: 'test session', treatDate: '11-3-18' }
];
@Component({
	selector: 'app-session-list',
	templateUrl: './session-list.component.html',
	styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {
	sessions: SessionModel[] = [];
	displayedColumns = [
		'name', 'treatDate'
	];
	dataSource;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private dialog: MatDialog,
		private sessionService: SessionService
	) { }

	ngOnInit() {
		this.sessionService.getPublicSessions().subscribe(val => {
			this.dataSource = new MatTableDataSource(val);
		});
	}

	filter() {
	}

	onClick(row) {
		console.log(row.sessionId);
		this.router.navigate([row.sessionId], { relativeTo: this.route });
	}

	openDialog() {
		this.dialog.open(SessionFormComponent);
	}

}
