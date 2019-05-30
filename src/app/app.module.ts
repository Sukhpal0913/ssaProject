import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { RouterConfig } from './app.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PastWinnersComponent } from './modules/components/past-winners/past-winners.component';
import { JudgesComponent } from './modules/components/judges/judges.component';
import { AboutAwardsComponent } from './modules/components/about-awards/about-awards.component';
import { ModernSlaveryComponent } from './modules/components/modern-slavery/modern-slavery.component';
import { HomeComponent } from './modules/components/home/home.component';
import { TermsConditionComponent } from './modules/components/terms-condition/terms-condition.component';
import { CategoriesComponent } from './modules/components/categories/categories.component';



import { HttpService } from './modules/shared_services/http.service';


@NgModule({
  declarations: [
    AppComponent,
    PastWinnersComponent,
    JudgesComponent,
    AboutAwardsComponent,
    ModernSlaveryComponent,
    HomeComponent,
    TermsConditionComponent,
    CategoriesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(RouterConfig),
    NgbModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
