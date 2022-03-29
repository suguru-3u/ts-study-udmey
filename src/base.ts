console.log('Hello TypeScript');

/**
 * コアな型(基本)
 * number (TypeScriptは頭が小文字)
 * string　(TypeScriptは頭が小文字)
 * boolean
 * object
 * Array
 * Tuple (JavaScriptにはない) 長さ固定の配列
 * Enum (JavaScriptにはない)
 * Any (どんな値も入れることができるため、基本的には使用しない)
 *
 * Type Inference 型推論
 * 型を推論してくれる
 * any型はなんでも受け入れる型
 * 常に型を書く必要はない
 */

function add(n1: number, n2: number, showResult: boolean, resultPhrase: string){
    const result = n1 + n2;
    if(showResult){
        console.log(resultPhrase +  result)
    }else {
        return n1 + n2;
    }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result: '

const result  = add(number1, number2, printResult, resultPhrase);
// console.log(result);