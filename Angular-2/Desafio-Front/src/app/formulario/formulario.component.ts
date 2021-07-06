import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TabelaService } from '../tabela/tabela.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() produtoAdicionado = new EventEmitter

  produto : any = {
    nome : null,
    preco : null,
    validade : null
  }

  tocado : boolean = true

  onSubmit(form : any){

    console.log(this.produto)
    this.tabelaService.inserirProduto(this.produto).subscribe(
      sucesso => {
        console.log('sucesso')
        this.produtoAdicionado.emit()
      }
    )  
  }

  constructor( private tabelaService : TabelaService) { }

  valida(form : any){
    if(form.touched && !form.valid && this.tocado){
      return true
    } else{
      return false
    }
  }

  trocaTrocado(){
    this.tocado = true
  }

  reset(form : any){
    this.produto = { nome : null , preco : null , validade : null}
    this.tocado = false
  }

  ngOnInit() { }
}
