import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { DealsComponent } from './deals/deals.component';
import { HomeComponent } from './home/home.component';
import { WhatsnewComponent } from './whatsnew/whatsnew.component';

const routes: Routes = [
  {path:'',redirectTo:'Home',pathMatch:'full'},
  { path:'Home', component: HomeComponent},
  { path:'categories', component: CategoriesComponent},
  {path:'deals',component: DealsComponent},
  {path:'whatsnew',component: WhatsnewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
