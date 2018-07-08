import { Component, OnInit } from '@angular/core';
import{ BHookUser } from '../bhook-login/bhook-user';
import { RouterModule, Router, ActivatedRoute, Params } from '@angular/router';

import { BHookCRMService } from '../../services/bhook-crm.service'

@Component({
  selector: 'bhook-selectdestination',
  templateUrl: './bhook-selectdestination.component.html',
  styleUrls: ['./bhook-selectdestination.component.css']
})


export class BHookSelectDestinationComponent implements OnInit {

    constructor( public _BHookCrmService: BHookCRMService, private _router: Router, private route: ActivatedRoute) {	}

	public user:BHookUser;
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
	


	goToSelectParking(e:any,direct:Boolean){
		let valid:Boolean = true;
		if(!direct){
			if(this.user.destinationAdd === undefined || this.user.destinationAdd === ''){
				this.errorMsg = 'Por favor ingrese una dirección para buscar un lugar donde puedas estacionar tu bicicleta de forma gratuita';
				valid = false;
				return;
			} 
		/*	if(this.user.destinationLat === '' || this.user.destinationLon  === '') {
				this.errorMsg = 'Por favor ingrese una dirección válida';
				valid = false;
				return;
			}*/
		}
		if(valid){
			this._BHookCrmService.selectDestination=false;
			this._BHookCrmService.selectParking=true;
			this._router.navigate(['/selectParking'],{queryParams: {user: this.user }});
			}
		}
}}