import { Component, OnInit } from '@angular/core';
import { UpdateService } from '../update.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user: string = null;
  id = null;
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

  answerQ(){
    this.router.navigate(['/add/'+this.id]);
  }
  like(id){
    this.update.like(id);
  }
}
