import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/classes/member';
import { TeamServiceService } from 'src/app/services/team-service.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  team : Member[] = [];

  constructor(private teamService : TeamServiceService) { }

  ngOnInit(): void {
    this.team = this.teamService.getMembers();
  }

  deleteMember(member : Member): void {
    this.teamService.deleteMember(member);
  }

  addMember(member : Member): void {
    this.teamService.addMember(member.id, member.name);
  }
}
