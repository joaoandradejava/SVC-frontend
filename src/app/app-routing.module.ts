import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutenticadoGuard } from './shared/guards/autenticado.guard';
import { NaoAutenticadoGuard } from './shared/guards/nao-autenticado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tela-login',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
    canActivate: [AutenticadoGuard],
  },
  {
    path: 'tela-login',
    loadChildren: () =>
      import('./pages/tela-login/tela-login.module').then(
        (m) => m.TelaLoginPageModule
      ),
    canActivate: [NaoAutenticadoGuard],
  },
  {
    path: 'vizualizar-relarorio',
    loadChildren: () =>
      import('./pages/vizualizar-relarorio/vizualizar-relarorio.module').then(
        (m) => m.VizualizarRelarorioPageModule
      ),
    canActivate: [AutenticadoGuard],
  },
  {
    path: 'vizualizar-historico',
    loadChildren: () =>
      import('./pages/vizualizar-historico/vizualizar-historico.module').then(
        (m) => m.VizualizarHistoricoPageModule
      ),
    canActivate: [AutenticadoGuard],
  },
  {
    path: 'agendar-vacina',
    loadChildren: () =>
      import('./pages/agendar-vacina/agendar-vacina.module').then(
        (m) => m.AgendarVacinaPageModule
      ),
    canActivate: [AutenticadoGuard],
  },
  {
    path: 'gerar-relatorio',
    loadChildren: () =>
      import('./pages/gerar-relatorio/gerar-relatorio.module').then(
        (m) => m.GerarRelatorioPageModule
      ),
    canActivate: [AutenticadoGuard],
  },
  {
    path: 'atualizar-cadastro',
    loadChildren: () =>
      import('./pages/atualizar-cadastro/atualizar-cadastro.module').then(
        (m) => m.AtualizarCadastroPageModule
      ),
    canActivate: [AutenticadoGuard],
  },
  {
    path: 'enviar-feedback',
    loadChildren: () =>
      import('./pages/enviar-feedback/enviar-feedback.module').then(
        (m) => m.EnviarFeedbackPageModule
      ),
    canActivate: [AutenticadoGuard],
  },
  {
    path: 'excluircadastro',
    loadChildren: () =>
      import('./pages/excluircadastro/excluircadastro.module').then(
        (m) => m.ExcluircadastroPageModule
      ),
    canActivate: [AutenticadoGuard],
  },
  {
    path: 'cadastro',
    loadChildren: () =>
      import('./pages/realizar-cadastro/realizar-cadastro.module').then(
        (m) => m.RealizarCadastroPageModule
      ),
    canActivate: [NaoAutenticadoGuard],
  },
  {
    path: 'esqueceu-senha',
    loadChildren: () =>
      import('./pages/esqueceu-asenha/esqueceu-asenha.module').then(
        (m) => m.EsqueceuASenhaPageModule
      ),
    canActivate: [NaoAutenticadoGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
