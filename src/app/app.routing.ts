import { Routes } from '@angular/router';
import { PastWinnersComponent } from './modules/components/past-winners/past-winners.component';
import { JudgesComponent } from './modules/components/judges/judges.component';
import { AboutAwardsComponent } from './modules/components/about-awards/about-awards.component';
import { ModernSlaveryComponent } from './modules/components/modern-slavery/modern-slavery.component';
import { HomeComponent } from './modules/components/home/home.component';
import { TermsConditionComponent } from './modules/components/terms-condition/terms-condition.component';
import { CategoriesComponent } from './modules/components/categories/categories.component';
import { AwardApplicationComponent } from './modules/components/award-application/award-application.component';

const router: Routes = [
   {path: '', component: HomeComponent},
  {path: 'past-winners', component: PastWinnersComponent},
  {path: 'judges', component: JudgesComponent},
  {path: 'about-awards', component: AboutAwardsComponent},
  {path: 'what-is-modern-slavery-and-human-trafficking', component: ModernSlaveryComponent},
  {path: 'terms-and-conditions', component: TermsConditionComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'award-application/:url', component: AwardApplicationComponent}
]

export const RouterConfig = router