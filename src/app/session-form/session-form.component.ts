import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-session-form',
	templateUrl: './session-form.component.html',
	styleUrls: ['./session-form.component.css']
})
export class SessionFormComponent implements OnInit {
	sessionForm: FormGroup;

	constructor(private fb: FormBuilder) {
		this.sessionForm = this.fb.group({
			name: [''],
			desc: [''],
			treatDate: [''],
			cutoffDate: [''],
			menuImage: [''],
			isPrivate: [''],
			password: [null]
		});
	}

	ngOnInit() {
	}

}
