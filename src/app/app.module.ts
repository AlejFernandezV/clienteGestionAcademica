import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
//import { CrearPeriodoComponent } from './periodo/crear-periodo/crear-periodo.component';
//import { ListarPeriodoComponent } from './periodo/listar-periodo/listar-periodo.component';
//import { ActualizarPeriodoComponent } from './periodo/actualizar-periodo/actualizar-periodo.component';
//import { UpdateDocenteComponent } from './docente/update-docente/update-docente.component';
//import { ListDocentesComponent } from './docente/list-docentes/list-docentes.component';
//import { CreateDocenteComponent } from './docente/create-docente/create-docente.component';

import { LoginComponent } from './views/login/login.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    MatIconModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    InicioComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
