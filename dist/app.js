"use strict";
/**
 * ジェネリクスとは何か？
 * ⇨追加の型情報を提供できる = TypeScriptのサポートを受けることができる
 * 組み込み型Generics
 * (Promiseとは何か調べる必要がある)
 */
// Array
const names = [];
// Promise
const promise = new Promise((resolve, reject) => {
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
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: "Max" }, { age: 28 });
console.log(mergeObj.age);
/**
 * Genericsに制約を追加する
 */
function merge2(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj2 = merge2({ name: "Max" }, { age: 28 });
console.log(mergeObj.age);
function countAndDescribe(element) {
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
function extractAndCover(obj, key) {
    return "value" + obj[key];
}
// ↓↓エラーになる
// extractAndCover({}, "name");
extractAndCover({ name: "Max" }, "name");
/**
 * Generic クラス
 */
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const tesxtStroge = new DataStorage();
tesxtStroge.addItem("data1");
console.log(tesxtStroge.getItems());
const numberStroge = new DataStorage();
const objectStroge = new DataStorage();
objectStroge.addItem({ name: "Max" });
objectStroge.addItem({ name: "Max" });
objectStroge.addItem({ name: "Max" });
console.log(objectStroge.getItems);
function createCourseGoal(title, description, data) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = data;
    return courseGoal;
}
const namess = ["Max", "Min"];
namess.push("Manu");
/**
 * Gneric型 VS Union型
 */
