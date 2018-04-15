import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListingScreenModule } from './modules/listing-screen/listing-screen.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [

    BrowserModule,
    ListingScreenModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
