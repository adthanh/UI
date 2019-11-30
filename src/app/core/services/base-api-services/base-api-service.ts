import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
  })
export class BaseApiService {
    constructor(private http: HttpClient) { }
    get<T>(uri: string, data?: any): Observable<T> {
        return this.http.get<T>(environment.apiUrl + uri, {params: data});
    }
    post<T>(uri: string, data?: any): Observable<T> {
        return this.http.post<T>(environment.apiUrl + uri, data);
    }
    put<T>(uri: string, data?: any): Observable<T> {
        return this.http.put<T>(environment.apiUrl + uri, data);
    }
    delete<T>(uri: string, key: string, id: string): Observable<T> {
        return this.http.delete<T>(environment.apiUrl + uri + '/?' + key + '=' + id);
    }
    postFile<T>(uri: string, data?: any): Observable<T> {
        return  this.http.post<T>(environment.apiUrl + uri, data);
    }
    // forkJoin(arrObserbales) {
    //     return Observable.forkJoin(arrObserbales);
    // }
}
