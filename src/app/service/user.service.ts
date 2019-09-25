import { UserAdapter, UserModel } from './../model/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(
		private http: HttpClient,
		private adapter: UserAdapter
	) { }

	public add(user: UserModel) {
	}

	public get(): Observable<UserModel> {
		return this.http.get<UserModel>(``);
	}

	public update(user: UserModel) {
	}

	public delete(userId: number) {
	}
}
