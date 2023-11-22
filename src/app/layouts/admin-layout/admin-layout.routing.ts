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
import { ListarPeriodoComponent } from 'app/Periodo/listar-periodo/listar-periodo.component';
import { ListDocentesComponent } from 'app/docente/list-docentes/list-docentes.component';

export const AdminLayoutRoutes: Routes = [
    
    { path: 'dashboard',              component: DashboardComponent },
    { path: 'user-profile',           component: UserProfileComponent },
    { path: 'table-list',             component: TableListComponent },
    { path: 'l_docente/listar-labor', component: ListarLaborComponent},
    { path: 'Periodo/listar-periodo', component: ListarPeriodoComponent },
    { path: 'autoevaluacion',         component: AutoevaluacionComponent },
    { path: 'docente',                component: ListDocentesComponent},

   // { path: 'notifications',  component: NotificationsComponent },
];
