import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    /*TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,*/
  ]
})

export class AdminLayoutModule {}
