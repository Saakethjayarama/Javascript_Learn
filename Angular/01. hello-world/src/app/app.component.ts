import { Component } from '@angular/core';

// component decorator
/**
 * Is a function that attaches to the class that is right below it in this case AppComponent Class
 * This decorator tells angular that the class is not plane class instead it is component
 * Contains both metadata and the template which represents view
 */
@Component({
  selector: 'app-root', // a custom html tag to represent this component
  templateUrl: './app.component.html', // template for that custom html tag is defined here
  styleUrls: ['./app.component.css'], // the css for that template is defined here
})
export class AppComponent {
  title = 'Hello-world';
}
