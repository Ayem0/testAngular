import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Member } from 'src/app/classes/member';
import { TeamServiceService } from 'src/app/services/team-service.service';

@Component({
  selector: 'app-rename-user',
  templateUrl: './rename-user.component.html',
  styleUrls: ['./rename-user.component.css']
})
export class RenameUserComponent implements OnInit {

  @Input() member : Member | undefined;
  @Output() memberChange = new EventEmitter<Member>();

  name = new FormControl('', [Validators.required]);
  form : FormGroup = new FormGroup({
    name: this.name,
  })

  constructor(private teamService : TeamServiceService) { }

  ngOnInit(): void {
    if ( this.member !== undefined) {
      this.form.setValue({name: this.member.name})
    }
  } 

  changeName(): void {
    if (this.member !== undefined) {
      this.teamService.updateMemberName(this.member, this.name.value);
    }
  }
}
