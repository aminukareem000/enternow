import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Staff } from './staff/staff';
import { Reports } from './reports/reports';
import { Signins } from './signins/signins';
import { Login } from './login/login';
import { AdminLayout } from './layout/admin-layout/admin-layout';



const routes: Routes = [
  {
    path: 'home',
    component: AdminLayout,
    children: [
      {
        path: 'dashboard',
        component: Dashboard
      },
      {
        path: 'signins',
        component: Signins
      },
      {
        path: 'staff',
        component: Staff
      },
      {
        path: 'reports',
        component: Reports
      },
      {
        path : '',
        redirectTo: 'dashboard',
        pathMatch:"full"
      }

    ]
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
