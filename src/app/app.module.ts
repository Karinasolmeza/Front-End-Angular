import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './componentes/Auth/login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SpinnerIntercepor } from './entidades/interceptors/spinner.interceptor';
import { SpinnerModule } from './componentes/spinner/spinner.module';
import { SpinnerComponent } from './componentes/spinner/spinner.component';







@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ContactoComponent,
    FooterComponent,
    ProyectosComponent,
    LoginComponent,
    PortfolioComponent,
 
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SpinnerModule,

  ],
 
  
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerIntercepor, multi: true }
  ],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
   


