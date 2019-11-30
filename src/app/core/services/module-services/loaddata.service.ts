import { BaseApiService } from '../base-api-services/base-api-service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UrlConstants } from '../../common/url.constants';

@Injectable({
    providedIn: 'root'
})
export class LoaddataService {

    constructor(
        private baseApiService: BaseApiService,
    ) { }

    getData(request: string): Observable<any> {
        return this.baseApiService.get(UrlConstants.API_GET_LOADDATA + request);
    }
}