import { Injectable } from '@angular/core';
import { authorModel } from '../models/author';

@Injectable({
  providedIn: 'root',
})
export class AuthorServiceService {
  authorModel: Array<authorModel> = [
    {
      firstName: 'Aynur',
      lastName: 'Akhund',
      books: ['love', 'sjsjs'],
      birthDate: '07.03.03',
      birthPlace: 'Baku',
      description: 'it is a book about first love',
    },
  ];
  constructor() {}

  initialAuthor() {
    localStorage.setItem('authorModel', `${JSON.stringify(this.authorModel)}`);
  }

  getAll() {
    return this.authorModel;
  }

  addAuthor(author: any) {
    this.authorModel.push(author);
    localStorage.removeItem('authorModel');
    this.initialAuthor();
  }
}
