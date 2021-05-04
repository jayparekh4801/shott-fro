import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class IndexService {

	constructor(private http: HttpClient) { }

	getBanners() {
		return this.http.get("http://localhost:3001/api/allbanners");
	}

	getLatestMovies() {
		return this.http.get('http://localhost:3001/api/allTrendvideos');
	}
}
