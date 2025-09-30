// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { SubmenuComponent } from './pages/submenu/submenu.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'main-menu', pathMatch: 'full' },
  { path: 'main-menu', component: MainMenuComponent },
  { path: 'submenu', component: SubmenuComponent },
  { path: '**', redirectTo: 'main-menu' }
];