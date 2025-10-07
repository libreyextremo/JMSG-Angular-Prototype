import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogList } from './features/catalog/components/catalog-list/catalog-list';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CatalogList },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
