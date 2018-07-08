import { Component } from '@angular/core';
import { BHookCRMService } from './services/bhook-crm.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BHook Comunidad Ciclista - Biker';
   constructor( public _BHookCrmSerice: BHookCRMService) { 
	  
	}
}

