import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { CrearComponent } from 'app/l_docente/crear/crear.component';
import { ActualizarComponent } from 'app/l_docente/actualizar/actualizar.component';
import { ConsultarComponent } from 'app/l_docente/consultar/consultar.component';
import { ListarLaborComponent } from 'app/l_docente/listar-labor/listar-labor.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
<<<<<<< HEAD
import { ListDocentesComponent } from '../../docente/list-docentes/list-docentes.component';
import { CreateDocenteComponent } from '../../docente/create-docente/create-docente.component';
import { UpdateDocenteComponent } from '../../docente/update-docente/update-docente.component';
import { ListarPeriodoComponent } from '../../Periodo/listar-periodo/listar-periodo.component';
import { CrearPeriodoComponent } from '../../Periodo/crear-periodo/crear-periodo.component';
import { ActualizarPeriodoComponent } from '../../Periodo/actualizar-periodo/actualizar-periodo.component';
import { AutoevaluacionComponent } from 'app/autoevaluacion/autoevaluacion.component';
import { LAutoevaluacionComponent } from 'app/autoevaluacion/l-autoevaluacion/l-autoevaluacion.component';

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
    { path: 'listar-labor', component: ListarLaborComponent},
    { path: 'crear', component: CrearComponent},
    { path: 'consultar', component: ConsultarComponent},
    { path: 'actualizar', component: ActualizarComponent},
    { path: 'autoevaluacion', component: AutoevaluacionComponent},
    { path: 'lautoevaluacion', component: LAutoevaluacionComponent},


    
=======
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
>>>>>>> c35af17f76fb6c14301575a4862243844c9cb5fe

   // { path: 'notifications',  component: NotificationsComponent },
];
