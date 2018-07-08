import { Component, OnInit } from '@angular/core';
import { BHookCRMService } from '../../services/bhook-crm.service'
import { BHookUser } from '../bhook-login/bhook-user'
import { RouterModule, Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'bhook-createuser',
  templateUrl: './bhook-createuser.component.html',
  styleUrls: ['./bhook-createuser.component.css']
})


export class BHookCreateUserComponent implements OnInit {

	public user:BHookUser;

   constructor( public _BHookCrmService: BHookCRMService, private _router: Router, private route: ActivatedRoute) {	}

  
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


	goToSelectDestination(e:any,direct:Boolean){
		let valid:Boolean = true;
		if(!direct){
			if(this.user.username === undefined || this.user.username === ''){
				this.errorMsg = 'Por favor ingrese un usuario';
				valid = false;
				return;
			} 
			if(this.user.password === undefined || this.user.password === '') {
				this.errorMsg = 'Por favor ingrese una clave';
				valid = false;
				return;
			}
		}
		if(valid){
			this.user.useSSO = true;
			this._router.navigate(['/selectDestination'],{queryParams: {user: this.user }});
			}
		}
	}
	   