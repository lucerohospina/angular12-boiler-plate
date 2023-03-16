import { Component, Input, OnInit } from '@angular/core';
import { ChoiceOption, Question } from 'src/app/models/question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  @Input() question: Question;
  selected: string;

  constructor() { }

  ngOnInit(): void {
    this.selected = this.question.choiceOptions[0].value;
  }

  changeRadioAnswer(questiodId: string, value: ChoiceOption) {
    console.log({
      questionId: questiodId,
      answerLabel: value.label,
      answerValue: value.value
    });
  }

  selectButtonAnswer(questionId: string, option: ChoiceOption) {
    console.log({
      questionId: questionId,
      answerLabel: option.label,
      answerValue: option.value
    });
  }

  changeDropdownAnswer(questionId: string, value: string) {
    console.log({
      questionId: questionId,
      answerLabel: value,
      answerValue: value
    });
  }
}
