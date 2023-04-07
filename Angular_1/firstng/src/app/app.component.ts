import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private url:string = "https://jsonplaceholder.typicode.com/todos";
  title = 'selas';
  course = 'FSD Training';
  company = 'UST ';
  private data: any;

}


