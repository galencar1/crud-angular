import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';



@NgModule({
  declarations: [
    ErrorDialogComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
  ],
  //Exportando o component para ser utilizado em todos os componentes da aplicação
  exports: [ErrorDialogComponent]
})
export class SharedModule { }
