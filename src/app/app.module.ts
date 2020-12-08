import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherIllustrationComponent, WeatherImagePipe } from './weather-illustration/weather-illustration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherComponent } from './weather/weather.component';
import { PracticeFormComponent } from './practice-form/practice-form.component';
import { BasicHighlightDirective } from './basic-highlight.directive';
import { TestComponent } from './test/test.component';
import { MarkedPipe } from './share/marked.pipe';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from './environment';

@NgModule({
  declarations: [
    AppComponent,
    WeatherIllustrationComponent,
    WeatherImagePipe,
    WeatherComponent,
    PracticeFormComponent,
    BasicHighlightDirective,
    TestComponent,
    MarkedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
