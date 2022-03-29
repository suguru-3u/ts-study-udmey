/**
 * unkown
 * never
 */

/**
 * Lesson3
 * watchモード
 * --watch or --w(単一ファイル)
 * tsc  --init(プロジェクト化)
 * tscコマンドひとつ
 * tsconfig.json
 *
 * JS
 * queraySelecter,addEventLister
 */

// let userInput: unknown;
// let userName: string;

// userInput = 5;
// userInput = "Max";

// if (typeof userInput === "string") {
//   userName = userInput;
// }

// function generateError(message: string, code: number): never {
//   throw { message: message, errorCode: code };
// }

// generateError("エラーが発生しました!!!", 10);

/**
 * Lesson4 モダンなJS講座
 * アロー関数
 * 関数の引数にデフォルト値
 * スプレットオペレーター
 * レストパラメーター
 * 分割代入
 */

// 通常
// const add = (a: number, b: number) => {
//   return a + b;
// };

// 関数本文が1業
// const add = (a: number, b: number) => a + b;

// 引数が一つ
// const add: (a: number | string) => void = (a) => {
//   return a;
// };

// console.log(add(1, 2));

// デフォルト値
// const add = (a: number, b: number = 1) => {
//   return a + b;
// };

// console.log(add(1));

// スプレットオペレーター
// 配列
// const hobbites = ["Support", "Cooking"];
// const activeHobbites = ["Hiking"];
// // console.log(hobbites[1])
// activeHobbites.push(...hobbites);
// console.log(activeHobbites);

// // オブジェクトパターン
// const person = {
//   name: "test",
//   age: 28,
// };
// const copiedPerson = {
//   ...person,
// };

// レストパラメーター
// const add = (...numbers: number[]) => {
//   let result = 0;
//   return numbers.reduce((curResult, curValue) => {
//     return curResult + curValue;
//   }, 0);
// };

// const addedNumbers = add(1, 2, 3, 4, 5);
// console.log(addedNumbers);

// 分割代入
// 配列
// const hobbites = ["Support", "Cooking"];
// // const hobby = hobbites[0];
// const [hobby1, hobby2, ...remainingHobby] = hobbites;
// console.log(hobbites, hobby1, hobby2);

// // オブジェクト
// const person = {
//   nameUser: "test",
//   age: 28,
// };
// const { nameUser, age } = person;
// console.log(person, nameUser, age);

/**
 * lesson5 クラス
 * JS プロトタイプ
 * シングルトンパターン
 */

abstract class Department {
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

  static year = 2000;

  // 静的なプロパティ
  static createEmployee(name: string) {
    return { name: name };
  }

  constructor(private readonly id: string, private name: string) {
    // this.name = n;
  }

  // 抽象メソッド
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfomation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  private lastReport: string = "";

  constructor(id: string, private admins: string) {
    super(id, "IT");
    this.admins = admins;
  }

  // オーバーライド
  addEmployee(employee: string): void {
    if (employee === "Lee") return;
    this.employees.push(employee);
  }

  addReport(text: string) {
    this.lastReport = text;
  }

  get RecentReport() {
    return this.lastReport;
  }

  set RecentReportt(value: string) {
    this.addReport(value);
  }

  describe(this: Department) {
    console.log(`YES`);
  }
}

const acounting = new ITDepartment("1", "Max");

acounting.describe();
acounting.addEmployee("Lee");
acounting.addEmployee("Touru");
acounting.printEmployeeInfomation();
acounting.addReport("test");

// setter;
acounting.RecentReportt = "aaa";

// getter;
console.log(acounting.RecentReport);

console.log(acounting);

const employee1 = Department.createEmployee("aaaaaaa");
console.log(employee1, Department.year);
