import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrestationsPage } from '../prestations/prestations';
import { DemarchesAdministrativesPage } from '../demarches-administratives/demarches-administratives';
import { EvaluationPensionInfoPage } from '../evaluation-pension/evaluation-pension-info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  presentation;
  prestation = PrestationsPage;
  evaluationPensionInfo = EvaluationPensionInfoPage;
  demarchesAdmininstratives = DemarchesAdministrativesPage;

  constructor(public navCtrl: NavController) {

  }
}
