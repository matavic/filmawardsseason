import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AwardsComponent } from './awards/awards.component';
import { CategoriesComponent } from './categories/categories.component';


const routes: Routes = [
  {
    path: "awards", component: AwardsComponent
  },
  {
    path: "categories", component: CategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
