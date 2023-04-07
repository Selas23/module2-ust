import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

factorial(n:number){

  let fact:any=1;

  for(var i=1;i<=n;i++){
   fact*=i;
  }
  return fact;
  }

  power(b:number, e:number){
    //this.logger.log('power method called)
  
    let result: any = 1;
    for(var i=1;i<=e;i++){
      result*=b;
    }
    return result;
  }

  constructor() { 
    
  }
}
