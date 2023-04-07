import { Component } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent {
  n:number=0;
  result:number=0;
  factorial(n:number){

    let fact:any=1;
  
    for(var i=1;i<=n;i++){
     fact*=i;
    }
    this.result=fact;
    }
   
    n1:number=0;
    n2:number=0;
  result1:number=0;
  sum(n1:number,n2:number){

    let sum:any=1;
  
    sum=n1+n2;
    
    this.result1=sum;
    }

    a1:number=0;
    a2:number=0;
  result2:number=0;
  multiply(a1:number,a2:number){

    let mul:any=1;
  
    mul=a1*a2;
    
    this.result2=mul;
    }

    b1:number=0;
    b2:number=0;
  result3:number=0;
  sub(b1:number,b2:number){

    let sub:any=1;
  
    sub=b1-b2;
    
    this.result3=sub;
    }

    c1:number=0;
    c2:number=0;
  result4:number=0;
  div(c1:number,c2:number){

    let div:any=1;
  
    div=c1/c2;
    
    this.result4=div;
    }

    d1:number=0;
    d2:number=0;
  result5:number=0;
  mod(d1:number,d2:number){

    let mod:any=1;
  
    mod=d1%d2;
    
    this.result5=mod;
    }

    e1:number=0;
    e2:number=0;
  result6:number=0;
  pow(e1:number,e2:number){

    let pow:any=1;
  
    pow=e1**e2;
    
    this.result6=pow;
    }

    f1:number=0;
  result7:number=0;
  square(f1:number){

    let sq:any=1;
  
    sq=f1**2;
    
    this.result7=sq;
    }


    g1:number=0;
    result8:number=0;
    cube(g1:number){
  
      let cube:any=1;
    
      cube=g1**3;
      
      this.result8=cube;
      }

      h1:number=0;
      result9:string="";
      oddeven(g1:number){
    
        if(this.h1 % 2==0){
          this.result9="even";}
        else
          this.result9="odd";
        // let oe:any=1;
      
        // cube=g1**3;
        
        // this.result8=cube;
        }  
}
