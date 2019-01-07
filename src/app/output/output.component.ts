import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  o_IAmount: string;
  o_ITax: string;
  msg: string;

  o_CTax: string;
  o_CTotal: string;

  getDataFromSS() {
    this.o_IAmount = sessionStorage.getItem('inputed_amt');
    this.o_ITax = sessionStorage.getItem('inputed_tax');
    this.o_CTax = sessionStorage.getItem('calculated_tax');
    this.o_CTotal = sessionStorage.getItem('calculated_total');
  }

  constructor(private calc: CalculatorService ) { }

  ngOnInit() {
    this.msg = this.calc.displayMessage();
    this.getDataFromSS();
  }

}
