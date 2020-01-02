import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcPipe } from './pipes/tc.pipe';




@NgModule({
  declarations: [TcPipe],
  exports: [TcPipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
