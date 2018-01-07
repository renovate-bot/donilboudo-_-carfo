import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-prestations',
  templateUrl: 'prestations.html'
})
export class PrestationsPage {
  type_prestation: string;
  title: string;

  constructor(public navCtrl: NavController) {

  }

  setTitle() {
    if ('cotisations_assures' === this.type_prestation) {
      this.title = "Cotisations des assurés";
    } 
    else if ('principe_pensions' === this.type_prestation) {
      this.title = "Principe des pensions";
    }
    else if ('pension_retraite' === this.type_prestation) {
      this.title = "Pension de retraite";
    }
    else if ('pension_reversion_ou_pension_survivants' === this.type_prestation) {
      this.title = "Pension de reversion ou pension de survivants";
    }
    else if ('pension_invalidite' === this.type_prestation) {
      this.title = "Pension d'invalidité";
    }
    else if ('capital_deces' === this.type_prestation) {
      this.title = "Capital décès";
    }
    else if ('remboursement' === this.type_prestation) {
      this.title = "Le remboursement";
    }
  }
}
