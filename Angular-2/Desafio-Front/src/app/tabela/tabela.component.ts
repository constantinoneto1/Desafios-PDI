import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormularioService } from '../formulario/formulario.service';
import { Produto } from './produtos';
import { TabelaService } from './tabela.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit{

  @Input() produtos$ : Observable<Produto[]>

  constructor(){
    this.produtos$ = new Observable
  }

  ngOnInit(): void {

  }

}
