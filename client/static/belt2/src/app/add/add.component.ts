import { Component, OnInit } from '@angular/core';
import { UpdateService } from '../update.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  user: string = null;
  answer: string = null;
  details: string = null;
  id = null;
  err = null;
  question;

  constructor(private update: UpdateService, private router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    if(!this.update.logcheck()){
      this.router.navigate(['/']);
    }
    this.user = this.update.user;
    this._route.paramMap.subscribe( (params) => {
      this.update.getQuestion('_id', params.get('id'))
      this.id = params.get('id');
      })
    this.update.question.subscribe( (data) => {
      this.question = data; })
  }

  logout(){
    this.update.logout();
    this.router.navigate(['/']);
  }

  goHome(){
    this.router.navigate(['/index']);
  }

  cls(){
    this.answer = '';
    this.details = '';
  }
  
  showQ(){
    this.router.navigate(['/edit/'+this.id]);
  }

  addAns(){
    if(this.answer.length < 5){
      this.err = { err: "Input must be longer then 5 characters"};
      return this.err;
    };
    var answer = {
      user: this.user,
      answer: this.answer,
      details: this.details,
      _question: this.id
    };
    this.update.addAnswer(answer);
    this.router.navigate(['/index']);
  }
}




