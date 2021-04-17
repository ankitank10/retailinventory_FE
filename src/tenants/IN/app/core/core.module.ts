import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InterceptorService } from './interceptors/interceptor.service';
import {HeaderComponent} from './components/header/header.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  declarations: [HeaderComponent],
  exports: [FormsModule, HttpClientModule, HeaderComponent],
})
export class CoreModule {}
