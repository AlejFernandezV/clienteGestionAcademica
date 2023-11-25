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
import { RolDocenteGuard } from 'app/guards/roles/docente/rol-docente.guard';
import { RolGuard } from 'app/guards/rol/rol.guard';
import { RolDecanoGuard } from 'app/guards/roles/decano/rol-decano.guard';
import { InicioComponent } from 'app/inicio/inicio.component';

export const AdminLayoutRoutes: Routes = [
    
    { path: 'dashboard',      component: DashboardComponent, canActivate:[AuthGuard, RolDecanoGuard], },
    { path: 'user-profile',   component: UserProfileComponent, canActivate:[AuthGuard, RolGuard],  },
    { path: 'table-list',     component: TableListComponent, canActivate:[AuthGuard, RolGuard], },
    { path: 'list-docentes',  component: ListDocentesComponent, canActivate:[AuthGuard, RolDecanoGuard],},
    { path: 'create-docente', component: CreateDocenteComponent, canActivate:[AuthGuard, RolDecanoGuard],},
    { path: 'update-docente/:usu_num_doc', component: UpdateDocenteComponent, canActivate:[AuthGuard, RolDecanoGuard],},
    { path: 'listar-periodo', component: ListarPeriodoComponent, canActivate:[AuthGuard, RolDecanoGuard],},
    { path: 'crear-periodo',  component: CrearPeriodoComponent, canActivate:[AuthGuard, RolDecanoGuard],},
    { path: 'actualizar-periodo', component: ActualizarPeriodoComponent, canActivate:[AuthGuard, RolDecanoGuard],},
    { path: 'listar-labor', component: ListarLaborComponent, canActivate:[AuthGuard, RolDecanoGuard],},
    { path: 'crear', component: CrearComponent, canActivate:[AuthGuard, RolDecanoGuard],},
    { path: 'consultar', component: ConsultarComponent, canActivate:[AuthGuard, RolDecanoGuard], },
    { path: 'actualizar', component: ActualizarComponent, canActivate:[AuthGuard, RolDecanoGuard],},
    { path: 'autoevaluacion', component: AutoevaluacionComponent, canActivate:[AuthGuard, RolDecanoGuard],},
    { path: 'lautoevaluacion', component: LAutoevaluacionComponent, canActivate:[AuthGuard, RolDecanoGuard],},
    { path: 'inicio', component: InicioComponent}
];
