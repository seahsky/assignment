import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { SessionService } from '../service/session.service';
import { TeaSessionModel } from '../model/teaSession.model';

export class MyErrorStateMatcher implements ErrorStateMatcher {
	isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
		const isSubmitted = form && form.submitted;
		return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
	}
}

@Component({
	selector: 'app-session-form',
	templateUrl: './session-form.component.html',
	styleUrls: ['./session-form.component.css']
})

export class SessionFormComponent implements OnInit {
	matcher = new MyErrorStateMatcher();
	sessionForm: FormGroup;

	constructor(
		private fb: FormBuilder,
		private sessionService: SessionService
	) {
		this.sessionForm = this.fb.group({
			name: ['', Validators.required],
			desc: ['', Validators.required],
			treatDate: ['', Validators.required],
			cutoffDate: ['', Validators.required],
			menuImage: [{ value: '', disabled: false }, Validators.required],
			isPrivate: [false],
			password: [{ value: null, disabled: true }]
		});
	}

	ngOnInit() {
	}

	checkError(controlName: string) {
		return this.sessionForm.get(controlName).hasError('required');
	}

	toggleDisable(event: MatCheckboxChange) {
		if (event.checked) {
			this.sessionForm.get('password').enable();
		} else {
			this.sessionForm.get('password').disable();
		}
	}

	onFileChange(files: FileList) {
		console.log(files);
		if (files.length > 0) {
			const fileNameArr = Array.from(files).map(val => val.name);
			this.sessionForm.get('menuImage').setValue(fileNameArr.join());
			this.sessionForm.get('menuImage').disable();
		}
	}

	onSubmit() {
		this.sessionForm.value.createdBy = 1;
		// this.sessionService.addSession(this.sessionForm.value as TeaSessionModel);
		this.sessionService.addTest('asd', 123);
	}

}
