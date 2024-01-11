import { Routes } from '@angular/router';
import { LoginComponent } from './menu/login/login.component';
import { MenuComponent } from './menu/menu/menu.component';
import { NotfoundComponent } from './menu/notfound/notfound.component';
import { AyudasComponent } from './Recursos/ayudas/ayudas.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'login', component: LoginComponent },
    { path: 'ayudas', component: AyudasComponent},
    { path: '**', component: NotfoundComponent }
  ];
