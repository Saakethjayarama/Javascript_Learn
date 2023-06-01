import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NameComponent } from './name/name.component';
import { BioComponent } from './bio/bio.component';
import { StudentService } from './student.service';

@NgModule({
  declarations: [AppComponent, NameComponent, BioComponent],
  imports: [BrowserModule],
  providers: [StudentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
