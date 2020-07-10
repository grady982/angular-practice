import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { PracticeFormComponent } from './practice-form/practice-form.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'lesson1', component: PracticeFormComponent },
      { path: 'lesson2', component: WeatherComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
