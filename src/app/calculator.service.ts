import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  amount: number;
  tax: number;
  vattype: string;

  constructor(amount: number, tax: number, vattype: string) {
    this.amount = amount;
    this.tax = tax;
    this.vattype = vattype;
  }

  displayInputAmount() {
    return this.amount;
  }

  displayInputTax() {
    return this.tax;
  }

  displayCalcTax() {
    return null;
  }

}
