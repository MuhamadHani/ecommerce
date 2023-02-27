import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpperComponent } from './upper/upper.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdsComponent } from './ads/ads.component';
import { FilterComponent } from './filter/filter.component';
import { ProductHComponent } from './product-h/product-h.component';
import { ProductComponent } from './product/product.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { DealsComponent } from './deals/deals.component';
import { WhatsnewComponent } from './whatsnew/whatsnew.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    UpperComponent,
    NavbarComponent,
    AdsComponent,
    FilterComponent,
    ProductHComponent,
    ProductComponent,
    CategoriesComponent,
    HomeComponent,
    DealsComponent,
    WhatsnewComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
