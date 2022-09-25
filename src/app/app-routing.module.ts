import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdkarComponent } from './components/adkar/adkar.component';

const routes: Routes = [
  { path: '**', redirectTo: 'adkar?type=morning', pathMatch: 'full' },

  {
    path: 'adkar',
    component: AdkarComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
