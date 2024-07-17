import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/classes/member';
import { TeamServiceService } from 'src/app/services/team-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {

  member : Member | undefined;

  constructor(
    private teamService : TeamServiceService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // if obligatoire?
    const id = this.route.snapshot.paramMap.get('id');
    if ( id !== null) {
      this.member = this.teamService.getMemberById(parseInt(id));
    }
  }
}
