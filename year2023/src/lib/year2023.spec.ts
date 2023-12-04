import { day1, getInput } from './year2023';

describe('year2023', () => {
  it('show input', () => {
    console.log(getInput());
  });

  it('run code', () => {
    const result = day1();
    console.log(result);
  });
});

// part 1:  10217 too low
// answer:  56108
// part 2:  54983 too low
