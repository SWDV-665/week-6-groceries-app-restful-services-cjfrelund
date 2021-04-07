import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvisionsServiceService {

  provisions = [];

  constructor() { }

  getProvisions() {
    return this.provisions;
  }

  removeItem(index) {
    this.provisions.splice(index, 1);
  }

  addItem(provision) {
    this.provisions.push(provision);
  }

  editItem(provision, index) {
    this.provisions[index] = provision;
  }
}

