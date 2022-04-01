"use strict";
/**
 * クラスデコレーター
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ↓↓デコレーター(クラスに対して)
// クラスの定義を見つけた際に処理が動く
function Logger(constructor) {
    console.log("ログ出力中");
    console.log(constructor);
}
let Person5 = class Person5 {
    constructor() {
        this.name = "Max";
        console.log("Personクラスを作成中");
    }
};
Person5 = __decorate([
    Logger
], Person5);
const parts = new Person5();
console.log(parts);
/**
 * デコレーターファクトリー
 */
function Logger2(logStriing) {
    return function (constructor) {
        console.log(logStriing);
        console.log(constructor);
    };
}
let Person6 = class Person6 {
    constructor() {
        this.name = "Max";
        console.log("Personクラスを作成中");
    }
};
Person6 = __decorate([
    Logger2("ログ出力中")
], Person6);
/**
 * 便利なデコレーター
 */
function WithTemplate(template, hookId) {
    console.log("!!!!!");
    return function (_) {
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
        }
    };
}
// @WithTemplate("<h1>Hello TypeScript</h1>", "up")
class Person7 {
    constructor() {
        this.name = "Max";
        console.log("Personクラスを作成中");
    }
}
/**
 * 複数のデコレーターの追加
 */
let Person9 = class Person9 {
    constructor() {
        this.name = "Max";
        console.log("Personクラスを作成中");
    }
};
Person9 = __decorate([
    Logger2("ログ出力中2"),
    WithTemplate("<h1>Hello TypeScript</h1>", "up")
], Person9);
/**
 * プロパティーデコレーターの詳細
 */
function Log(target, propertyName) {
    console.log("プロパティデコレーター");
    console.log(target, propertyName);
}
class Person10 {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }
    set setAge(val) {
        if (val > 0) {
            this._age = val;
        }
        else {
            throw new Error("値が不正です");
        }
    }
    getTaxAge(tax) {
        return this._age * (1 + tax);
    }
}
__decorate([
    Log
], Person10.prototype, "name", void 0);
