import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { HttpUtilService } from './http-util.service';

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    private API_URL = environment.URL;

    constructor(
        private http: HttpClient,
        private httpUtil: HttpUtilService) { }

    getResult(param: string) {
        return this.http.get(`${this.API_URL}${param}`)
            .pipe(map(this.httpUtil.extrairDados))
            .pipe(catchError(this.httpUtil.processarErros));
    }
}
