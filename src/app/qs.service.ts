import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QsService {



  constructor(private http: HttpClient) { }


getQuestions(): Observable<any>{
  return this.http.get("https://opentdb.com/api.php?amount=10&type=boolean");
 }

}


