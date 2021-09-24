import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/home/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SectionsCardsComponent } from './components/home/sections-cards/sections-cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScreenHeaderComponent } from './components/screen-header/screen-header.component';
import { SearchComponent } from './components/search/search.component';
import { SocialNetworksComponent } from './components/social-networks/social-networks.component';
import { DeliveryPayComponent } from './components/delivery-pay/delivery-pay.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { MatFormFieldModule, MatGridListModule, MatSelectModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    SectionsCardsComponent,
    FooterComponent,
    ScreenHeaderComponent,
    SearchComponent,
    SocialNetworksComponent,
    DeliveryPayComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'search', component: SearchComponent },
      { path: 'delivery-pay', component: DeliveryPayComponent },
      { path: 'contacts', component: ContactsComponent },
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
