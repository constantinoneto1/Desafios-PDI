import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class TabelaService {

  private readonly API = 'http://localhost:3000/produtos'

  constructor(private http : HttpClient) { }

  listar(){
    return this.http.get<Produto[]>(this.API)
  }

  inserirProduto(produtoAdicionado : any){
    return this.http.post(this.API , produtoAdicionado)
  }

  deletarProduto(id : any){
    return this.http.delete(`http://localhost:3000/produtos/${id}`)
  }

  atualizaProduto( id : any , body : any){
    return this.http.put(`${this.API}/${id}` , body)
  }
}
