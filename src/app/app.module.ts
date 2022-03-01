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
import { OffercardComponent } from './myComponents/offercard/offercard.component';
import { OffersComponent } from './myComponents/offers/offers.component';
import { ContactcardComponent } from './myComponents/contactcard/contactcard.component';
import { TopbrandsComponent } from './myComponents/topbrands/topbrands.component';
import { FeaturecardComponent } from './myComponents/featurecard/featurecard.component';
import { FeaturesComponent } from './myComponents/features/features.component';
import { CategorycardComponent } from './myComponents/categorycard/categorycard.component';
import { CategoriesComponent } from './myComponents/categories/categories.component';
import { CommentcardComponent } from './myComponents/commentcard/commentcard.component';
import { CommentsComponent } from './myComponents/comments/comments.component';
import { SubscribeComponent } from './myComponents/subscribe/subscribe.component';

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
    LabcardComponent,
    OffercardComponent,
    OffersComponent,
    ContactcardComponent,
    TopbrandsComponent,
    FeaturecardComponent,
    FeaturesComponent,
    CategorycardComponent,
    CategoriesComponent,
    CommentcardComponent,
    CommentsComponent,
    SubscribeComponent
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
