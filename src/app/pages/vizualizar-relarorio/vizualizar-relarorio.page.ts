import { EstatisticaService } from './../../shared/services/estatistica.service';
import { Component, OnInit } from '@angular/core';
import { RelatorioDTO } from 'src/app/shared/models/relatorio-dto';

@Component({
  selector: 'app-vizualizar-relarorio',
  templateUrl: './vizualizar-relarorio.page.html',
  styleUrls: ['./vizualizar-relarorio.page.scss'],
})
export class VizualizarRelarorioPage implements OnInit {
  relatorioDto: RelatorioDTO;

  constructor(private estatisticaService: EstatisticaService) {}

  ngOnInit() {
    this.estatisticaService
      .gerarRelatorioDoAgendamentoDasVacinas()
      .subscribe((data) => {
        document.querySelector('iframe').src = data.relatorio;
        this.relatorioDto = data;
      });
  }

  baixar(): void {
    const downloadLink = document.createElement('a');
    downloadLink.href = this.relatorioDto.relatorio;
    downloadLink.download = 'agendamento-relatorio.pdf';
    downloadLink.click();
  }
}
