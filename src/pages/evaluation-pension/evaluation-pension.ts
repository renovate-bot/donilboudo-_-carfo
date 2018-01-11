import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-evaluation-pension',
  templateUrl: 'evaluation-pension.html'
})
export class EvaluationPensionPage {
  groupe_appartenance: string;
  show_results: boolean = false; 
  indice: number;
  point_indiciare = 2331;
  estimation_year: number;
  estimation_month: number;
  maxDate = "2050-12-31";
  minDate;
  today = new Date();

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    startDate: '1990-02-20',
    endDate: '1990-02-20'
  }

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController) {
    var today = new Date();
    this.minDate = today.toISOString();
    this.event.endDate = this.minDate;
    
  }

  calculPension() {
    let canCalculate = false;

    if (this.groupe_appartenance) {
      if (this.indice) {
        if ('fonctionnaires' === this.groupe_appartenance) {
          if(this.indice.toString().length === 3 || this.indice.toString().length === 4) {
            canCalculate = true;
          }
          else {
            canCalculate = false;
            this.toast("Veuillez entrer un indice entre 3 et 4 chiffres");
          }
        }
        else {
          if (this.indice.toString().length === 6) {
            canCalculate = true;
          }
          else {
            canCalculate = false;
            this.toast("Veuillez entrer un indice à 6 chiffres");
          }
        }

        if (canCalculate) {
          var startDate = new Date(this.event.startDate);
          var endDate = new Date(this.event.endDate);
          var numberOfYears = endDate.getFullYear() - startDate.getFullYear();
          this.estimation_year = Math.floor(this.indice * this.point_indiciare * (numberOfYears * 0.02));
          this.estimation_month = Math.floor(this.estimation_year / 12);
          this.show_results = true;
        }
      }
      else {
        this.toast("Veuillez entrer un indice");
      }
    }
    else {
      this.toast("Veuillez choisir un groupe d'appartenance");
    }
  }

  reset() {
    this.groupe_appartenance = '';
    this.show_results = false;
    this.indice = 0;
  }

  toast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 5000
    });
    toast.present();
  }

}
