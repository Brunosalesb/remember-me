import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { EventosComponent } from './pages/eventos/eventos/eventos.component';
import { EventosCadastroComponent } from './pages/eventos/eventos-cadastro/eventos-cadastro.component';
import { EventosService } from './services/eventos.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './pages/auth/auth.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosService } from './services/usuarios.service';
import { AuthGuard } from './utils/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EventosComponent,
    EventosCadastroComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EventosService, AuthService, UsuariosService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
