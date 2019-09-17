import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TeaSessionModel } from '../model/teaSession.model';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class SessionService {
	static readonly URL = 'http://localhost:50001/tos-rest';

	constructor(
		private http: HttpClient
	) { }

	public addSession(values: TeaSessionModel) {
		const headers = new HttpHeaders();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');

		values.createdBy = 1;

		return this.http.post(`${SessionService.URL}/rest/session/add`, values, { headers }).subscribe(r => { console.log(r); });
	}

	public uploadImages(files: FileList) {
		const reqArr = [];
		Array.from(files).map(file => reqArr.push(file));
		reqArr.map(file => {
			const formData = new FormData();
			formData.append('file', file);
			this.http.post(`${SessionService.URL}/rest/session/upload`, formData).subscribe(res => {
				console.log(res);
			},
				err => {
					console.log(err);
				});
		});
	}

	getSession(teaSessionId: number) {

	}

	getPrivateSession(privateCode: string) {

	}
}
