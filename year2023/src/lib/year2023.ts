import * as fs from 'fs';

const example =
  'two1nine\n' +
  'eightwothree\n' + // de t overlapt
  'abcone2threexyz\n' +
  'xtwone3four\n' + // de o overlapt
  '4nineeightseven2\n' +
  'zoneight234\n' + // de e overlapt
  '7pqrstsixteen';

const inputPath = 'C:/git/advent-of-code/year2023/src/input/';

export function getInput(): string {
  const fileContent = fs.readFileSync(`${inputPath}input_1.txt`, 'utf8');
  return fileContent;
}

export function day1(): number {
  const input = getInput();
  let result = 0;
  input.split('\n').map((part) => {
    const numbersOnly = part
      .replace(/one/g, 'o1e')
      .replace(/two/g, 't2o')
      .replace(/three/g, 't3e')
      .replace(/four/g, 'f4r')
      .replace(/five/g, 'f5v')
      .replace(/six/g, 's6x')
      .replace(/seven/g, 's7n')
      .replace(/eight/g, 'e8t')
      .replace(/nine/g, 'n9e')

      .replace(/[^0-9]/g, '');
    console.log(
      `${numbersOnly.substring(0, 1)}${numbersOnly.substring(
        numbersOnly.length - 1
      )}`
    );
    if (numbersOnly.length > 0) {
      result += +`${numbersOnly.substring(0, 1)}${numbersOnly.substring(
        numbersOnly.length - 1
      )}`;
    }
  });
  return result;
}
