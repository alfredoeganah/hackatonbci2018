import { Component, OnInit } from '@angular/core';
import { BHookCRMService } from '../../services/bhook-crm.service'

import{ BHookUser } from '../bhook-login/bhook-user';
import { RouterModule, Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'bhook-selectparking',
  templateUrl: './bhook-selectparking.component.html',
  styleUrls: ['./bhook-selectparking.component.css']
})


export class BHookSelectParkingComponent implements OnInit {

	constructor( public _BHookCrmService: BHookCRMService, private _router: Router, private route: ActivatedRoute) {	}

	public user:BHookUser;
	public infoMsg: string = '';
    public errorMsg: string = '';

	ngOnInit() {
	  if(this._BHookCrmService.user!==undefined){
			this.user = this._BHookCrmService.user;
		}
		else
	   this.route
	      .queryParams 
	      .subscribe(params => {
	        this.user = params['user'] || new BHookUser();
	      });
	  }

	  goToParkingDetail(e:any){
		
			this._BHookCrmService.hookConfirmed=true;
			this._BHookCrmService.selectParking=false;
			this._router.navigate(['/parkingDetail'],{queryParams: {user: this.user }});
			}
		}
}