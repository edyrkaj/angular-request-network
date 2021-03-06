import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequestComponent } from './request.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { BlockiesModule } from 'angular-blockies';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BlockiesModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  declarations: [
    RequestComponent
  ],
  exports: [
    RequestComponent
  ]
})
export class RequestModule { }
