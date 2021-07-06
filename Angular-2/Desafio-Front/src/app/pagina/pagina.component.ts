import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../tabela/produtos';
import { TabelaService } from '../tabela/tabela.service';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  produtos$ : Observable<Produto[]>

  listaProduto(){
    this.produtos$ = this.tabelaService.listar()
  }

  constructor(private tabelaService : TabelaService) {
    this.produtos$ = new Observable
  }

  ngOnInit(): void {
    this.produtos$ = this.tabelaService.listar()
  }
}
