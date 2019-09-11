import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-order-form',
	templateUrl: './order-form.component.html',
	styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
	orderForm: FormGroup;

	constructor(
		private fb: FormBuilder
	) {
		this.orderForm = this.fb.group({
			itemName: [''],
			quantity: [''],
			remark: ['']
		});
	}

	ngOnInit() {
	}

	checkError(controlName: string) {
		return this.orderForm.get(controlName).hasError('required');
	}

	onSubmit() {
	}
}
