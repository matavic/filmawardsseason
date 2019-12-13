import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbCollapseModule, NgbCarouselModule, NgbModalModule, NgbPopoverModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxUiLoaderModule } from  'ngx-ui-loader';
import { AwardsComponent } from './awards/awards.component';
import { CategoriesComponent } from './categories/categories.component';
import { AwardComponent } from './award/award.component';
import { MainComponent } from './main/main.component';
import { CategoryComponent } from './category/category.component';
import { ResultsComponent } from './results/results.component';
import { TrailerModalComponent } from './trailer-modal/trailer-modal.component';
import { SelectionStatisticComponent } from './statistics/selection-statistic/selection-statistic.component';
import { PresentationStatisticComponent } from './statistics/presentation-statistic/presentation-statistic.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoadedDirective } from './loaded.directive';

@NgModule({
  declarations: [
    AppComponent,
    AwardsComponent,
    CategoriesComponent,
    AwardComponent,
    MainComponent,
    CategoryComponent,
    ResultsComponent,
    TrailerModalComponent,
    SelectionStatisticComponent,
    PresentationStatisticComponent,
    PageNotFoundComponent,
    LoadedDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbCollapseModule,
    NgbCarouselModule,
    NgbPopoverModule,
    NgbModalModule,
    NgbTooltipModule,
    HttpClientModule,
    NgxUiLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TrailerModalComponent]
})
export class AppModule { }
