function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log(num);
}

function addAndHandle(n1: number, n2: number, cd: (num: number) => void) {
  const result = n1 + n2;
  cd(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));

// printResult(add(3, 4));
