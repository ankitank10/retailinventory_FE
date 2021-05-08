import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './home/home-view/home-view.component';
const routes: Routes = [
  { path: '', component: HomeViewComponent, pathMatch: 'full' },
  {
    path: 'cart',
    loadChildren: () =>
      import('./cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'category/:catId/:subCatId',
    loadChildren: () =>
      import('./category/category.module').then((m) => m.CategoryModule),
  },
  {
    path: 'product/:productId',
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
