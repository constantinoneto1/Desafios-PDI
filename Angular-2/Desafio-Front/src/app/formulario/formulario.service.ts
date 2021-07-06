import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../tabela/produtos';


@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  private readonly API = 'http://localhost:3000/produtos'

  constructor(private http : HttpClient) { }

}
