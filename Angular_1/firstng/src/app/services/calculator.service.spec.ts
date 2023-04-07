import { CalculatorService } from "./calculator.service";



describe ('calculatorService',()=>{

it('computes factorial of 5 and gives 120',
()=>{

let service= new CalculatorService();
let result= service.factorial(5);
expect(result).toBe(120);

}); //end of it

it('computes power',()=>{
  let service= new CalculatorService();
  let result= service.power(2,5);
  expect(result).toEqual(32);
  
  });
}); //end of describe



