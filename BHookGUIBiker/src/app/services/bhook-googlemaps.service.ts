import { Injectable } from '@angular/core';
import { HttpModule, Http, Response, Headers } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { RouterModule, Router, ActivatedRoute, Params } from '@angular/router';
import { BHookUser } from '../modules/bhook-login/bhook-user';

@Injectable()
export class BHookGoogleMapsService{
	public user: BHookUser;
    public infoMsg: string;
    public errorMsg: string;
constructor(
            private _http: Http,
            private _httpclient: HttpClient,
            private _activeRoute: ActivatedRoute,
            private _router: Router
        ) {
        this.user = new BHookUser();
        this.errorMsg = '';
        this.infoMsg = '';
    }
}