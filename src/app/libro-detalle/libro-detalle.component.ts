import { Component, OnInit, Input } from '@angular/core';
import { Libro } from '../models/libro';

@Component({
  selector: 'app-libro-detalle',
  templateUrl: './libro-detalle.component.html',
  styleUrls: ['./libro-detalle.component.css']
})
export class LibroDetalleComponent implements OnInit {

  constructor() { }
 @Input() libro:Libro
  ngOnInit() {
  }

}
