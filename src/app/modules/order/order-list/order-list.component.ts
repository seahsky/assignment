import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

const datas = [
	{ name: 'test session', treatDate: '11-3-18' },
	{ name: 'test session', treatDate: '11-3-18' },
	{ name: 'test session', treatDate: '11-3-18' },
	{ name: 'test session', treatDate: '11-3-18' },
	{ name: 'test session', treatDate: '11-3-18' },
	{ name: 'test session', treatDate: '11-3-18' }
];

@Component({
	selector: 'app-order-list',
	templateUrl: './order-list.component.html',
	styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
	displayedColumns = [
		'name', 'treatDate'
	];
	dataSource = new MatTableDataSource(datas);

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private dialog: MatDialog
	) { }

	ngOnInit() {
	}

	filter() {
	}

	onClick() {
	}

	openDialog() {
		this.dialog.open(OrderListComponent);
	}

}
