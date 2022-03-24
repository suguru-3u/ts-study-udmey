/**
 * union型
 * Literal型
 * エイリヤス型
 * JSの関数、コールバック関数
 */

type Conbinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Conbinable,
  input2: Conbinable,
  rsultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    rsultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  // if(rsultConversion === 'as-number'){
  //     return +result;
  // } else{
  //     return result.toString
  // }
  return result;
}

const combindAges = combine(30, 26, "as-number");
console.log(combindAges);

const combindStringAges = combine("30", "26", "as-number");
console.log(combindAges);

const combindNames = combine("30", "26", "as-text");
console.log(combindNames);
