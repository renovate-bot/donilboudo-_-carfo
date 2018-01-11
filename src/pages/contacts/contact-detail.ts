import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Contact } from './contact';

@Component({
  selector: 'page-contact-detail',
  templateUrl: 'contact-detail.html'
})
export class ContactDetailPage {
  contacts = [];
  contact: Contact;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.contact = navParams.get('contact');
  }
}