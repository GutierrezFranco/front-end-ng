import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HeroComponent } from './componentes/hero/hero.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HttpClientModule } from '@angular/common/http';
import { SkillsComponent } from './componentes/skills/skills.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AcercaComponent,
    ProyectosComponent,
    FooterComponent,
    ContactoComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
