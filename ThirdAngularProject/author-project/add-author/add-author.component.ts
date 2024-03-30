import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorServiceService } from 'src/app/author-service.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css'],
})
export class AddAuthorComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private authorService: AuthorServiceService
  ) {}

  authorForm: FormGroup;
  c: String = '';

  ngOnInit(): void {
    this.initialForm();
  }
  initialForm() {
    this.authorForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      books: this.fb.array([this.newBook()]),
      birthDate: [null],
      birthPlace: [null],
      description: [null],
    });
  }

  onSubmit() {
    this.walkInArray();

    let author = {
      firstName: String,
      lastName: String,
      books: String,
      birthDate: String,
      birthPlace: String,
      description: String,
    };
    author.firstName = this.authorForm.get('firstName').value;
    author.lastName = this.authorForm.get('lastName').value;
    author.books = this.c as unknown as StringConstructor;
    author.birthDate = this.authorForm.get('birthDate').value;
    author.birthPlace = this.authorForm.get('birthPlace').value;
    author.description = this.authorForm.get('description').value;

    this.authorService.addAuthor(author);
    console.log(this.authorForm);
    this.c = ' ';
  }

  get books(): FormArray {
    return this.authorForm.get('books') as FormArray;
  }
  newBook(): FormGroup {
    return this.fb.group({
      book: ['aa', Validators.required],
    });
  }
  addBook() {
    this.books.push(this.newBook());
    console.log();
  }
  removeBook(i: number) {
    this.books.removeAt(i);
  }
  walkInArray() {
    let set = this.authorForm.get('books').value;

    for (let index in set) {
      if (index == '0') {
        this.c += set[index].book;
      } else {
        this.c += ',' + set[index].book;
      }
    }
    console.log(this.c);
  }

  click(): boolean {
    if (this.authorService.authorModel.length < 5) {
      return true;
    } else {
      return false;
    }
  }
}
