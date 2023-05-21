import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamento/pensamento';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3200/pensamentos';

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<Pensamento[]>(this.API);
  }

  criar(pensamento: Pensamento) {
    return this.http.post<Pensamento>(this.API, pensamento);
  }

  excluir(id: number) {
    return this.http.delete<Pensamento>(this.API + `/${id}`);
  }

  editar(pensamento: Pensamento) {
    return this.http.put<Pensamento>(this.API + `/${pensamento.id}`, pensamento);
  }

  buscarPorId(id: number) {
    return this.http.get<Pensamento>(this.API + `/${id}`);
  }
}
