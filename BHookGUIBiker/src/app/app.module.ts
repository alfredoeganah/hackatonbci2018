import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http , HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';

import { BHookLoginComponent } from './modules/bhook-login/bhook-login.component';
import { BHookGetRutComponent } from './modules/bhook-getrut/bhook-getrut.component';
import { BHookLogoutComponent } from './modules/bhook-logout/bhook-logout.component';
import { BHookCreateUserComponent } from './modules/bhook-createuser/bhook-createuser.component';
import { BHookSelectDestinationComponent } from './modules/bhook-selectdestination/bhook-selectdestination.component';
import { BHookSelectParkingComponent } from './modules/bhook-selectparking/bhook-selectparking.component';
import { BHookParkingDetailComponent } from './modules/bhook-parkingdetail/bhook-parkingdetail.component';
import { BHookConfirmParkingComponent } from './modules/bhook-confirmparking/bhook-confirmparking.component';

@NgModule({
  declarations: [
    AppComponent,
    BHookLoginComponent,
    BHookGetRutComponent,
    BHookLogoutComponent,
    BHookCreateUserComponent,
    BHookSelectDestinationComponent,
    BHookSelectParkingComponent,
    BHookParkingDetailComponent,
    BHookConfirmParkingComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }



