import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
// import { Http, Response, Headers } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {routing, appRoutingProviders} from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modulos propios
import { MaterialModule } from './material.module';
import { DashboardModule } from './components/dashboard/dashboard.module';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PhotosComponent } from './components/photos/photos.component';

// Servicios
import { UserService } from './services/user.service';
import { ClientService } from './services/client.service';
import { AuthGuard } from './services/guards/login.guard';
import { UsuariosService } from './services/usuarios.service';
import { ProductService } from './services/product.service';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PhotosComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    routing,
    DashboardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService, AuthGuard, UsuariosService, ClientService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
