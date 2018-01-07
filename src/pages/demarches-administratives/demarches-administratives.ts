import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-demarches-administratives',
  templateUrl: 'demarches-administratives.html'
})
export class DemarchesAdministrativesPage {
  type_demarche: string;
  title: string;
  description: string;

  constructor(public navCtrl: NavController) {
  }

  setInformations() {
    if ('pension_retraite' === this.type_demarche) {
      this.title = "Pension de retraite";
      this.description = "Vous êtes militaire, magistrat, fonctionnaire, contractuel de l'état. Vous avez été mis à la retraite et vous avez atteint l'âge légal de départ à la retraite. Vous pouvez faire valoir vos droits à la pension.";
    } 
    else if ('remboursement' === this.type_demarche) {
      this.title = "Remboursement";
      this.description = "Vous êtes admis à la retraite, mais vous n'avez pas quinze (15) ans d'activité et de cotisation. La loi régissant le système de protection sociale dit que vous avez droit au remboursement de vos cotisations.";
    }
    else if ('pension_reversion' === this.type_demarche) {
      this.title = "Pension de réversion";
      this.description = "Vous êtes épouses légalement mariées, enfants de moins de vingt (20) ans d'un retraité décédé. La loi régissant le système de protection sociale dit que vous avez droit à une pension de réversion.";
    }
    else if ('capital_deces' === this.type_demarche) {
      this.title = "Capital décès";
      this.description = "Vous êtes épouses légalement mariées, enfants mineurs, enfants majeurs âgés d'au plus 26 ans et poursuivant des études supérieures, père et mère, d'un agent public de l'Etat décédé en étant toujours en activité.";
    }
    else if ('reversement' === this.type_demarche) {
      this.title = 'Reversement';
      this.description = "Votre coépouse est décédée. Vous bénéficiez d'une pension de réversion au même titre qu'elle. La loi régissant le système de protection sociale dit que vous avez droit à un reversement.";
    }
    else if ('changement_tutelle' === this.type_demarche) {
      this.title = 'Changement de tutelle';
      this.description = 'En cas de retrait de la tutelle, de renonciation à la tutelle ou de décès du tuteur, vous pouvez demander un changement de tutelle pour la gestion des droits à pension des orphelins.';
    }
    else if ('derniers_arrerages' === this.type_demarche) {
      this.title = 'Derniers Arrérages';
      this.description = "Votre parent est décédé sans percevoir sa pension et il n'y a pas de veuve ou d'orphelin pour une réversion ou un reversement. La loi régissant le système de protection sociale dit que vous avez droit aux derniers arrérages.";
    }
    else if ('accident_maladie' === this.type_demarche) {
      this.title = 'Accident de travail ou Maladie Professionnelle';
      this.description = "Fonctionnaire, militaire, magistrat, contractuel de l'état,vous avez été ou vous êtes victime d'un accident du fait de votre travail ou d'une maladie professionnelle. Vous voulez bénéficier de vos droits.";
    }
    else if ('agents_en_detachement' === this.type_demarche) {
      this.title = 'Agents en détachement';
      this.description = 'Vous êtes en position de détachement et vous voulez un meilleur recouvrement de vos cotisations au titre de votre retraite.';
    }
    else if ('agents_collectivites' === this.type_demarche) {
      this.title = 'Agents de collectivités';
      this.description = 'Vous êtes un agent des collectivités (mairies) et vous voulez un meilleur recouvrement de vos cotisations.';
    }
    else if ('traitement_dossier_termine' === this.type_demarche) {
      this.title = 'Traitement de dossier terminé';
      this.description = 'Retraités et épouses de retraité, tuteurs des orphelins, votre dossier est fini et est prêt pour paiement.';
    }
    else if ('arret_mandatement' === this.type_demarche) {
      this.title = 'Arrêt de mandatement';
      this.description = "En cas de décès d'un pensionné, de remariage d'une veuve ou d'un veuf ou d'opposition de paiement, le mandatement de la pension doit être arrêté.";
    }
  }

}
