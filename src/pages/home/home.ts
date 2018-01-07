import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrestationsPage } from '../prestations/prestations';
import { EvaluationPensionPage } from '../evaluation-pension/evaluation-pension';
import { DemarchesAdministrativesPage } from '../demarches-administratives/demarches-administratives';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  presentation;
  prestation = PrestationsPage;
  evaluationPension = EvaluationPensionPage;
  demarchesAdmininstratives = DemarchesAdministrativesPage;

  constructor(public navCtrl: NavController) {

  }
}
