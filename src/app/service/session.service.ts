import { SessionModel } from './../model/session.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class SessionService {
	static readonly URL = 'http://localhost:50001/tos-rest';

	constructor(
		private http: HttpClient
	) { }

	public addSession(session: SessionModel) {
		const headers = new HttpHeaders();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');

		return this.http.post(`${SessionService.URL}/rest/session/add`, session, { headers }).subscribe(r => { console.log(r); });
	}

	public uploadImages(files: FileList) {
		console.log(files);
		const reqArr = [];
		Array.from(files).map(file => reqArr.push(file));
		reqArr.map(file => {
			console.log(file);
			const formData = new FormData();
			formData.append('file', file);
			console.log(formData);
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
