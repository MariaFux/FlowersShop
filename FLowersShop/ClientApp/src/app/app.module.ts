import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/home/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { ViewComponent } from './components/view/view.component';
import { CartComponent } from './components/cart/cart.component';
import { ImageGalleryComponent } from './components/home/image-gallery/image-gallery.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SectionsCardsComponent } from './components/home/sections-cards/sections-cards.component';
import { NewArrivalComponent } from './components/home/new-arrival/new-arrival.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScreenHeaderComponent } from './components/screen-header/screen-header.component';
import { CartSummaryComponent } from './components/cart/cart-summary/cart-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CartComponent,
    ViewComponent,
    ImageGalleryComponent,
    SectionsCardsComponent,
    NewArrivalComponent,
    FooterComponent,
    ScreenHeaderComponent,
    CartSummaryComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'cart', component: CartComponent },
      { path: 'view', component: ViewComponent },
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
