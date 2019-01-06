import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  inputAmount: string;
  inputTax: string;
  msg: string;

  getDataFromSS() {
    this.inputAmount = sessionStorage.getItem('inputed_amt');
    this.inputTax = sessionStorage.getItem('inputed_tax');
  }

  constructor(private calc: CalculatorService ) { }

  ngOnInit() {
    this.msg = this.calc.displayMessage();
    this.getDataFromSS();
  }

}
