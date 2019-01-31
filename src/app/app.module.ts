import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatStepperModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatInputModule } from '@angular/material/input';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatDialogModule } from '@angular/material/dialog';
import { Newreviewpage1Component } from './newreviewpage1/newreviewpage1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatAutocompleteModule, MatGridListModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts';
import { ChannelWisePieComponent } from './dashboard/channel-wise-pie/channel-wise-pie.component';
import { AcceptedVsrejectedBarComponent } from './dashboard/accepted-vsrejected-bar/accepted-vsrejected-bar.component';
import { DashboardCoverflowComponent } from './dashboard/dashboard-coverflow/dashboard-coverflow.component';
import { TablePageComponent } from './table-page/table-page.component';
import { SideNavComponent } from './table-page/side-nav/side-nav.component';
import { TableHeaderComponent } from './table-page/table-header/table-header.component';
import { Routes, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { SearchBarComponent } from './header/search-bar/search-bar.component';
import { TaggingComponent } from './newreviewpage1/tagging/tagging.component';
import { AddReviewbuttonComponent } from './header/add-reviewbutton/add-reviewbutton.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';

const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent
  },{
    path: 'search',
    component: TablePageComponent
  },{ 
    path: '', 
    redirectTo: 'home',
    pathMatch: 'full' 
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    Newreviewpage1Component,
    ChannelWisePieComponent,
    AcceptedVsrejectedBarComponent,
    DashboardCoverflowComponent,
    TablePageComponent,
    SideNavComponent,
    TableHeaderComponent,
    SearchBarComponent,
    TaggingComponent,
    AddReviewbuttonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatAutocompleteModule,
    ChartsModule,
    MatGridListModule,
    RouterModule.forRoot(routes),
    MatTableModule,
    MatBadgeModule,
    MatMenuModule
  ],
  entryComponents:[
    Newreviewpage1Component
  ],
  providers: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
