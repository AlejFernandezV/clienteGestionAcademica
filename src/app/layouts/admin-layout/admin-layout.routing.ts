import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ListDocentesComponent } from '../../docente/list-docentes/list-docentes.component';
import { CreateDocenteComponent } from '../../docente/create-docente/create-docente.component';
import { UpdateDocenteComponent } from '../../docente/update-docente/update-docente.component';
import { ListarPeriodoComponent } from '../../Periodo/listar-periodo/listar-periodo.component';
import { CrearPeriodoComponent } from '../../Periodo/crear-periodo/crear-periodo.component';
import { ActualizarPeriodoComponent } from '../../Periodo/actualizar-periodo/actualizar-periodo.component';

export const AdminLayoutRoutes: Routes = [
    
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'list-docentes',  component: ListDocentesComponent},
    { path: 'create-docente', component: CreateDocenteComponent},
    { path: 'update-docente', component: UpdateDocenteComponent},
    { path: 'listar-periodo', component: ListarPeriodoComponent},
    { path: 'crear-periodo',  component: CrearPeriodoComponent},
    { path: 'actualizar-periodo', component: ActualizarPeriodoComponent},

   // { path: 'notifications',  component: NotificationsComponent },
];
