import { Component, OnInit } from '@angular/core';
import { QsService } from '../qs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // pega o array de questoes
  // questions: any;
  // pega a  primeira questao
  // question1: string = "";

  constructor(private service : QsService) { }

  ngOnInit() {
    // this.service.getQuestions().subscribe(
    //   res => {
    //     this.questions = res;
    //     this.question1 = res.results[0].question;
    //     console.log(this.questions);
    //   }
    // )
  }



}
