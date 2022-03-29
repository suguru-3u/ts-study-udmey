/**
 * 交差型
 * typeでもinterface両方行える！
 * (typeの方がコード量が少ない?)
 */
type Admin = {
  name: string;
  privileges: string[];
};

type Emplyee = {
  name: string;
  startDate: Date;
};

type ElevateEmploee = Admin & Emplyee;

const el1: ElevateEmploee = {
  name: "Trou",
  privileges: ["a", "b"],
  startDate: new Date(),
};

type Conbinacle = string | number;
type Numeric = number | boolean;

// この方はnumber型になる！(共有している方がnumberの為)
type Universal = Conbinacle & Numeric;

console.log(el1);

/**
 * 型ガード
 */

type Conbinacle2 = string | number;

function add(a: Conbinacle2, b: Conbinacle2) {
  // このif分が型ガードと呼ばれているもの。使用する際はunion型を使用するみたい
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type Admin2 = {
  name: string;
  privileges: string[];
};

type Emplyee2 = {
  name: string;
  startDate: Date;
};

type UnkonewEmployee = Admin2 | Emplyee2;

function printEmployeeInfomation(emp: UnkonewEmployee) {
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
  loadCargo(acount: number) {
    console.log("荷物を乗せています.." + acount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  //   instanceofも型ガードの一つ
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(30);
  }
}

useVehicle(v2);

/**
 * 判別可能なUnion型
 */

interface Bird {
  // ↓リテラル型(birdしか書けない)
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  // ↓リテラル型(horseしか書けない)
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
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
const paragraph = document.getElementById("message") as HTMLInputElement;
console.log(paragraph);

paragraph.value = "こんにちわ";

/**
 * インデックス型
 * オブジェクトを定義する際に柔軟に対応するためのもの
 */

interface ErrorContainer {
  // プロパティの名前、数はわからないがこれなら対応することができる「
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "正しいメールアドレスではありません。",
  // 1もstringとして処理される
  1: "正しいメールアドレスではありません。",
  userName: "正しい名前ではありません",
};

/**
 * 関数オーバーロード
 * TyprScritpが正しく型の推論ができない場合に役に立つ！
 */

type Conbinacle3 = string | number;

function add3(a: number, b: number): number;
function add3(a: string, b: string): string;

function add3(a: Conbinacle3, b: Conbinacle3) {
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
const storeData = userInput ?? "DEFAULT";

console.log(storeData);
