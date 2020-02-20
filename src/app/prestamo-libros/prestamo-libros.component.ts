import { Component, OnInit } from '@angular/core';
import { librosMock} from '../mocks/libros';
import { Libro } from '../models/libro';

@Component({
  selector: 'app-prestamo-libros',
  templateUrl: './prestamo-libros.component.html',
  styleUrls: ['./prestamo-libros.component.css']
})
export class PrestamoLibrosComponent implements OnInit {

  libros: Array<Libro>;
  seleccionLibro:Libro;
  
  constructor() { }

  seleccion(libro:Libro){
    
    this.seleccionLibro = libro;
  }

  ngOnInit(): void {
    this.libros = librosMock;
  }

  onClick(libro : Libro) : void{
    this.seleccionLibro = libro;
  }
}
