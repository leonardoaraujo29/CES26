//Import angular core
import { NgModule } from '@angular/core';
//Import Browser module
import { BrowserModule } from '@angular/platform-browser';
//Import App Component
import { AppComponent } from './app.component';
//Declarations
@NgModule({
imports: [ BrowserModule ],
declarations: [ AppComponent ],
bootstrap: [ AppComponent ]
})
//Bootstrap
export class AppModule {}