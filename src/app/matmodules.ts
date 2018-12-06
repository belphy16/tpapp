import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { from } from 'rxjs';


@NgModule({
  imports: [
      MatButtonModule, 
      MatCheckboxModule,
      MatFormFieldModule,
      MatInputModule,
      MatRadioModule,
      MatMenuModule,
      MatSelectModule,
      MatListModule,
      MatIconModule,
      MatTableModule
],
  exports: [
      MatButtonModule, 
      MatCheckboxModule,
      MatFormFieldModule,
      MatInputModule,
      MatRadioModule,
      MatMenuModule,
      MatSelectModule,
      MatListModule,
      MatIconModule,
      MatTableModule
    ],
})
export class MatModules { }