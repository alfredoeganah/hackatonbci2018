import { Injectable } from '@angular/core';
import { HttpModule, Http, Response, Headers } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { RouterModule, Router, ActivatedRoute, Params } from '@angular/router';
import { BHookUser } from '../modules/bhook-login/bhook-user';

@Injectable()
export class BHookCRMService {
    private userLoggedIn: Boolean;
    public user: BHookUser;
    public infoMsg: string;
    public errorMsg: string;
    public validatedrut: Boolean;
    public LoadingTarifa: Boolean;
    validateRut(someRut: string ) {
        this.errorMsg = '';
        this.infoMsg = 'Validando rut...espere un momento por favor.';
        const url = 'https://api.rutify.cl/rut/'+ someRut;
        console.log('BHook API REQUEST (validateRut)-> GET ' + url);
        return this._http.get(url).map(res => res.json()).subscribe(
            result => {
                console.log('BHook API RESPONSE (validateRut)-> ' + JSON.stringify(result));
                if(result==='{"error":"Invalid RUT parameter"}'){
                    console.error('BHook CRM ERROR (validateRut)-> ' + JSON.stringify(result));
                     this.errorMsg = 'Rut no válido, por favor inténtelo nuevamente!';
                }else{ 
                    this.user.fullname = result.nombre;
                    this.validatedrut = true;
                    this._router.navigate(['/createUser']);
                }
                this.infoMsg = '';
            },
            error => {
                console.error('BHook API ERROR (validateRut)-> ' + JSON.stringify(error));
                this.infoMsg = '';
                 this.errorMsg = 'Rut no válido, por favor inténtelo nuevamente!';
            }
        );
    }
        
    constructor(
            private _http: Http,
            private _httpclient: HttpClient,
            private _activeRoute: ActivatedRoute,
            private _router: Router
        ) {
        this.validatedrut = false;
        this.user = new BHookUser();
        this.errorMsg = '';
        this.infoMsg = '';
    }
    ping() {
        return 'BHookCRMService->pong()';
    }
} 
