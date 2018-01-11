import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrestationsPage } from '../prestations/prestations';
import { DemarchesAdministrativesPage } from '../demarches-administratives/demarches-administratives';
import { EvaluationPensionInfoPage } from '../evaluation-pension/evaluation-pension-info';
import { AboutPage } from '../about/about';
import { ContactsPage } from '../contacts/contacts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  about = AboutPage;
  prestation = PrestationsPage;
  evaluationPensionInfo = EvaluationPensionInfoPage;
  demarchesAdmininstratives = DemarchesAdministrativesPage;
  contacts = ContactsPage;

  constructor(public navCtrl: NavController) {

  }
}
