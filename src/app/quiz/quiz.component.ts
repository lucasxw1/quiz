import { Component, OnInit } from '@angular/core';
import { QsService } from '../qs.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  stringQuestao : string = "";
  questao: any;
  questions: any;
  i: number = 0;
  points: number = 0;
  check: boolean;

  constructor(private service : QsService) { }





   checkQuestao(a){
     if(this.questao.correct_answer == a){
       this.points = this.points + 1;
       this.proxQuestao();
     }
     else{
      this.proxQuestao();
     }
   }

  proxQuestao(){
    this.i = this.i + 1;
    this.questao = this.questions[this.i];
    this.stringQuestao = this.questions[this.i].question;
  }

  ngOnInit() {
    this.service.getQuestions().subscribe(
      res => {
        this.questions = res.results;
        this.stringQuestao = this.questions[this.i].question;
        this.questao = this.questions[this.i];
        console.log(res);
      }
    )
  }



}
