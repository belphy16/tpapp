import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

export interface Vatdesc {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  inputAmount: any = 70;
  inputTax: any = 19;
  selectedTax = 'fVat';

  vats: Vatdesc[] = [
    {value: 'fVat', viewValue: 'Forward VAT'},
    {value: 'rVat', viewValue: 'Reverse VAT'}

  ];

  msg: string;

  saveDataToSS() {
    sessionStorage.setItem('inputed_amt', this.inputAmount);
    sessionStorage.setItem('inputed_tax', this.inputTax);
  }

  constructor(private calc: CalculatorService ) { }

  ngOnInit() {
    this.msg = this.calc.displayMessage();
    // this.saveDataToSS();
    // this.sum = this.calc.displaySum(inputAmount, inputTax)
  }

}
