import { MessageService } from 'primeng/components/common/messageservice';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {GrowlModule} from 'primeng/primeng';

//componentes
import { AppComponent } from './app.component';
import { TelaComponent } from './tela/tela.component';
import { ReservasComponent } from './reservas/reservas.component';
import { LoginComponent } from './login/login.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CadastroRestComponent } from './cadastro-rest/cadastro-rest.component';

//serviços
import {ReservaService} from './services/Reserva.service';
import {RestauranteService} from './services/Restaurante.service';
import {UsuarioService} from './services/Usuario.service';
import {AutenticaService} from './services/Autentica.service';

//primeng
import {SlideMenuModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {DataTableModule,SharedModule, ContextMenuModule} from 'primeng/primeng';
import {BreadcrumbModule} from 'primeng/primeng';
import {MenuModule,MenuItem} from 'primeng/primeng';
import { caminhos } from './app.rotas';
import { DialogModule} from 'primeng/primeng';
import {PasswordModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicialResComponent } from './inicial-res/inicial-res.component';


@NgModule({
  declarations: [
    AppComponent,
    TelaComponent,
    ReservasComponent,
    LoginComponent,
    PesquisaComponent,
    CadastrarComponent,
    CadastroRestComponent,
    InicialResComponent,
 
  ],

  imports: [
    caminhos,
    DialogModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    SlideMenuModule,
    CalendarModule,
    ContextMenuModule,
    DataTableModule,
    SharedModule,
    BreadcrumbModule,
    MenuModule,
    PasswordModule,
    GrowlModule,
   
  ],
  providers: [ReservaService, UsuarioService, RestauranteService,AutenticaService, MessageService],

  bootstrap: [AppComponent]
})
export class AppModule { }
