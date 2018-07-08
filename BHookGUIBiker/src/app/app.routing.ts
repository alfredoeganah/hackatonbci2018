import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BHookLoginComponent } from './modules/bhook-login/bhook-login.component';
import { BHookGetRutComponent } from './modules/bhook-getrut/bhook-getrut.component';
import { BHookLogoutComponent } from './modules/bhook-logout/bhook-logout.component';
import { BHookCreateUserComponent } from './modules/bhook-createuser/bhook-createuser.component';
import { BHookSelectDestinationComponent } from './modules/bhook-selectdestination/bhook-selectdestination.component';
import { BHookSelectParkingComponent } from './modules/bhook-selectparking/bhook-selectparking.component';
import { BHookParkingDetailComponent } from './modules/bhook-parkingdetail/bhook-parkingdetail.component';
import { BHookConfirmParkingComponent } from './modules/bhook-confirmparking/bhook-confirmparking.component';

const appRoutes: Routes = [
    {path: '', component: BHookLoginComponent },
    {path: 'getRut', component: BHookGetRutComponent },
    {path: 'login', component: BHookLoginComponent },
    {path: 'logout', component: BHookLogoutComponent },
    {path: 'createUser', component: BHookCreateUserComponent },
    {path: 'selectDestination', component: BHookSelectDestinationComponent },
    {path: 'selectParking', component: BHookSelectParkingComponent },
    {path: 'confirmParking', component: BHookConfirmParkingComponent },
    {path: 'parkingDetail', component: BHookParkingDetailComponent },
    {path: '**', component: BHookLoginComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
