import { Component, Input, OnInit } from '@angular/core';
import { AuthorServiceService } from '../author-service.service';
import { authorModel } from 'src/app/models/author';

@Component({
  selector: 'app-author-project',
  templateUrl: './author-project.component.html',
  styleUrls: ['./author-project.component.css'],
})
export class AuthorProjectComponent implements OnInit {
  authorModel: any;
  arr: any;
  constructor(private authorService: AuthorServiceService) {}
  ngOnInit(): void {
    this.callArray();
  }
  callArray() {
    this.arr = this.authorService.getAll();
    //console.log(this. );
  }
}
