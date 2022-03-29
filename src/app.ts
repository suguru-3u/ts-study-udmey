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
