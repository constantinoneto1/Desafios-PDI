import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';
import { TabelaService } from '../tabela.service';

@Component({
  selector: 'app-botao-adiciona',
  templateUrl: './botao-adiciona.component.html',
  styleUrls: ['./botao-adiciona.component.css']
})
export class BotaoAdicionaComponent implements OnInit {
  
  @Input() id : any

  @Input() estado : any

  @Output() produtoAtualizado = new EventEmitter

  @Output() escondeBotaoDeleta = new EventEmitter

  produto : any = {
    nome : null,
    preco : null,
    validade : null
  }

  modal : boolean = false

  constructor(private tabelaService : TabelaService){}

  escondeModal(){
    return this.modal
  }

  abrirModal(){
    this.escondeBotaoDeleta.emit()
    this.modal = !this.modal
  }
  
  escondeBotao(){
    return this.estado
  }

  onSubmit(form : any){
    console.log(this.produto)
    this.tabelaService.atualizaProduto(this.id , this.produto).subscribe(
      sucesso => {
        console.log('atualizado com sucesso!')
        this.produtoAtualizado.emit()
        this.produto = {nome : null, preco : null , validade : null}
      }
    )
  }

  ngOnInit(): void {
  }

}
