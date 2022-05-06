//No componente colocamos apenas o código que será utilizado para renderizar a tela,
//e realizar validações básicas.
//Dados e manupilação de dados ficam no Service(serviço).
import { Component, OnInit } from '@angular/core';

import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [] // Sempre tipar as variáveis e sempre inicializar a variável. Podendo
  //ser dentro do construtor ou na declaração conforme acima
  displayedColumns = ['name', 'category']; // Aqui são as colunas que serão mostradas na tabela.
  //No nosso caso, name e category

  /************************************************************************************************** */
  /* Sem HTTP CLIENTE */

  //Vamos instanciar uma variável para chamar o serviço de cursos com os dados para ser renderizado no component.
  //coursesService: CoursesService;

  //constructor() {
  //Inicializando variável no construtor
  //this.courses =[];
  /*************************************************************************************************************** */
  //Chamando o serviço instanciado
  //this.coursesService = new CoursesService();
  //Vamos fazer com que a variável courses, receba o método list() que está dentro de CursosService
  //this.courses = this.coursesService.list();
  /*********************************************************************************************************** */

  //Com Http Client
  //Injetando a dependência do CursosService no construtor
  constructor(private coursesService: CoursesService) {
  }

  ngOnInit(): void {
    //Lista de cursos será exibida quando componente for inicializado.
    // atribuindo os cursos recebidos do cursos service para variável Courses.
    this.courses = this.coursesService.list();
  }

}
