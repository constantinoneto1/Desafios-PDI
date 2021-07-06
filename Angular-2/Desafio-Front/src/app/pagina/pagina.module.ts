import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaComponent } from './pagina.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TabelaModule } from '../tabela/tabela.module';

@NgModule({
  declarations: [
    PaginaComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TabelaModule
  ],
  exports: [
    PaginaComponent,
  ]
})
export class PaginaModule { }
