import { Component, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produtos';
import { TabelaService } from './tabela.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit{

  @Input() produtos$ : Observable<Produto[]>

  @Input() estadoBotao : boolean = true

  constructor(private tabelaService : TabelaService){
    this.produtos$ = new Observable
  }

  listaProdutos(){
    this.produtos$ = this.tabelaService.listar()
  }

  mudaBotao(){
    this.estadoBotao = !this.estadoBotao
  }

  ngOnInit(): void {}

}
