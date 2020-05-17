import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  let component : VoteComponent; // arrange 

  beforeEach(() => {
    component = new VoteComponent; // setup
  });

  afterEach(() => {
    // tear down
  });
  beforeAll(() => {});
  afterAll(() => {});


  it('should increment totalVotes when upvoted', () => {
    component.upVote(); // act

    expect(component.totalVotes).toBe(1); // assert
  });

  it('should decrement totalVotes when downvoted', () => {
    component.downVote();
    
    expect(component.totalVotes).toBe(-1);
  });
});