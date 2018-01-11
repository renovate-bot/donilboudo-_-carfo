import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Contact } from './contact';
import { ContactDetailPage } from './contact-detail';

@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html'
})
export class ContactsPage {
  contacts = [];

  constructor(public navCtrl: NavController) {
    this.init();
  }

  init() {
    this.contacts.push(new Contact({name: 'CARFO Siège', phone: '25 37 69 87 / 88 / 89 / 90', city: 'Ouagadougou'}));
    this.contacts.push(new Contact({name: "Direction de l'Informatique et de la Statistique", phone: '25 37 69 80', city: 'Ouagadougou'}));
    this.contacts.push(new Contact({name: 'Direction Financière et Comptable', phone: '25 50 12 21', city: 'Ouagadougou'}));
    this.contacts.push(new Contact({name: 'Direction des Prestations', phone: '25 37 69 95', city: 'Ouagadougou'}));
    this.contacts.push(new Contact({name: 'CARFO Koulouba (Archives)', phone: '25 50 12 23', city: 'Ouagadougou'}));
    this.contacts.push(new Contact({name: 'CARFO Paspanga', phone: '25 33 30 41 / 25 31 00 08', city: 'Ouagadougou'}));
    this.contacts.push(new Contact({name: 'CARFO Bobo Dioulasso', phone: '20 98 39 01 / 02 / 03 / 04', city: 'Bobo Dioulasso'}));
    this.contacts.push(new Contact({name: 'CARFO Koudougou', phone: '25 44 05 56 / 60', city: 'Koudougou'}));
  }

  showDetails(contact: Contact) {
    this.navCtrl.push(ContactDetailPage, {contact: contact});
  }
}