/**
 * ジェネリクスとは何か？
 * ⇨追加の型情報を提供できる = TypeScriptのサポートを受けることができる
 * 組み込み型Generics
 * (Promiseとは何か調べる必要がある)
 */

// Array
const names: Array<string | number> = [];

// Promise
const promise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("終わりました!");
  }, 2000);
});

promise.then((data) => {
  data.split(" ");
});

/**
 * Generics関数の作成
 */

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: "Max" }, { age: 28 });
console.log(mergeObj.age);

/**
 * Genericsに制約を追加する
 */

function merge2<T extends Object, U extends Object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj2 = merge2({ name: "Max" }, { age: 28 });
console.log(mergeObj.age);

/**
 * もう一つのGenercic関数
 */

interface Length {
  length: number;
}

function countAndDescribe<T extends Length>(element: T): [T, string] {
  let des = "値がありません";
  if (element.length > 0) {
    des = "値は" + element.length + "個です";
  }
  return [element, des];
}

console.log(countAndDescribe("aaaaaaa"));
console.log(countAndDescribe(""));

/**
 * keyofの制約
 */

function extractAndCover<T extends object, U extends keyof T>(obj: T, key: U) {
  return "value" + obj[key];
}

// ↓↓エラーになる
// extractAndCover({}, "name");
extractAndCover({ name: "Max" }, "name");

/**
 * Generic クラス
 */

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const tesxtStroge = new DataStorage<string>();
tesxtStroge.addItem("data1");
console.log(tesxtStroge.getItems());

const numberStroge = new DataStorage<number>();

const objectStroge = new DataStorage<object>();
objectStroge.addItem({ name: "Max" });
objectStroge.addItem({ name: "Max" });
objectStroge.addItem({ name: "Max" });
console.log(objectStroge.getItems);

/**
 * Generic型のユーティリティ
 * Partial型、Readonly(読み取り専用)
 */

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  data: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = data;
  return courseGoal as CourseGoal;
}

const namess: Readonly<string[]> = ["Max", "Min"];
namess.push("Manu");

/**
 * Gneric型 VS Union型
 */
