import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UpdateService {
  user: string = null;
  questions: BehaviorSubject <any[]> = new BehaviorSubject([]);
  question:  BehaviorSubject <any[]> = new BehaviorSubject([]);

  constructor(private _http: HttpClient) { }
  
  login(user){
    this.user = user;
  }
  logout(){
    this.user = null;
    return this.user;
  }

  logcheck() {
    if(this.user==null){
      return false;
    } else {
      return true;
    }
  }

  addQuestion(question){
    this._http.post('question/new', question).subscribe( (req) => {
      this.getQuestions();
    })
  }
  addAnswer(answer){
    this._http.post('answer/new', answer).subscribe( (req) => {
      this.getQuestions();
    })
  }
  getQuestions(){
    this._http.get('/questions').subscribe( (data: any) => {
      this.questions.next(data);
    })
  }
  getQuestion(key, param){
    this._http.get('/question/'+key+'/'+param).subscribe( (data: any) => {
      this.question.next(data);
    })
  }
  like(id){
    this._http.get('/answer/'+ id +'/like').subscribe( (data: any) => {
      this.question.next(data);
    })
  }
}

  
  
  
  
//   getRecipie(key, param){
//     this._http.get('/oneRecipie/'+key+'/'+param).subscribe( (data: any) => {
//       this.recipie.next(data);
//     })
//   }

//   addRecipie(recipie){
//     console.log(recipie);
//     this._http.post('recipie/new', recipie).subscribe( (req) => {
//       this.getRecipie('name', recipie.name);
//     })
//   }

//   addIngredient(ingredient, id){
//     console.log(ingredient);
//     this._http.post('/add'+id, ingredient).subscribe( (req) => {
//       this.getRecipie("_recipie", ingredient._recipie);
//     })
//   }
// }
