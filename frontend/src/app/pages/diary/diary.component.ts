import { Component, OnInit } from '@angular/core';
import {UserService } from '../../services/user.service';
import { Diary } from '../../models/Diary';
@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css'],
})
export class DiaryComponent implements OnInit {
  diaryList: Array<Diary>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getDiaries().subscribe(res => this.diaryList = res);
  }

}
