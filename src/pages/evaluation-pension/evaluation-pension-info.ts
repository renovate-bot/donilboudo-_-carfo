import { EvaluationPensionPage } from './evaluation-pension';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-evaluation-pension-info',
  templateUrl: 'evaluation-pension-info.html'
})
export class EvaluationPensionInfoPage {
  evaluationPension = EvaluationPensionPage;

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController) {
  }

}
