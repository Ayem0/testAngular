import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Member } from 'src/app/classes/member';
import { TeamServiceService } from 'src/app/services/team-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  members : Member[] = [];
  topMembers : Member[] = [];

  name = new FormControl('');
  
  constructor(
    private teamService: TeamServiceService
  ) { }

  ngOnInit(): void {
    this.topMembers = this.teamService.getMembers();
    this.name.valueChanges.subscribe( (value : string) => {
      if (value.trim()) {
        this.members = this.topMembers.filter( member => member.name.toLowerCase().match(value.toLowerCase()))
      } else {
        this.members = [];
      }
    })
  }
}
