import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AwardsComponent } from './awards/awards.component';
import { CategoriesComponent } from './categories/categories.component';
import { AwardComponent } from './award/award.component';
import { MainComponent } from './main/main.component';
import { CategoryComponent } from './category/category.component';
import { ResultsComponent } from './results/results.component';
import { SelectionStatisticComponent } from './statistics/selection-statistic/selection-statistic.component';
import { PresentationStatisticComponent } from './statistics/presentation-statistic/presentation-statistic.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: "award/:awardname", component: AwardComponent
  },
  {
    path: "category/:categoryname", component: CategoryComponent
  },
  {
    path: "results/:search", component: ResultsComponent
  },
  {
    path: "awards", component: AwardsComponent
  },
  {
    path: "categories", component: CategoriesComponent
  },
  {
    path: 'statistics', component: SelectionStatisticComponent
  },
  {
    path: 'statistics/:type', component: PresentationStatisticComponent
  },
  {
    path: "", component: MainComponent
  },
  { 
    path: '**', component: PageNotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
