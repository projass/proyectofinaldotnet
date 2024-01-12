import { Routes } from '@angular/router';
import { LoginComponent } from './menu/login/login.component';
import { MenuComponent } from './menu/menu/menu.component';
import { NotfoundComponent } from './menu/notfound/notfound.component';
import { AyudasComponent } from './Recursos/ayudas/ayudas.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormacionComponent } from './Recursos/formacion/formacion.component';
import { InclusionComponent } from './Recursos/inclusion/inclusion.component';
import { OcioComponent } from './Recursos/ocio/ocio.component';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'login', component: LoginComponent },
    { path: 'ayudas', component: AyudasComponent},
    { path: 'formacion', component: FormacionComponent},
    { path: 'inclusion', component: InclusionComponent},
    { path: 'ocio', component: OcioComponent},
    { path: 'visual', component: OcioComponent},
    { path: 'fisica', component: OcioComponent},
    { path: 'auditiva', component: OcioComponent},
    { path: 'cognitiva', component: OcioComponent},
    { path: '**', component: NotfoundComponent }
  ];
