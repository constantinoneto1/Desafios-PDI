import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoAdicionaComponent } from './botao-adiciona/botao-adiciona.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TabelaComponent } from './tabela.component';
import { BotaoDeletaComponent } from './botao-deleta/botao-deleta.component';



@NgModule({
  declarations: [
    TabelaComponent,
    BotaoAdicionaComponent,
    BotaoDeletaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports : [
    TabelaComponent
  ]
})
export class TabelaModule { }
