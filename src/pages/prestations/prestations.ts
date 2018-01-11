import { PrestationDetailPage } from './prestation-detail';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-prestations',
  templateUrl: 'prestations.html'
})
export class PrestationsPage {
  type_prestation: string;
  title: string;
  prestations = [];

  constructor(public navCtrl: NavController) {
    this.prestations.push({type: 'cotisations_assures', title: 'Cotisations des assurés'});
    this.prestations.push({type: 'principe_pensions', title: 'Principe des pensions'});
    this.prestations.push({type: 'pension_reversion_ou_pension_survivants', title: 'Pension de reversion ou pension de survivants'});
    this.prestations.push({type: 'pension_invalidite', title: "Pension d'invalidité"});
    this.prestations.push({type: 'capital_deces', title: 'Capital décès'});
    this.prestations.push({type: 'remboursement', title: 'Le remboursement'});
  }

  showDetails(type: string) {
    this.navCtrl.push(PrestationDetailPage, {type_prestation: type});
  }
}
