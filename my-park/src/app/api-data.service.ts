import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
 private apiUrl = 'https://data.stad.gent/api/explore/v2.1/catalog/datasets/locaties-parkeerautomaten-gent/records?limit=20';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
