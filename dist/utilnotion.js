"use strict";
const el1 = {
    name: "Trou",
    privileges: ["a", "b"],
    startDate: new Date(),
};
console.log(el1);
function add(a, b) {
    // このif分が型ガードと呼ばれているもの。使用する際はunion型を使用するみたい
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInfomation(emp) {
    console.log(emp.name);
    //   inも型ガードの一つ
    if ("privileges" in emp) {
        console.log(emp.privileges);
    }
    if ("startDate" in emp) {
        console.log(emp.startDate);
    }
}
printEmployeeInfomation(el1);
class Car {
    drive() {
        console.log("運転中..");
    }
}
class Truck {
    drive() {
        console.log("トラックを運転中");
    }
    loadCargo(acount) {
        console.log("荷物を乗せています.." + acount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    //   instanceofも型ガードの一つ
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(30);
    }
}
useVehicle(v2);
function moveAnimal(animal) {
    // これでも行えるがコードが徐々に増えて見にくくなる可能性がある
    //   if ("flyingSpeed" in animal) {
    //     console.log(animal.flyingSpeed);
    //   }
    let speed;
    //   同じプロパティ名を持っているので使用できる型ガード
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log(speed);
}
moveAnimal({ type: "bird", flyingSpeed: 100 });
/**
 * 型キャスト
 * 明確に型を推論できない場合に使用する
 * （（この講座には関係ない、エクスクラメーションマーク(!)調べる））
 */
// この段階ではTypeScripがid='message'が存在するのかわからない(判定できない)
// ①<>を使用し、中に読み取りたい属性を記載する
// const paragraph = <HTMLInputElement>document.getElementById("message")!;
// console.log(paragraph);
// ② asを使用し、後ろに属性を記載する
const paragraph = document.getElementById("message");
console.log(paragraph);
paragraph.value = "こんにちわ";
const errorBag = {
    email: "正しいメールアドレスではありません。",
    // 1もstringとして処理される
    1: "正しいメールアドレスではありません。",
    userName: "正しい名前ではありません",
};
function add3(a, b) {
    // このif分が型ガードと呼ばれているもの。使用する際はunion型を使用するみたい
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result5 = add3("a", "b");
result5.split("");
/**
 * オプショナルチェイン
 */
const fetchUserData = {
    id: "ul",
    name: "user1",
    job: {
        titile: "Developmer",
        descript: "TypeScript",
    },
};
// 最初にfetchUserData.jobがあるのか確認している
// ネストされたデータに簡単にアクセスできる
console.log(fetchUserData.job && fetchUserData.job.titile);
/**
 * NULL合体演算子
 */
const userInput = undefined;
// userInputがnullかundefinedか判定している
const storeData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
console.log(storeData);
