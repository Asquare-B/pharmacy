import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './myComponents/header/header.component';
import { NavbarComponent } from './myComponents/navbar/navbar.component';
import { FooterComponent } from './myComponents/footer/footer.component';
import { HomeComponent } from './myComponents/home/home.component';
import { SearchbarComponent } from './myComponents/searchbar/searchbar.component';
import { FeatureComponent } from './myComponents/feature/feature.component';
import { ArticleComponent } from './myComponents/article/article.component';
import { LabcardComponent } from './myComponents/labcard/labcard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SearchbarComponent,
    FeatureComponent,
    ArticleComponent,
    LabcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
