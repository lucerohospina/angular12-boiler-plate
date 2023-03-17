import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionsComponent } from './sections.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatExpansionModule } from '@angular/material/expansion';
import { QuestionsComponent } from '../questions/questions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { QuestionsService } from 'src/app/services/questions.service';
import { of } from 'rxjs';
import * as sections from '../../mocks/section.json';
import * as questions from '../../mocks/question.json';

describe('SectionsComponent', () => {
  let component: SectionsComponent;
  let fixture: ComponentFixture<SectionsComponent>;

  const mockQuestionsService = {
    getSections: () => of(sections),
    getQuestions: () => of(questions)
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        SectionsComponent,
        QuestionsComponent 
      ],
      imports: [
        HttpClientTestingModule,
        MatExpansionModule,
        BrowserAnimationsModule,
        MatRadioModule,
        MatButtonModule,
        MatSelectModule,
        MatFormFieldModule
      ],
      providers: [
        { provide: QuestionsService, useValue: mockQuestionsService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get sections', () => {
    const getSectionsSpy = spyOn((component as any).questionsService, 'getSections')
      .and.returnValue(of(sections));
    
    component.ngOnInit();

    expect(getSectionsSpy).toHaveBeenCalled();
  });

  it('should get questions', () => {
    const getQuestionsSpy = spyOn((component as any).questionsService, 'getQuestions')
      .and.returnValue(of(questions));
    
    component.ngOnInit();

    expect(getQuestionsSpy).toHaveBeenCalled();
  });
});
