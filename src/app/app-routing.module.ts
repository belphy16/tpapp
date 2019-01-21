import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { TestpdfComponent } from './testpdf/testpdf.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'input', component: InputComponent },
  { path: 'output', component: OutputComponent },
  { path: 'testpdf', component: TestpdfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
