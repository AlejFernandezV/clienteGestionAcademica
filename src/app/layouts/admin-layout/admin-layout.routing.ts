import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { CrearComponent } from 'app/l_docente/crear/crear.component';
import { ActualizarComponent } from 'app/l_docente/actualizar/actualizar.component';
import { ConsultarComponent } from 'app/l_docente/consultar/consultar.component';
import { ListarLaborComponent } from 'app/l_docente/listar-labor/listar-labor.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ListDocentesComponent } from '../../docente/list-docentes/list-docentes.component';
import { CreateDocenteComponent } from '../../docente/create-docente/create-docente.component';
import { UpdateDocenteComponent } from '../../docente/update-docente/update-docente.component';
import { ListarPeriodoComponent } from '../../Periodo/listar-periodo/listar-periodo.component';
import { CrearPeriodoComponent } from '../../Periodo/crear-periodo/crear-periodo.component';
import { ActualizarPeriodoComponent } from '../../Periodo/actualizar-periodo/actualizar-periodo.component';
import { AutoevaluacionComponent } from 'app/autoevaluacion/autoevaluacion.component';
import { LAutoevaluacionComponent } from 'app/autoevaluacion/l-autoevaluacion/l-autoevaluacion.component';
import { AuthGuard } from 'app/guards/auth.guard';

export const AdminLayoutRoutes: Routes = [
    
    { path: 'dashboard',      component: DashboardComponent, canActivate:[AuthGuard], },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'list-docentes',  component: ListDocentesComponent, canActivate:[AuthGuard],},
    { path: 'create-docente', component: CreateDocenteComponent, canActivate:[AuthGuard],},
    { path: 'update-docente', component: UpdateDocenteComponent, canActivate:[AuthGuard],},
    { path: 'listar-periodo', component: ListarPeriodoComponent, canActivate:[AuthGuard],},
    { path: 'crear-periodo',  component: CrearPeriodoComponent, canActivate:[AuthGuard],},
    { path: 'actualizar-periodo', component: ActualizarPeriodoComponent, canActivate:[AuthGuard],},
    { path: 'listar-labor', component: ListarLaborComponent, canActivate:[AuthGuard],},
    { path: 'crear', component: CrearComponent, canActivate:[AuthGuard],},
    { path: 'consultar', component: ConsultarComponent, canActivate:[AuthGuard], },
    { path: 'actualizar', component: ActualizarComponent, canActivate:[AuthGuard],},
    { path: 'autoevaluacion', component: AutoevaluacionComponent, canActivate:[AuthGuard],},
    { path: 'lautoevaluacion', component: LAutoevaluacionComponent, canActivate:[AuthGuard],},


    

   // { path: 'notifications',  component: NotificationsComponent },
];
