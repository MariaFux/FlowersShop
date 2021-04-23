import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { ViewComponent } from './components/view/view.component';
import { CartComponent } from './components/cart/cart.component';
import { ImageGalleryComponent } from './components/home/image-gallery/image-gallery.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SectionsCardsComponent } from './components/home/sections-cards/sections-cards.component';
import { NewArrivalComponent } from './components/home/new-arrival/new-arrival.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { ScreenHeaderComponent } from './components/screen-header/screen-header.component';

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
    ScreenHeaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
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
