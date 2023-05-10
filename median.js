// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  input.sort((a, b) => a - b);
  console.log(input);

  let median;
  if (input.length % 2 !== 0) {
    let midlleIndex = Math.floor(input.length / 2);
    median = input[midlleIndex];
  } else {
    let midlleIndex = Math.floor(input.length / 2);
    median = (input[midlleIndex] + input[midlleIndex - 1]) / 2;
  }
  return median;
}
console.log(result(input));
