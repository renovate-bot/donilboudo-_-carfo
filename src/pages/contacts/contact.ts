import { Injectable } from '@angular/core';

@Injectable()
export class Contact {
    name: String;
    phone: String;
    city: String;

    constructor(obj: any) {
        this.name = obj.name;
        this.city = obj.city;
        this.phone = obj.phone;
    }
}