import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './components/restaurant/home/home.component';
import { RestComponent } from './components/restaurant/rest/rest.component';
import { HallComponent } from './components/restaurant/hall/hall.component';
import { MenuComponent } from './components/restaurant/menu/menu.component';

import { ReviewsComponent } from './components/restaurant/reviews/reviews.component';
import { ContactComponent } from './components/restaurant/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { AuthService } from './service/auth.service';
import { AdminlistComponent } from './components/adminlist/adminlist.component';
import { SalatlistComponent } from './components/admin/salat/salatlist/salatlist.component';
import { SalatAddComponent } from './components/admin/salat/salat-add/salat-add.component';
import { SalatEditComponent } from './components/admin/salat/salat-edit/salat-edit.component';
import { FirstCoursesListComponent } from './components/admin/first-courses/first-courses-list/first-courses-list.component';
import { CoursesListComponent } from './components/admin/courses/courses-list/courses-list.component';
import { FirstCoursesAddComponent } from './components/admin/first-courses/first-courses-add/first-courses-add.component';
import { FirstCoursesEditComponent } from './components/admin/first-courses/first-courses-edit/first-courses-edit.component';
import { CoursesAddComponent } from './components/admin/courses/courses-add/courses-add.component';
import { CoursesEditComponent } from './components/admin/courses/courses-edit/courses-edit.component';
import { SecondsCoursesListComponent } from './components/admin/seconds-courses/seconds-courses-list/seconds-courses-list.component';
import { SecondsCoursesAddComponent } from './components/admin/seconds-courses/seconds-courses-add/seconds-courses-add.component';
import { SecondsCoursesEditComponent } from './components/admin/seconds-courses/seconds-courses-edit/seconds-courses-edit.component';
import { DrinksListComponent } from './components/admin/drinks/drinks-list/drinks-list.component';
import { DrinksAddComponent } from './components/admin/drinks/drinks-add/drinks-add.component';
import { DrinksEditComponent } from './components/admin/drinks/drinks-edit/drinks-edit.component';
import { ImageRListComponent } from './components/admin/imageR/image-r-list/image-r-list.component';
import { ImageRAddComponent } from './components/admin/imageR/image-r-add/image-r-add.component';
import { ImageHListComponent } from './components/admin/imageH/image-h-list/image-h-list.component';
import { ImageHAddComponent } from './components/admin/imageH/image-h-add/image-h-add.component';
import { LoginListComponent } from './components/admin/login/login-list/login-list.component';
import { LoginAddComponent } from './components/admin/login/login-add/login-add.component';
import { LoginEditComponent } from './components/admin/login/login-edit/login-edit.component';
import { ImageDrinkAddComponent } from './components/admin/drinks/image-drink-add/image-drink-add.component';
import { ImageSecondsAddComponent } from './components/admin/seconds-courses/image-seconds-add/image-seconds-add.component';
import { ImageSalatAddComponent } from './components/admin/salat/image-salat-add/image-salat-add.component';
import { ImageFirstAddComponent } from './components/admin/first-courses/image-first-add/image-first-add.component';
import { ImageCoursesAddComponent } from './components/admin/courses/image-courses-add/image-courses-add.component';
import { CardComponent } from './components/card/card.component';
import { ThanksComponent } from './components/thanks/thanks.component';
import { ContactsComponent } from './components/admin/contacts/contacts.component';


const appRoutes: Routes =[
    // { path: '', component: AppComponent},
    //{ path: '',pathMatch:'full',redirectTo:'/login'},
    { path: '', component: HomeComponent},
    { path: 'rest', component: RestComponent},


    { path: 'login', component: LoginComponent},
    { path: 'listlogin', component: LoginListComponent},
    { path: 'login/add', component: LoginAddComponent },
    { path: 'login/:id', component: LoginEditComponent },




    
    { path: 'register', component: RegisterComponent},


    { path: 'hall', component: HallComponent},


    { path: 'menu', component: MenuComponent},


    { path: 'listsalat', component: SalatlistComponent},
    { path: 'salat/add', component: SalatAddComponent },
    { path: 'salat/:id', component: SalatEditComponent },
    { path: 'imageSalat/:add', component: ImageSalatAddComponent },


    { path: 'listfirstcourses', component: FirstCoursesListComponent},
    { path: 'firstcourses/add', component: FirstCoursesAddComponent },
    { path: 'firstcourses/:id', component: FirstCoursesEditComponent },
    { path: 'imageFirst/:add', component: ImageFirstAddComponent },


    { path: 'listcourses', component: CoursesListComponent},
    { path: 'courses/add', component: CoursesAddComponent },
    { path: 'courses/:id', component: CoursesEditComponent },
    { path: 'imageCourses/:add', component: ImageCoursesAddComponent },


    { path: 'listsecondscourses', component: SecondsCoursesListComponent},
    { path: 'secondscourses/add', component: SecondsCoursesAddComponent },
    { path: 'secondscourses/:id', component: SecondsCoursesEditComponent },
    { path: 'imageSeconds/:add', component: ImageSecondsAddComponent },


    { path: 'listdrinks', component: DrinksListComponent},
    { path: 'drinks/add', component: DrinksAddComponent },
    { path: 'drinks/:id', component: DrinksEditComponent },
    { path: 'imageDrinks/add', component: ImageDrinkAddComponent },


    { path: 'listimages', component: ImageRListComponent},
    { path: 'images/add', component: ImageRAddComponent },

    { path: 'listimagesH', component: ImageHListComponent},
    { path: 'imagesH/add', component: ImageHAddComponent },
  
    { path: 'contact', component: ContactComponent},
    { path: 'listContacts', component: ContactsComponent
  },


    { path: 'cards', component: CardComponent},

    { path: 'thanks', component: ThanksComponent},


    { path: 'reviews', component: ReviewsComponent},


    {path: 'listadmin' , component:AdminlistComponent},
    { path: '**', component: PageNotFoundComponent},

    
  ]; // sets up routes constant where you define your routes

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }