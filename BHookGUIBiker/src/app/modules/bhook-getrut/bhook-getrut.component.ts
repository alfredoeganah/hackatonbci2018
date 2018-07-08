import { Component, OnInit } from '@angular/core';
import { BHookCRMService } from '../../services/bhook-crm.service'
import { BHookUser } from '../bhook-login/bhook-user'
@Component({
  selector: 'bhook-getrut',
  templateUrl: './bhook-getrut.component.html',
  styleUrls: ['./bhook-getrut.component.css']
})


export class BHookGetRutComponent implements OnInit {

	public user:BHookUser;

	ngOnInit() {
	  this.user = new BHookUser();
this.doPing();
	  }
	  constructor( public _BHookCrmSerice: BHookCRMService) { 
	  
	}

	validateRut(e){
		this._BHookCrmSerice.validateRut(this.user.rut);
	}
	  doPing(){
	  	this._BHookCrmSerice.ping();
	  }
}