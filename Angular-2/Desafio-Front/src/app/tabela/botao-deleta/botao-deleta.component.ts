import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TabelaService } from '../tabela.service';

@Component({
  selector: 'app-botao-deleta',
  templateUrl: './botao-deleta.component.html',
  styleUrls: ['./botao-deleta.component.css']
})
export class BotaoDeletaComponent implements OnInit {

  @Input() id : any

  @Input() estado : any

  @Output() produtoDeletado = new EventEmitter

  @Output() escondeBotaoAtualiza = new EventEmitter

  modal : boolean = false

  constructor(private tabelaService : TabelaService) { }

  deletaProdutos(){
    console.log(this.id)
    this.tabelaService.deletarProduto(this.id).subscribe(
      sucesso => {
        console.log('Deletado com sucesso')
        this.produtoDeletado.emit()
      }
    )
  }

  escondeModal(){
    return this.modal
  }

  abrirModal(){
    this.escondeBotaoAtualiza.emit()
    this.modal = !this.modal
  }
  
  escondeBotao(){
    return this.estado
  }

  ngOnInit(): void {
  }

}
