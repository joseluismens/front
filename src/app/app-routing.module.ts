import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevoPesajeComponent } from './components/pesajes/nuevo-pesaje/nuevo-pesaje.component';
import { DeshabilitarPesajeComponent } from './components/pesajes/deshabilitar-pesaje/deshabilitar-pesaje.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { HomeComponent } from './components/home/home.component';
import { ListarPesajesComponent } from './components/pesajes/listar-pesajes/listar-pesajes.component';
import { ErrorComponent } from './components/error/error.component';
import { NuevoPedidoComponent } from './components/pedido/nuevo-pedido/nuevo-pedido.component';
import { PhotoListComponent } from './components/photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './components/photos/photo-form/photo-form.component';
import { PhotoPreviewComponent } from './components/photos/photo-preview/photo-preview.component';
import { ListSilosComponent } from './components/silos/list-silos/list-silos.component';
import { CreateSiloComponent } from './components/silos/create-silo/create-silo.component';
import { ConfigureSiloComponent } from './components/silos/configure-silo/configure-silo.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from "./auth.guard";
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'

  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'catalogo',
    component: PhotoListComponent,
    canActivate: [AuthGuard]
  },

  { path: 'signup', component: SignupComponent },
  {
    path: 'pesajes/nuevo-pesaje',
    component: NuevoPesajeComponent,
    canActivate: [AuthGuard]


  },
  {
    path: 'pesajes/deshabilitar-pesaje', component: DeshabilitarPesajeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'clientes', component: ClientesComponent, canActivate: [AuthGuard]
  },
  {
    path: 'pesajes/listar-pesaje', component: ListarPesajesComponent, canActivate: [AuthGuard]
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'pedido/nuevo-pedido', component: NuevoPedidoComponent, canActivate: [AuthGuard]
  },
  {
    path: 'catalogo/new', component: PhotoFormComponent, canActivate: [AuthGuard]
  },
  {
    path: 'catalogo/:id', component: PhotoPreviewComponent, canActivate: [AuthGuard]
  },
  {
    path: 'silos', component: ListSilosComponent, canActivate: [AuthGuard]
  },

  {
    path: 'silos/new', component: CreateSiloComponent, canActivate: [AuthGuard]
  },
  {
    path: 'silos/:id', component: ConfigureSiloComponent, canActivate: [AuthGuard]
  },



  {path:'user',component:UserComponent},
  { path: '**', component: ErrorComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
