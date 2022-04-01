/**
 * クラスデコレーター
 */

// ↓↓デコレーター(クラスに対して)
// クラスの定義を見つけた際に処理が動く
function Logger(constructor: Function) {
  console.log("ログ出力中");
  console.log(constructor);
}

@Logger
class Person5 {
  name = "Max";

  constructor() {
    console.log("Personクラスを作成中");
  }
}

const parts = new Person5();
console.log(parts);

/**
 * デコレーターファクトリー
 */

function Logger2(logStriing: string) {
  return function (constructor: Function) {
    console.log(logStriing);
    console.log(constructor);
  };
}

@Logger2("ログ出力中")
class Person6 {
  name = "Max";

  constructor() {
    console.log("Personクラスを作成中");
  }
}

/**
 * 便利なデコレーター
 */

function WithTemplate(template: string, hookId: string) {
  console.log("!!!!!");
  return function (_: Function) {
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
    }
  };
}

// @WithTemplate("<h1>Hello TypeScript</h1>", "up")
class Person7 {
  name = "Max";

  constructor() {
    console.log("Personクラスを作成中");
  }
}

/**
 * 複数のデコレーターの追加
 */

@Logger2("ログ出力中2")
@WithTemplate("<h1>Hello TypeScript</h1>", "up")
class Person9 {
  name = "Max";

  constructor() {
    console.log("Personクラスを作成中");
  }
}

/**
 * プロパティーデコレーターの詳細
 */

function Log(target: any, propertyName: string | Symbol) {
  console.log("プロパティデコレーター");
  console.log(target, propertyName);
}

class Person10 {
  @Log
  name: string;
  private _age: number;

  set setAge(val: number) {
    if (val > 0) {
      this._age = val;
    } else {
      throw new Error("値が不正です");
    }
  }

  constructor(name: string, age: number) {
    this.name = name;
    this._age = age;
  }

  getTaxAge(tax: number) {
    return this._age * (1 + tax);
  }
}
