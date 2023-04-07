import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent {
  private url: string = "https://jsonplaceholder.typicode.com/todos";
  private data: any;

  constructor(private http:HttpClient){
    
  }

ngOnInit(): void{
  console.log('ngOnInit()....');
  
  
  this.http.get(this.url).subscribe((resData)=>{
    this.data = resData;
    console.log(this.data);
  });
}

//every http request in angular is asynchronous - XHR - Ajax
//cause: it cause page navigation
//every http request is synchronous, whereas in angular it is asynchronous

}
