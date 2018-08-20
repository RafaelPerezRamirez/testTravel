import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTING } from './app.routes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

//Services
import { DestinationsService } from './services/destinations.service';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ShowDataComponent } from './components/show-data/show-data.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ShowDataComponent
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
      DestinationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
