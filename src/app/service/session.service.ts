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
		console.log(JSON.stringify(values));
		const headers = new HttpHeaders();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');

		// const params = new URLSearchParams();
		// params.append('name', values.name);
		// params.append('desc', values.desc);
		// params.append('treatDate', values.treatDate);
		// params.append('cutoffDate', values.cutoffDate);
		// // params.append('menuImage', values.menuImage);
		// params.append('isPrivate', values.isPrivate);
		// params.
		// params.append('name', values.name);
		return this.http.post(`${SessionService.URL}/rest/session/add`, JSON.stringify(values), { headers }).subscribe(r => { console.log(r); });

		// .map(res => res.json());


		// return this.http.post(`${SessionService.URL}/rest/session/add`);
	}

	addTest(hello: string, world: number) {
		const headers = new HttpHeaders();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');

		const params = new URLSearchParams();
		params.append('hello', hello);
		params.append('world', world as any as string);
		return this.http.post(`${SessionService.URL}/rest/test/add-test`, params.toString(), { headers }).subscribe(res => { console.log(res); });
	}
}
