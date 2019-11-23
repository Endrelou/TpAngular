import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MusiqueComponent } from './musique/musique.component';
import { FormusiqueComponent } from './formusique/formusique.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from'@angular/material/checkbox';
import { MatFormFieldModule } from'@angular/material/form-field';
import { MatButtonModule } from'@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    MusiqueComponent,
    FormusiqueComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
