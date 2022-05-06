import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  //Quando declarar uma injeção com HTTP Cliente, sempre importar o modulo Http no App Module
  //Assim ficará disponível para toda a aplicação
  constructor(private httpCliente: HttpClient) { }

  list(): Course[] {
    return [{_id:"1", name:"Angular", category:"Front-end"}];
  }
}
