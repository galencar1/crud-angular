import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Course } from '../models/course';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  //Quando declarar uma injeção com HTTP Cliente, sempre importar o modulo Http no App Module
  //Assim ficará disponível para toda a aplicação

  //Variável API recebe o caminho do servidor onde estão os dados (end-point)
  private readonly API = '/assets/cursos.json';
  constructor(private httpClient: HttpClient) { }

  list() {
    //Obter a lista dinâmica através de uma chamada Http.

    //utilizando Http Client para requisitar as informações que serão listadas na tabela de cursos
    //utilizando o get precisamos informar a url de onde vamos pegar os dados.
    //retornando um observable de cursos , operador diamante <>
    return this.httpClient.get<Course[]>(this.API)
    //podemos utilizar o operador pipe para manipular a informação adquirida
    //através de programação reativa, utilizando operadores do RXJS
    .pipe(
      first(),//operador recebe a conexão do servidor apenas uma vez e encerra
      delay(2000),
      tap(courses => console.log(courses))
    );


  }
}
