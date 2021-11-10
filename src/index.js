export default function temperatures(input) {
  if (input === undefined || input.length === 0) {
    return 0;
  }

  let indexOfLowest = 0;

  input.forEach((element, index) => {

    if (Math.abs(element) < Math.abs(input[indexOfLowest])) {
      indexOfLowest = index;

    } else if (Math.abs(element) === Math.abs(input[indexOfLowest])) {
      indexOfLowest = (element > input[indexOfLowest]) ? index : indexOfLowest;
    }
  });

  return input[indexOfLowest];
}