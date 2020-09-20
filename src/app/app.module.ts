import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/restaurant/home/home.component';
import { MenuComponent } from './components/restaurant/menu/menu.component';

import { ReviewsComponent } from './components/restaurant/reviews/reviews.component';

import { HallComponent } from './components/restaurant/hall/hall.component';
import { RestComponent } from './components/restaurant/rest/rest.component';
import { AppRoutingModule } from './app-routing.module';
import { ImageService } from './service/image.service';
import { ContactComponent } from './components/restaurant/contact/contact.component';
import { FromComponent } from './components/restaurant/reviews/from/from.component';
import { ListComponent } from './components/restaurant/reviews/list/list.component';
import { ItemComponent } from './components/restaurant/reviews/item/item.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';

import { AdminlistComponent } from './components/adminlist/adminlist.component';
import { SalatlistComponent } from './components/admin/salat/salatlist/salatlist.component';
import { SalatAddComponent } from './components/admin/salat/salat-add/salat-add.component';
import { SalatEditComponent } from './components/admin/salat/salat-edit/salat-edit.component';


import { FirstCoursesAddComponent } from './components/admin/first-courses/first-courses-add/first-courses-add.component';
import { FirstCoursesEditComponent } from './components/admin/first-courses/first-courses-edit/first-courses-edit.component';
import { FirstCoursesListComponent } from './components/admin/first-courses/first-courses-list/first-courses-list.component';


import { CoursesAddComponent } from './components/admin/courses/courses-add/courses-add.component';
import { CoursesEditComponent } from './components/admin/courses/courses-edit/courses-edit.component';
import { CoursesListComponent } from './components/admin/courses/courses-list/courses-list.component';


import { SecondsCoursesAddComponent } from './components/admin/seconds-courses/seconds-courses-add/seconds-courses-add.component';
import { SecondsCoursesEditComponent } from './components/admin/seconds-courses/seconds-courses-edit/seconds-courses-edit.component';
import { SecondsCoursesListComponent } from './components/admin/seconds-courses/seconds-courses-list/seconds-courses-list.component';


import { DrinksAddComponent } from './components/admin/drinks/drinks-add/drinks-add.component';
import { DrinksEditComponent } from './components/admin/drinks/drinks-edit/drinks-edit.component';
import { DrinksListComponent } from './components/admin/drinks/drinks-list/drinks-list.component';


import { ImageRAddComponent } from './components/admin/imageR/image-r-add/image-r-add.component';
import { ImageRListComponent } from './components/admin/imageR/image-r-list/image-r-list.component';


import { ImageHAddComponent } from './components/admin/imageH/image-h-add/image-h-add.component';
import { ImageHListComponent } from './components/admin/imageH/image-h-list/image-h-list.component';


import { LoginAddComponent } from './components/admin/login/login-add/login-add.component';
import { LoginEditComponent } from './components/admin/login/login-edit/login-edit.component';
import { LoginListComponent } from './components/admin/login/login-list/login-list.component';


import { ImageDrinkAddComponent } from './components/admin/drinks/image-drink-add/image-drink-add.component';

import { ImageFirstAddComponent } from './components//admin/first-courses/image-first-add/image-first-add.component';

import { ImageSecondsAddComponent } from './components/admin/seconds-courses/image-seconds-add/image-seconds-add.component';

import { ImageCoursesAddComponent } from './components/admin/courses/image-courses-add/image-courses-add.component';

import { ImageSalatAddComponent } from './components/admin/salat/image-salat-add/image-salat-add.component';
import { CardComponent } from './components/card/card.component';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ThanksComponent } from './components/thanks/thanks.component';
import { ContactsComponent } from './components/admin/contacts/contacts.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    ReviewsComponent,
    ContactComponent,
    HallComponent,
    RestComponent,
    FromComponent,
    ListComponent,
    ItemComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    AdminlistComponent,
    SalatlistComponent,
    SalatAddComponent,
    SalatEditComponent,
    FirstCoursesAddComponent,
    FirstCoursesEditComponent,
    FirstCoursesListComponent,
    CoursesAddComponent,
    CoursesEditComponent,
    CoursesListComponent,
    SecondsCoursesAddComponent,
    SecondsCoursesEditComponent,
    SecondsCoursesListComponent,
    DrinksAddComponent,
    DrinksEditComponent,
    DrinksListComponent,
    ImageRAddComponent,
    ImageRListComponent,
    ImageHAddComponent,
    ImageHListComponent,
    LoginAddComponent,
    LoginEditComponent,
    LoginListComponent,
    ImageDrinkAddComponent,
    ImageFirstAddComponent,
    ImageSecondsAddComponent,
    ImageCoursesAddComponent,
    ImageSalatAddComponent,
    CardComponent,
    ThanksComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  
  ],
  providers: [ImageService,{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
