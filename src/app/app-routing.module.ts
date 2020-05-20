
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AppComponent } from './app.component';
import { FirstComponent } from './first.component';

 const routes: Routes = [
  { path: 'first-component', component: FirstComponent }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

 
}