import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Member } from 'src/app/classes/member';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  @Output() newTeamEvent = new EventEmitter<Member>();

  name = new FormControl('', [Validators.required]);
  id = new FormControl('', [Validators.required]);
  
  form = new FormGroup({
    name: this.name,
    id: this.id,
  })

  constructor() { }

  ngOnInit(): void {
  }

  addMember(): void {
    this.newTeamEvent.emit(this.form.value)
  }
}
