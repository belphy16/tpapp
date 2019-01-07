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

  calcTax;
  calcTotal;

  saveDataToSS() {
    sessionStorage.setItem('inputed_amt', this.inputAmount);
    sessionStorage.setItem('inputed_tax', this.inputTax);
    sessionStorage.setItem('calculated_tax', this.calcTax);
    sessionStorage.setItem('calculated_total', this.calcTotal);
  }

  constructor(private calc: CalculatorService ) { }

  ngOnInit() {
    this.msg = this.calc.displayMessage();
    this.calcTax = this.calc.displayTaxPaid(this.inputAmount, this.inputTax, this.selectedTax);
    this.calcTotal = this.calc.displayCalcResult(this.inputAmount, this.inputTax, this.selectedTax);
    // this.saveDataToSS();
    // this.sum = this.calc.displaySum(inputAmount, inputTax)
  }

}
