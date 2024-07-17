import { Member } from './member';

describe('Member', () => {
  it('should create an instance', () => {
    expect(new Member(2, "tom")).toBeTruthy();
  });
});
