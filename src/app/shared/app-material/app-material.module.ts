//Esse módulo será utilizado para importar todos os componentes do Angular Material.
//Será compartilhado com todos os outros componentes.
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';




@NgModule({
  exports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class AppMaterialModule { }
