import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrestamoLibrosComponent } from './prestamo-libros/prestamo-libros.component';
import { FormsModule} from '@angular/forms';
import { LibroDetalleComponent } from './libro-detalle/libro-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    PrestamoLibrosComponent,
    LibroDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
