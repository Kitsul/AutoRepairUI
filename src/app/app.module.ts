import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppoimtmentComponent } from './components/appoimtment/appoimtment.component';
import { HeaderComponent } from './components/header/header.component';
import { OffersComponent } from './components/offers/offers.component';
import { HttpClientModule } from '@angular/common/http';
import { AutorepairService } from './services/autorepair.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AppoimtmentComponent,
    HeaderComponent,
    OffersComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AutorepairService],
  bootstrap: [AppComponent]
})
export class AppModule { }
