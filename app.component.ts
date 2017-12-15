//Imports
import { Component } from '@angular/core';
//Decorator
@Component({
selector: 'hello-world2',
templateUrl: 'app.component.html'
})
//Class
export class AppComponent {
constructor() {}
title: string = 'This is my fist app: Angular 4 Hello World';
}