import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { CardsComponent } from './components/cards/cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { OptionsComponent } from './components/options/options.component';
import { FormComponent } from './components/form/form.component';
import { PrecompraComponent } from './components/precompra/precompra.component';
import { HistoriaComponent } from './components/historia/historia.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CardsComponent,
    FooterComponent,
    OptionsComponent,
    FormComponent,
    PrecompraComponent,
    HistoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
