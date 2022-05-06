import { Component, OnInit } from '@angular/core';

import { Course } from '../models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course [] = [{_id:"1", name:"Angular", category:"Front-end"}]; // Sempre tipar as variáveis e sempre inicializar a variável. Podendo
  //ser dentro do construtor ou na declaração conforme acima
  displayedColumns = ['name', 'category']; // Aqui são as colunas que serão mostradas na tabela.
  //No nosso caso, name e category

  constructor() {
    //Inicializando variável no construtor
    //this.courses =[];
  }

  ngOnInit(): void {
  }

}
