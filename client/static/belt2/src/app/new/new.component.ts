import { Component, OnInit } from '@angular/core';
import { UpdateService } from '../update.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  user: string = null;
  question: string = null;
  desc: string = null;
  err = null;

  constructor(private update: UpdateService, private router: Router) { }

  ngOnInit() {
    if(!this.update.logcheck()){
      this.router.navigate(['/']);
    }
    this.user = this.update.user;
  }

  logout(){
    this.update.logout();
    this.router.navigate(['/']);
  }

  goHome(){
    this.router.navigate(['/index']);
  }

  cls(){
    this.question = '';
    this.desc = '';
  }

  add(){
    if(this.question.length < 10){
      this.err = { err: "Input must be longer then 10 characters"};
      return this.err;
    };
    var question = {
      user: this.user,
      question: this.question,
      desc: this.desc
    };
    this.update.addQuestion(question);
    this.router.navigate(['/index']);
  }
}
