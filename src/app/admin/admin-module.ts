import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing-module';
import { MaterialModule } from '../material/material-module';

// Components
import { Login } from './login/login';
import { Signins } from './signins/signins';
import { Dashboard } from './dashboard/dashboard';
import { Staff } from './staff/staff';
import { AdminLayout } from './layout/admin-layout/admin-layout';
import { AdminHeader } from './layout/admin-header/admin-header';
import { AdminSideNav } from './layout/admin-side-nav/admin-side-nav';

@NgModule({
  declarations: [
    Login,
    Signins,
    Dashboard,
    Staff,
    AdminLayout,
    AdminHeader,
    AdminSideNav
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
