import { Component, OnInit } from '@angular/core';
import { Questions } from 'src/app/models/question';
import { Sections } from 'src/app/models/section';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {
  sectionsResult: Sections;
  questionsResult: Questions;

  constructor(private questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.questionsService.getSections().subscribe({
      next: (response) => {
        this.sectionsResult = response.result;
        console.log('SECTIONS', this.sectionsResult);
      }
    });

    this.questionsService.getQuestions().subscribe({
      next: (response) => {
        this.questionsResult = response.result;
        console.log('QUESTIONS', this.questionsResult);
      }
    });
  }
}
