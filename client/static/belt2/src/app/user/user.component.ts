import { Component, OnInit } from '@angular/core';
import { UpdateService } from '../update.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: string = null;

  constructor(private update: UpdateService, private router: Router) { }

  ngOnInit() {
    if(this.update.logcheck()){
      this.router.navigate(['/index']);
    };
  }

  login(){
    this.update.login(this.user);
    this.router.navigate(['/index']);
  }
}
