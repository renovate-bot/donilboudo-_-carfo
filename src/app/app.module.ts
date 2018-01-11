import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EvaluationPensionPage } from '../pages/evaluation-pension/evaluation-pension';
import { PrestationsPage } from '../pages/prestations/prestations';
import { DemarchesAdministrativesPage } from '../pages/demarches-administratives/demarches-administratives';
import { EvaluationPensionInfoPage } from '../pages/evaluation-pension/evaluation-pension-info';
import { ContactsPage } from '../pages/contacts/contacts';
import { PrestationDetailPage } from '../pages/prestations/prestation-detail';
import { DemarcheAdministrativeDetailPage } from '../pages/demarches-administratives/demarche-administrative-detail';
import { ContactDetailPage } from '../pages/contacts/contact-detail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PrestationsPage,
    PrestationDetailPage,
    EvaluationPensionPage,
    EvaluationPensionInfoPage,
    DemarchesAdministrativesPage,
    DemarcheAdministrativeDetailPage,
    ContactsPage,
    ContactDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PrestationsPage,
    PrestationDetailPage,
    EvaluationPensionPage,
    EvaluationPensionInfoPage,
    DemarchesAdministrativesPage,
    DemarcheAdministrativeDetailPage,
    ContactsPage,
    ContactDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
