import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RequestComponentComponent } from './request-component/request-component.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: 'request-component', component:RequestComponentComponent},
  {path: 'about', component:AboutComponent},
  {path: '', redirectTo: '/request-component', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    RequestComponentComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
