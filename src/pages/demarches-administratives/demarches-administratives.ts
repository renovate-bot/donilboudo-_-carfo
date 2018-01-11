import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DemarcheAdministrativeDetailPage } from './demarche-administrative-detail';

@Component({
  selector: 'page-demarches-administratives',
  templateUrl: 'demarches-administratives.html'
})
export class DemarchesAdministrativesPage {
  demarches = [];
  type_demarche: string;
  title: string;
  description: string;

  constructor(public navCtrl: NavController) {
    this.demarches.push({type: 'pension_retraite', title: 'Pension de retraite'});
    this.demarches.push({type: 'remboursement', title: 'Remboursement'});
    this.demarches.push({type: 'pension_reversion', title: 'Pension de réversion'});
    this.demarches.push({type: 'capital_deces', title: 'Capital décès'});
    this.demarches.push({type: 'reversement', title: 'Reversement'});
    this.demarches.push({type: 'changement_tutelle', title: 'Changement de tutelle'});
    this.demarches.push({type: 'derniers_arrerages', title: 'Derniers Arrérages'});
    this.demarches.push({type: 'accident_maladie', title: 'Accident de travail ou Maladie Professionnelle'});
    this.demarches.push({type: 'agents_en_detachement', title: 'Agents en détachement'});
    this.demarches.push({type: 'agents_collectivites', title: 'Agents de collectivités'});
    this.demarches.push({type: 'traitement_dossier_termine', title: 'Traitement de dossier terminé'});
    this.demarches.push({type: 'arret_mandatement', title: 'Arrêt de mandatement'});
  }

  showDetails(type: string) {
    this.navCtrl.push(DemarcheAdministrativeDetailPage, {type_demarche: type});
  }
}
