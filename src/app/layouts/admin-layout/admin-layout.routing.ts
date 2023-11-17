import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { CrearComponent } from 'app/l_docente/crear/crear.component';
import { ActualizarComponent } from 'app/l_docente/actualizar/actualizar.component';
import { ConsultarComponent } from 'app/l_docente/consultar/consultar.component';
import { ListarLaborComponent } from 'app/l_docente/listar-labor/listar-labor.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { AutoevaluacionComponent } from 'app/autoevaluacion/autoevaluacion.component';
import { LAutoevaluacionComponent } from 'app/autoevaluacion/l-autoevaluacion/l-autoevaluacion.component';
import { Component } from '@angular/core';
export const AdminLayoutRoutes: Routes = [
    
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'crear', component: CrearComponent},
    { path: 'actualizar', component: ActualizarComponent},
    { path: 'consultar', component: ConsultarComponent},
    { path: 'listar_labor', component: ListarLaborComponent},
    {path: 'autoevaluacion', component:AutoevaluacionComponent},
    { path: 'l-autoevaluacion', component:LAutoevaluacionComponent},

 
   // { path: 'notifications',  component: NotificationsComponent },
];
