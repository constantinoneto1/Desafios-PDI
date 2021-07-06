import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TabelaComponent } from './tabela/tabela.component'
import { PaginaComponent } from './pagina/pagina.component';
import { PaginaModule } from './pagina/pagina.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //FormularioModule,
    FormsModule,
    HttpClientModule,
    //TabelaModule,
    PaginaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
