import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-prestation-detail',
  templateUrl: 'prestation-detail.html'
})
export class PrestationDetailPage {
  type_prestation: string;
  title: string;

  constructor(public navCtrl: NavController , public navParams: NavParams) {
    this.type_prestation = navParams.get('type_prestation');
    this.setTitle();
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
