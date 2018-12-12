import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  msg: string;

  constructor(private calc: CalculatorService ) { }

  ngOnInit() { 
    this.msg = this.calc.displayMessage();
  }

}
