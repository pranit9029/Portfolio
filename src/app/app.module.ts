import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginComponent } from './components/login/login.component';
import {RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {SlideshowModule} from 'ng-simple-slideshow';

const routes:Routes=[
  {path:'Home',component:HomeComponent},
  {path:'About Us',component:AboutUsComponent},
  {path:'Contact Us',component:ContactUsComponent},
  {path:'Login',component:LoginComponent},
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
