import { Component, OnInit } from '@angular/core';
import { BHookCRMService } from '../../services/bhook-crm.service'

@Component({
  selector: 'bhook-createuser',
  templateUrl: './bhook-createuser.component.html',
  styleUrls: ['./bhook-createuser.component.css']
})


export class BHookCreateUserComponent implements OnInit {
	ngOnInit() {
	  
	  }

	   constructor( public _BHookCrmSerice: BHookCRMService) { 
	  
	}
}