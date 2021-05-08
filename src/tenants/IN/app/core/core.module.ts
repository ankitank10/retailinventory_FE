import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InterceptorService } from './interceptors/interceptor.service';
import { HeaderComponent } from './components/header/header.component';
import { MdbModule } from 'mdb-angular-ui-kit';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, HttpClientModule, MdbModule, RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  declarations: [HeaderComponent],
  exports: [FormsModule, HttpClientModule, MdbModule, HeaderComponent],
})
export class CoreModule { }
