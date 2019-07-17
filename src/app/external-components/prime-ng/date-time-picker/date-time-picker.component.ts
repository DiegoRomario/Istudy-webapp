import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'prime-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.css']
})
export class DateTimePickerComponent implements OnInit {

  @Input() name;
  ptbr: any;
  @Input() formGroup: FormGroup;
  @Input() modoSel: string = 'single';
  @Input() showTimer: boolean = true;
  @Output() dataSelecionadaEvento = new EventEmitter<any>();
  @Output() dataLimpaEvento = new EventEmitter<boolean>();
  @Input() desabilitado: boolean = false;

  constructor() { }

  dataSelecionada($event) {

    this.dataSelecionadaEvento.emit($event);

  }

  dataLimpa($event) {

    this.dataLimpaEvento.emit($event);

  }

  ngOnInit() {
    this.ptbr = {
      closeText: 'Fechar',
      prevText: 'Anterior',
      nextText: 'Próximo',
      // tslint:disable-next-line: max-line-length
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
      dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
      weekHeader: 'Semana',
      weekNumberTitle: 'Sm',
      firstDay: 0,
      isRTL: false,
      showMonthAfterYear: false,
      yearSuffix: '',
      timeOnlyTitle: 'Só Horas',
      timeText: 'Tempo',
      hourText: 'Hora',
      minuteText: 'Minuto',
      secondText: 'Segundo',
      currentText: 'Começo',
      ampm: false,
      month: 'Mês',
      week: 'Semana',
      day: 'Dia',
      allDayText: 'Todo o Dia',
      today: 'Hoje',
      clear: 'Limpar',
    }
  }

}
