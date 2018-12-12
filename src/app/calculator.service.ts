import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class CalculatorService {
 /* amount: number;
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
    if (this.vattype == "fVat") {
      let total_tax_paid = (this.tax / 100) * this.amount;
      let total_plus_tax = +total_tax_paid + +this.amount;
      return total_plus_tax;
    }
  }
  */

  displayMessage() {
    return "Fuck You!";
  }

}
