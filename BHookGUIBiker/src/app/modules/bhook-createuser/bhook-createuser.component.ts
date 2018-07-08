import { Component, OnInit } from '@angular/core';
import { BHookCRMService } from '../../services/bhook-crm.service'
import { RouterModule, Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'bhook-createuser',
  templateUrl: './bhook-createuser.component.html',
  styleUrls: ['./bhook-createuser.component.css']
})


export class BHookCreateUserComponent implements OnInit {
	ngOnInit() {
	  
	  }

	   constructor( public _BHookCrmService: BHookCRMService) { 
	  
	}

	goToSelectDestination(){
		this._router.navigate(['/createUser']);
	}
}