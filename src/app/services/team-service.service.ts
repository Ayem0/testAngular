import { Injectable } from '@angular/core';
import { Member } from '../classes/member';

@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {

  public team: Member[] = [new Member(1, "test")];

  constructor() { 
  }

  addMember(id : number, name: string) {
    this.team.push( new Member(id, name))
  }

  deleteMember(member : Member) {
    const index = this.team.indexOf(member);
    this.team.splice(index, 1);
  }

  getMembers(): Member[] {
    return this.team;
  }

  getMemberById(id : number) {
    return this.team.find( member => member.id === id);
  }

  updateMemberName(member : Member, name : string) {
    const index = this.team.indexOf(member);
    this.team[index].name = name;
  }
}
