import { Component, Input, OnInit } from '@angular/core';
import { ChoiceOption, Question } from 'src/app/models/question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  @Input() sectionId: string;
  @Input() questions: Question[];
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {}

  changeRadioAnswer(questiodId: string, value: ChoiceOption) {
    console.log({
      sectionId: this.sectionId,
      questionId: questiodId,
      answerLabel: value.label,
      answerValue: value.value
    });
  }

  selectButtonAnswer(questionId: string, option: ChoiceOption) {
    console.log({
      sectionId: this.sectionId,
      questionId: questionId,
      answerLabel: option.label,
      answerValue: option.value
    });
  }

  changeDropdownAnswer(questionId: string, value: string) {
    console.log({
      sectionId: this.sectionId,
      questionId: questionId,
      answerLabel: value,
      answerValue: value
    });
  }
}
