import { Routes } from '@angular/router';
import { LoginComponent } from './menu/login/login.component';
import { MenuComponent } from './menu/menu/menu.component';
import { NotfoundComponent } from './menu/notfound/notfound.component';
import { QuienesComponent } from './Informacion/quienes/quienes.component';
import { AyudasComponent } from './Recursos/ayudas/ayudas.component';

export const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'menu', component: MenuComponent },
    { path: 'login', component: LoginComponent },
    { path: 'quienes', component: QuienesComponent },
    { path: 'ayudas', component: AyudasComponent},
    { path: '**', component: NotfoundComponent }
  ];
