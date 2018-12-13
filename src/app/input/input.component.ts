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

  selectedTax = 'fVat';

  vats: Vatdesc[] = [
    {value: 'fVat', viewValue: 'Forward VAT'},
    {value: 'rVat', viewValue: 'Reverse VAT'}

  ];

  msg: string;
  // sum: number;

  constructor(private calc: CalculatorService ) { }

  ngOnInit() {
    this.msg = this.calc.displayMessage();
    // this.sum = this.calc.displaySum(inputAmount, inputTax)
  }

}
