import { Component, OnInit } from '@angular/core';
import{ BHookUser } from '../bhook-login/bhook-user';
import { RouterModule, Router, ActivatedRoute, Params } from '@angular/router';

import { BHookCRMService } from '../../services/bhook-crm.service';
@Component({
  selector: 'bhook-parkingdetail',
  templateUrl: './bhook-parkingdetail.component.html',
  styleUrls: ['./bhook-parkingdetail.component.css']
})


export class BHookParkingDetailComponent implements OnInit {

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
	
}