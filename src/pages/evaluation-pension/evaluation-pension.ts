import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-evaluation-pension',
  templateUrl: 'evaluation-pension.html'
})
export class EvaluationPensionPage {
  groupe_appartenance: string;

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    startDate: '1990-02-20',
    endDate: '1990-02-20'
  }

  constructor(public navCtrl: NavController) {
  }

}
