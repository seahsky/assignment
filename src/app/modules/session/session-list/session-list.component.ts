import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';


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
	displayedColumns = [
		'name', 'treatDate'
	];
	dataSource = new MatTableDataSource(datas);

	constructor(
		private router: Router,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
	}

	filter() {
	}

	onClick() {
		console.log(this.route);
		this.router.navigate([{ outlets: { sub: ['../asd'] } }], { relativeTo: this.route });
	}

}
