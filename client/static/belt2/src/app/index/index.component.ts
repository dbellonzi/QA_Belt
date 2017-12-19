import { Component, OnInit } from '@angular/core';
import { UpdateService } from '../update.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  user: string = null;
  questions;

  constructor(private update: UpdateService, private router: Router) { }

  ngOnInit() {
      if(!this.update.logcheck()){
        this.router.navigate(['/']);
      }
      this.user = this.update.user;
      this.update.getQuestions();
      this.update.questions.subscribe( (data) => {
        this.questions = data; })
  }

  logout(){
    this.update.logout();
    this.router.navigate(['/']);
  }

  newQuestion(){
    this.router.navigate(['/new']);
  };

  showQ(id){
    this.router.navigate(['/edit/'+id]);
  }

  answerQ(id){
    this.router.navigate(['/add/'+id]);
  }
}
