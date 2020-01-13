import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CheckboxOverviewExampleComponent } from './checkbox-overview-example/checkbox-overview-example.component';
import { AutocompleteOptgroupExampleComponent } from './autocomplete-optgroup-example/autocomplete-optgroup-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    CheckboxOverviewExampleComponent,
    AutocompleteOptgroupExampleComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatSliderModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    FormsModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
