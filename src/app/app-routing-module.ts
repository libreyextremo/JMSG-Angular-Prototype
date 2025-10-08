import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogList } from './features/catalog/components/catalog-list/catalog-list';
import { CatalogDetail } from './features/catalog/components/catalog-detail/catalog-detail';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CatalogList },
  { path: 'item/:id', component: CatalogDetail },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
