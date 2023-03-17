import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Sections } from '../models/section';
import { Response } from '../models/response';
import { Questions } from '../models/question';
import * as sections from '../mocks/section.json';
import * as questions from '../mocks/question.json';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }

  getSections(): Observable<Response<Sections>> {
    return of(sections);
  }

  getQuestions(): Observable<Response<Questions>> {
    return of(questions);
  }
}
