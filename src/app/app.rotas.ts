import {Routes,RouterModule} from '@angular/router'
import { ReservasComponent } from './reservas/reservas.component';
import { TelaComponent } from './tela/tela.component';
import { LoginComponent } from './login/login.component';
import {CadastrarComponent } from './cadastrar/cadastrar.component';
import { CadastroRestComponent } from './cadastro-rest/cadastro-rest.component';
import {PesquisaComponent } from './pesquisa/pesquisa.component';
import {ModuleWithProviders} from '@angular/core'



const APP_ROTAS:Routes = [
    {path: 'reservas' , component: ReservasComponent},
    {path: 'tela' , component: TelaComponent},
    {path: 'login' , component: LoginComponent},
    {path: 'cadastrar' , component: CadastrarComponent},    
    {path: 'pesquisa' , component: PesquisaComponent},
    {path: 'cadastro-rest' , component: CadastroRestComponent},
    {path: '' , component: LoginComponent},
    
];

export const caminhos : ModuleWithProviders = RouterModule.forRoot(APP_ROTAS);