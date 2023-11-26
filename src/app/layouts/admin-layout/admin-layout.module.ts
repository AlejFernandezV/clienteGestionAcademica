import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
//import { TypographyComponent } from '../../typography/typography.component';
//import { IconsComponent } from '../../icons/icons.component';
//import { MapsComponent } from '../../maps/maps.component';
//import { NotificationsComponent } from '../../notifications/notifications.component';
//import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ListDocentesComponent } from '../../docente/list-docentes/list-docentes.component';
import { CreateDocenteComponent } from '../../docente/create-docente/create-docente.component';
import { UpdateDocenteComponent } from '../../docente/update-docente/update-docente.component';
import { ListarPeriodoComponent } from '../../Periodo/listar-periodo/listar-periodo.component';
import { CrearPeriodoComponent } from '../../Periodo/crear-periodo/crear-periodo.component';
import { ActualizarPeriodoComponent } from '../../Periodo/actualizar-periodo/actualizar-periodo.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { CrearComponent } from 'app/l_docente/crear/crear.component';
import { ActualizarComponent } from 'app/l_docente/actualizar/actualizar.component';
import { ConsultarComponent } from 'app/l_docente/consultar/consultar.component';
import { ListarLaborComponent } from 'app/l_docente/listar-labor/listar-labor.component';
import {AutoevaluacionComponent} from 'app/autoevaluacion/autoevaluacion.component';
import { LAutoevaluacionComponent } from 'app/autoevaluacion/l-autoevaluacion/l-autoevaluacion.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,    
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    ListDocentesComponent,
    CreateDocenteComponent,
    UpdateDocenteComponent,
    ListarPeriodoComponent,
    CrearPeriodoComponent,
    ActualizarPeriodoComponent,
    CrearComponent,
    ConsultarComponent,
    ActualizarComponent,
    ListarLaborComponent,
    AutoevaluacionComponent,
    LAutoevaluacionComponent,

    CrearPeriodoComponent,
    ListarPeriodoComponent,
    ActualizarPeriodoComponent,
    UpdateDocenteComponent,
    ListDocentesComponent,
    CreateDocenteComponent,
    CrearComponent,
    ActualizarComponent,
    LAutoevaluacionComponent,
    ConsultarComponent,
    ListarLaborComponent,
    AutoevaluacionComponent,
    /*TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,*/
  ]
})

export class AdminLayoutModule {}
