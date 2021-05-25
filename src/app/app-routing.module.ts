import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tela-login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'tela-login',
    loadChildren: () => import('./pages/tela-login/tela-login.module').then( m => m.TelaLoginPageModule)
  },
  {
    path: 'vizualizar-relarorio',
    loadChildren: () => import('./pages/vizualizar-relarorio/vizualizar-relarorio.module').then( m => m.VizualizarRelarorioPageModule)
  },
  {
    path: 'vizualizar-historico',
    loadChildren: () => import('./pages/vizualizar-historico/vizualizar-historico.module').then( m => m.VizualizarHistoricoPageModule)
  },
  {
    path: 'agendar-vacina',
    loadChildren: () => import('./pages/agendar-vacina/agendar-vacina.module').then( m => m.AgendarVacinaPageModule)
  },
  {
    path: 'gerar-relatorio',
    loadChildren: () => import('./pages/gerar-relatorio/gerar-relatorio.module').then( m => m.GerarRelatorioPageModule)
  },
  {
    path: 'atualizar-cadastro',
    loadChildren: () => import('./pages/atualizar-cadastro/atualizar-cadastro.module').then( m => m.AtualizarCadastroPageModule)
  },
  {
    path: 'enviar-feedback',
    loadChildren: () => import('./pages/enviar-feedback/enviar-feedback.module').then( m => m.EnviarFeedbackPageModule)
  },
  {
    path: 'excluircadastro',
    loadChildren: () => import('./pages/excluircadastro/excluircadastro.module').then( m => m.ExcluircadastroPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
