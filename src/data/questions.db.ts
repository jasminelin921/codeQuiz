import { type Topic, type Difficulty } from "@/views/Home/constant"

export interface Question {
  id: string
  quizId: string
  topic: Topic
  difficulty: Difficulty
  text: string
  code?: string
  options: string[]
  answer: number
  explanation: string
}

export const QUESTIONS: Question[] = [

  // ─────────────────────────────────────────
  // JavaScript 初級測驗 1
  // ─────────────────────────────────────────
  {
    id: 'js-1-q1', quizId: 'js-1', topic: 'javascript', difficulty: 'easy',
    text: '以下程式碼的輸出為何？',
    code: 'console.log(typeof null)',
    options: ['"null"', '"undefined"', '"object"', '"boolean"'],
    answer: 2,
    explanation: 'typeof null 回傳 "object" 是 JavaScript 的歷史錯誤，為維持向後相容性而未修正。',
  },
  {
    id: 'js-1-q2', quizId: 'js-1', topic: 'javascript', difficulty: 'easy',
    text: '以下哪個是宣告變數的正確方式（不可重新賦值）？',
    options: ['var name = "John"', 'let name = "John"', 'const name = "John"', 'variable name = "John"'],
    answer: 2,
    explanation: 'const 宣告的變數不可重新賦值，是宣告常數的正確方式。var 和 let 可以重新賦值。',
  },
  {
    id: 'js-1-q3', quizId: 'js-1', topic: 'javascript', difficulty: 'easy',
    text: '以下程式碼的輸出為何？',
    code: 'console.log(1 + "2")',
    options: ['3', '"12"', 'NaN', 'Error'],
    answer: 1,
    explanation: '當數字和字串相加時，JavaScript 會將數字轉為字串，進行字串串接，結果為 "12"。',
  },
  {
    id: 'js-1-q4', quizId: 'js-1', topic: 'javascript', difficulty: 'easy',
    text: '下列哪個值在 JavaScript 中是 falsy？',
    options: ['"false"', '[]', '0', '{}'],
    answer: 2,
    explanation: 'JavaScript 中的 falsy 值包含：false、0、""、null、undefined、NaN。"false" 是非空字串，[] 和 {} 是物件，都是 truthy。',
  },
  {
    id: 'js-1-q5', quizId: 'js-1', topic: 'javascript', difficulty: 'easy',
    text: '以下程式碼的輸出為何？',
    code: 'console.log(2 ** 3)',
    options: ['6', '8', '9', 'Error'],
    answer: 1,
    explanation: '** 是指數運算子，2 ** 3 等於 2 的 3 次方，結果為 8。',
  },
  {
    id: 'js-1-q6', quizId: 'js-1', topic: 'javascript', difficulty: 'easy',
    text: '如何取得陣列的最後一個元素？',
    code: 'const arr = [1, 2, 3, 4, 5]',
    options: ['arr.last()', 'arr[arr.length]', 'arr[arr.length - 1]', 'arr.end()'],
    answer: 2,
    explanation: '陣列索引從 0 開始，最後一個元素的索引是 length - 1，所以用 arr[arr.length - 1] 取得。',
  },

  // ─────────────────────────────────────────
  // JavaScript 初級測驗 2
  // ─────────────────────────────────────────
  {
    id: 'js-2-q1', quizId: 'js-2', topic: 'javascript', difficulty: 'easy',
    text: '以下哪個方法可以將陣列元素合併成字串？',
    options: ['arr.concat()', 'arr.join()', 'arr.merge()', 'arr.toString()'],
    answer: 1,
    explanation: 'join() 方法將陣列所有元素合併成一個字串，可以指定分隔符號，例如 arr.join(", ")。',
  },
  {
    id: 'js-2-q2', quizId: 'js-2', topic: 'javascript', difficulty: 'easy',
    text: 'Array.map() 的作用是什麼？',
    options: [
      '過濾陣列元素',
      '對每個元素執行函式並回傳新陣列',
      '將陣列排序',
      '找到符合條件的第一個元素',
    ],
    answer: 1,
    explanation: 'map() 對陣列中每個元素執行提供的函式，並回傳一個包含所有結果的新陣列，不改變原陣列。',
  },
  {
    id: 'js-2-q3', quizId: 'js-2', topic: 'javascript', difficulty: 'easy',
    text: '以下程式碼的輸出為何？',
    code: 'console.log([] == false)',
    options: ['true', 'false', 'undefined', 'Error'],
    answer: 0,
    explanation: '空陣列 [] 在比較時會被轉換為空字串 ""，空字串再轉換為 0，false 也轉換為 0，所以 [] == false 為 true。',
  },
  {
    id: 'js-2-q4', quizId: 'js-2', topic: 'javascript', difficulty: 'easy',
    text: '以下哪個方法不會改變原陣列？',
    options: ['push()', 'pop()', 'map()', 'splice()'],
    answer: 2,
    explanation: 'map() 回傳新陣列，不改變原陣列。push()、pop()、splice() 都會直接修改原陣列。',
  },
  {
    id: 'js-2-q5', quizId: 'js-2', topic: 'javascript', difficulty: 'easy',
    text: 'Object.keys() 回傳什麼？',
    code: 'const obj = { a: 1, b: 2, c: 3 }',
    options: ['物件的值陣列', '物件的鍵名陣列', '物件的鍵值對陣列', '物件的長度'],
    answer: 1,
    explanation: 'Object.keys() 回傳物件所有可列舉屬性的鍵名陣列，此例回傳 ["a", "b", "c"]。',
  },
  {
    id: 'js-2-q6', quizId: 'js-2', topic: 'javascript', difficulty: 'easy',
    text: '以下程式碼的輸出為何？',
    code: 'const a = { x: 1 }\nconst b = a\nb.x = 2\nconsole.log(a.x)',
    options: ['1', '2', 'undefined', 'Error'],
    answer: 1,
    explanation: '物件是參考型別，b = a 讓 b 和 a 指向同一個物件，修改 b.x 也會影響 a.x。',
  },

  // ─────────────────────────────────────────
  // JavaScript 中級測驗 1
  // ─────────────────────────────────────────
  {
    id: 'js-3-q1', quizId: 'js-3', topic: 'javascript', difficulty: 'medium',
    text: 'JavaScript 中的閉包是什麼？',
    options: [
      '關閉瀏覽器的函式',
      '外部函式執行結束後，內部函式仍能存取其作用域',
      '結束迴圈的方式',
      '私有類別方法',
    ],
    answer: 1,
    explanation: '閉包是指內部函式在外部函式返回後，依然能存取外部函式變數的特性。',
  },
  {
    id: 'js-3-q2', quizId: 'js-3', topic: 'javascript', difficulty: 'medium',
    text: '以下程式碼的輸出為何？',
    code: 'for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0)\n}',
    options: ['0, 1, 2', '3, 3, 3', '0, 0, 0', 'undefined'],
    answer: 1,
    explanation: 'var 是函式作用域，迴圈結束後 i 已變為 3，setTimeout 的回呼執行時存取的 i 都是 3。改用 let 可解決此問題。',
  },
  {
    id: 'js-3-q3', quizId: 'js-3', topic: 'javascript', difficulty: 'medium',
    text: 'Promise.all() 和 Promise.allSettled() 的主要差別是什麼？',
    options: [
      '執行速度不同',
      'Promise.all() 任一 rejected 就立即 reject；Promise.allSettled() 等全部完成',
      '支援的 Promise 數量不同',
      '回傳格式完全相同',
    ],
    answer: 1,
    explanation: 'Promise.all() 只要有一個 rejected 就立即 reject。Promise.allSettled() 會等所有 Promise 完成，無論 fulfilled 或 rejected，並回傳每個結果的狀態。',
  },
  {
    id: 'js-3-q4', quizId: 'js-3', topic: 'javascript', difficulty: 'medium',
    text: '以下程式碼的輸出順序為何？',
    code: 'console.log("A")\nsetTimeout(() => console.log("B"), 0)\nPromise.resolve().then(() => console.log("C"))\nconsole.log("D")',
    options: ['A, B, C, D', 'A, D, B, C', 'A, D, C, B', 'A, C, D, B'],
    answer: 2,
    explanation: '同步程式碼先執行（A, D），接著 microtask queue（Promise）的 C，最後才是 macrotask queue（setTimeout）的 B。',
  },
  {
    id: 'js-3-q5', quizId: 'js-3', topic: 'javascript', difficulty: 'medium',
    text: '以下關於 this 的描述，何者正確？',
    code: 'const obj = {\n  name: "test",\n  fn: () => console.log(this.name)\n}',
    options: [
      'this 指向 obj',
      'this 指向 window/global',
      'this 指向 undefined',
      '以上皆非',
    ],
    answer: 1,
    explanation: '箭頭函式沒有自己的 this，會繼承外層作用域的 this。在此例中，外層是全域作用域，this 指向 window（瀏覽器）或 global（Node.js）。',
  },
  {
    id: 'js-3-q6', quizId: 'js-3', topic: 'javascript', difficulty: 'medium',
    text: '展開運算子（Spread Operator）的正確用途為何？',
    code: 'const arr1 = [1, 2, 3]\nconst arr2 = [...arr1, 4, 5]',
    options: [
      '只能用於陣列',
      '可用於陣列和物件的淺拷貝與合併',
      '進行深拷貝',
      '只能在函式參數中使用',
    ],
    answer: 1,
    explanation: '展開運算子可用於陣列和物件的淺拷貝與合併。注意它只做淺拷貝，巢狀物件仍是參考。',
  },
  {
    id: 'js-3-q7', quizId: 'js-3', topic: 'javascript', difficulty: 'medium',
    text: '以下程式碼的輸出為何？',
    code: 'console.log(0.1 + 0.2 === 0.3)',
    options: ['true', 'false', 'NaN', 'Error'],
    answer: 1,
    explanation: '浮點數運算在 IEEE 754 標準下有精度問題，0.1 + 0.2 的結果是 0.30000000000000004，不等於 0.3。',
  },
  {
    id: 'js-3-q8', quizId: 'js-3', topic: 'javascript', difficulty: 'medium',
    text: 'Array.reduce() 的第二個參數代表什麼？',
    code: 'const sum = [1, 2, 3].reduce((acc, cur) => acc + cur, 0)',
    options: [
      '回呼函式',
      '累積值的初始值',
      '陣列的起始索引',
      '最大迭代次數',
    ],
    answer: 1,
    explanation: 'reduce() 的第二個參數是累積值（accumulator）的初始值。此例從 0 開始累加，結果為 6。',
  },

  // ─────────────────────────────────────────
  // JavaScript 中級測驗 2
  // ─────────────────────────────────────────
  {
    id: 'js-4-q1', quizId: 'js-4', topic: 'javascript', difficulty: 'medium',
    text: 'var、let、const 在作用域上的主要差異為何？',
    options: [
      'var 是區塊作用域，let 和 const 是函式作用域',
      'var 是函式作用域，let 和 const 是區塊作用域',
      '三者都是函式作用域',
      '三者都是區塊作用域',
    ],
    answer: 1,
    explanation: 'var 是函式作用域（function scope），let 和 const 是區塊作用域（block scope）。區塊作用域讓變數只在 {} 內有效。',
  },
  {
    id: 'js-4-q2', quizId: 'js-4', topic: 'javascript', difficulty: 'medium',
    text: '以下程式碼的輸出為何？',
    code: 'console.log(typeof undefined)\nconsole.log(typeof undeclaredVar)',
    options: ['"undefined", Error', '"undefined", "undefined"', '"null", "undefined"', 'Error, Error'],
    answer: 1,
    explanation: 'typeof 對未宣告的變數也回傳 "undefined"，不會拋出錯誤。這是 typeof 的特殊行為。',
  },
  {
    id: 'js-4-q3', quizId: 'js-4', topic: 'javascript', difficulty: 'medium',
    text: '以下哪個方法可以用來深拷貝一個簡單物件？',
    options: [
      'Object.assign({}, obj)',
      'const copy = obj',
      'JSON.parse(JSON.stringify(obj))',
      '展開運算子 { ...obj }',
    ],
    answer: 2,
    explanation: 'JSON.parse(JSON.stringify(obj)) 可以深拷貝不含 function、undefined、Symbol 的簡單物件。Object.assign 和展開運算子只做淺拷貝。',
  },
  {
    id: 'js-4-q4', quizId: 'js-4', topic: 'javascript', difficulty: 'medium',
    text: 'async/await 的本質是什麼？',
    options: [
      '全新的非同步機制',
      'Promise 的語法糖',
      'setTimeout 的改進版',
      'Generator 的別名',
    ],
    answer: 1,
    explanation: 'async/await 是 Promise 的語法糖，讓非同步程式碼看起來像同步程式碼，底層仍是 Promise。',
  },
  {
    id: 'js-4-q5', quizId: 'js-4', topic: 'javascript', difficulty: 'medium',
    text: '以下程式碼中，如何正確處理錯誤？',
    code: 'async function fetchData() {\n  const res = await fetch("/api/data")\n  return res.json()\n}',
    options: [
      '加上 .catch()',
      '用 try/catch 包住 await',
      '加上 onerror 事件',
      '不需要錯誤處理',
    ],
    answer: 1,
    explanation: '在 async 函式中，應用 try/catch 包住 await 來捕捉錯誤，這是處理非同步錯誤的標準方式。',
  },
  {
    id: 'js-4-q6', quizId: 'js-4', topic: 'javascript', difficulty: 'medium',
    text: '事件冒泡（Event Bubbling）是什麼？',
    options: [
      '事件從根元素往下傳遞到目標元素',
      '事件從目標元素往上傳遞到根元素',
      '事件在同一元素上反覆觸發',
      '事件被取消後的行為',
    ],
    answer: 1,
    explanation: '事件冒泡是指事件從觸發的目標元素開始，向上傳遞到父元素，直到根元素（document）。可用 event.stopPropagation() 阻止冒泡。',
  },
  {
    id: 'js-4-q7', quizId: 'js-4', topic: 'javascript', difficulty: 'medium',
    text: 'localStorage 和 sessionStorage 的主要差異為何？',
    options: [
      '儲存容量不同',
      'localStorage 關閉瀏覽器後仍存在，sessionStorage 關閉分頁後清除',
      'sessionStorage 可跨域存取',
      'localStorage 只能儲存字串',
    ],
    answer: 1,
    explanation: 'localStorage 的資料會永久保存直到手動清除；sessionStorage 的資料在分頁關閉後就會清除。兩者都只能儲存字串且受同源政策限制。',
  },
  {
    id: 'js-4-q8', quizId: 'js-4', topic: 'javascript', difficulty: 'medium',
    text: '以下關於 Map 和 Object 的描述，何者正確？',
    options: [
      'Map 的 key 只能是字串',
      'Map 的 key 可以是任何型別，且插入順序有保證',
      'Object 的迭代效能比 Map 好',
      'Map 和 Object 完全相同',
    ],
    answer: 1,
    explanation: 'Map 的 key 可以是任何型別（包含物件、函式等），且保證按插入順序迭代。Object 的 key 只能是字串或 Symbol。',
  },

  // ─────────────────────────────────────────
  // JavaScript 高級測驗 1
  // ─────────────────────────────────────────
  {
    id: 'js-5-q1', quizId: 'js-5', topic: 'javascript', difficulty: 'hard',
    text: '以下程式碼的輸出為何？',
    code: 'function foo() {\n  console.log(this.x)\n}\nconst obj = { x: 1, foo }\nconst bar = obj.foo\nobj.foo()\nbar()',
    options: ['1, 1', '1, undefined', '1, Error', 'undefined, undefined'],
    answer: 1,
    explanation: 'obj.foo() 執行時透過物件呼叫，this 隱性綁定至 obj，故輸出 1。而 const bar = obj.foo 僅是複製函式參考，執行 bar() 時屬於獨立函式呼叫（Default Binding），在非嚴格模式下 this 指向全域物件，因全域無 x 變數故輸出 undefined（若在嚴格模式下則會因 this 為 undefined 而報錯）。',
  },
  {
    id: 'js-5-q2', quizId: 'js-5', topic: 'javascript', difficulty: 'hard',
    text: '實作一個 curry 函式，讓以下呼叫方式成立',
    code: 'curry(add)(1)(2)(3) // 回傳 6\n// add = (a, b, c) => a + b + c',
    options: [
      'function curry(fn) { return fn }',
      'function curry(fn) {\n  return function curried(...args) {\n    if (args.length >= fn.length) return fn(...args)\n    return (...more) => curried(...args, ...more)\n  }\n}',
      'function curry(fn) { return (...args) => fn(...args) }',
      'function curry(fn) { return function() { return fn.apply(this, arguments) } }',
    ],
    answer: 1,
    explanation: 'Currying 將多參數函式轉換為一系列單參數函式。關鍵是比較已收集的參數數量與原函式的 length，足夠時執行，不夠時繼續收集參數。',
  },
  {
    id: 'js-5-q3', quizId: 'js-5', topic: 'javascript', difficulty: 'hard',
    text: '以下 Proxy 程式碼的輸出為何？',
    code: 'const handler = {\n  get(target, key) {\n    return key in target ? target[key] : `${key} 不存在`\n  }\n}\nconst p = new Proxy({ name: "John" }, handler)\nconsole.log(p.name)\nconsole.log(p.age)',
    options: ['"John", undefined', '"John", "age 不存在"', 'Error, Error', '"John", null'],
    answer: 1,
    explanation: 'Proxy 可以攔截物件的操作。get trap 在存取屬性時觸發，這裡實作了當屬性不存在時回傳自訂訊息而非 undefined，是 Proxy 的典型應用。',
  },
  {
    id: 'js-5-q4', quizId: 'js-5', topic: 'javascript', difficulty: 'hard',
    text: '以下 Generator 函式的輸出為何？',
    code: 'function* gen() {\n  yield 1\n  yield 2\n  return 3\n}\nconst g = gen()\nconsole.log(g.next())\nconsole.log(g.next())\nconsole.log(g.next())',
    options: [
      '1, 2, 3',
      '{ value: 1, done: false }, { value: 2, done: false }, { value: 3, done: true }',
      '{ value: 1 }, { value: 2 }, { value: 3 }',
      'Error',
    ],
    answer: 1,
    explanation: 'Generator 函式每次呼叫 next() 執行到下一個 yield，回傳 { value, done }。yield 的 done 是 false，return 的 done 是 true，表示迭代結束。',
  },
  {
    id: 'js-5-q5', quizId: 'js-5', topic: 'javascript', difficulty: 'hard',
    text: '以下關於 WeakMap 和 Map 的差異，何者正確？',
    options: [
      '完全相同',
      'WeakMap 的 key 只能是物件，且是弱參考（不阻止垃圾回收），不可迭代',
      'WeakMap 效能比 Map 好',
      'WeakMap 可以用基本型別作為 key',
    ],
    answer: 1,
    explanation: 'WeakMap 的 key 必須是物件，且持有弱參考：當 key 物件沒有其他參考時，可被垃圾回收，對應的條目也自動移除。適合儲存 DOM 元素相關資料，避免記憶體洩漏。',
  },
  {
    id: 'js-5-q6', quizId: 'js-5', topic: 'javascript', difficulty: 'hard',
    text: '實作 Promise.all 的核心邏輯，以下哪個實作最接近正確？',
    code: 'function myPromiseAll(promises) { ??? }',
    options: [
      'return Promise.resolve(promises.map(p => p))',
      'return new Promise((resolve, reject) => {\n  const results = []\n  let count = 0\n  promises.forEach((p, i) => {\n    Promise.resolve(p).then(val => {\n      results[i] = val\n      if (++count === promises.length) resolve(results)\n    }).catch(reject)\n  })\n})',
      'return promises.reduce((acc, p) => acc.then(() => p), Promise.resolve())',
      'return Promise.resolve(promises)',
    ],
    answer: 1,
    explanation: 'Promise.all 的關鍵是：並行執行所有 Promise，用計數器追蹤完成數量，用索引保持結果順序，任一 reject 立即 reject 整體。',
  },

  // ─────────────────────────────────────────
  // TypeScript 初級測驗 1
  // ─────────────────────────────────────────
  {
    id: 'ts-1-q1', quizId: 'ts-1', topic: 'typescript', difficulty: 'easy',
    text: 'Partial<T> 工具型別的效果是什麼？',
    options: ['將所有屬性設為必填', '將所有屬性設為可選', '將所有屬性設為唯讀', '移除所有屬性'],
    answer: 1,
    explanation: 'Partial<T> 會將 T 的所有屬性加上 ?，使其變為可選，常用於更新操作。',
  },
  {
    id: 'ts-1-q2', quizId: 'ts-1', topic: 'typescript', difficulty: 'easy',
    text: '以下程式碼的回傳型別是什麼？',
    code: 'function identity<T>(arg: T): T {\n  return arg\n}',
    options: ['void', 'any', 'T', 'unknown'],
    answer: 2,
    explanation: '泛型函式 identity 的回傳型別和輸入型別相同，都是 T。',
  },
  {
    id: 'ts-1-q3', quizId: 'ts-1', topic: 'typescript', difficulty: 'easy',
    text: 'keyof 運算子的作用是什麼？',
    code: 'type Keys = keyof { name: string; age: number }',
    options: ['取得物件的值', '取得型別的所有 key 組成的聯集', '刪除物件的 key', '複製物件的型別'],
    answer: 1,
    explanation: 'keyof 會產生型別所有鍵名組成的聯集型別，結果為 "name" | "age"。',
  },
  {
    id: 'ts-1-q4', quizId: 'ts-1', topic: 'typescript', difficulty: 'easy',
    text: 'TypeScript 中 interface 和 type 的主要差異為何？',
    options: [
      '完全相同，可以互換',
      'interface 可以被繼承和合併宣告，type 適合聯集和交叉型別',
      'type 比 interface 效能更好',
      'interface 只能用於物件',
    ],
    answer: 1,
    explanation: 'interface 支援繼承（extends）和宣告合併（Declaration Merging），適合物件結構。type 更靈活，可用於聯集（|）、交叉（&）等複雜型別。',
  },
  {
    id: 'ts-1-q5', quizId: 'ts-1', topic: 'typescript', difficulty: 'easy',
    text: '以下哪個是正確的 TypeScript 陣列型別宣告？',
    options: ['Array(string)', 'string[]', 'String[]', '以上 B 和 C 都正確'],
    answer: 1,
    explanation: 'string[] 是 TypeScript 中宣告字串陣列的標準方式。也可以寫成 Array<string>，但 String（大寫）是包裝物件型別，不建議使用。',
  },
  {
    id: 'ts-1-q6', quizId: 'ts-1', topic: 'typescript', difficulty: 'easy',
    text: 'any 和 unknown 的主要差異為何？',
    options: [
      '完全相同',
      'unknown 使用前需要型別縮窄，any 跳過型別檢查',
      'any 比 unknown 更安全',
      'unknown 只能用於函式回傳值',
    ],
    answer: 1,
    explanation: 'unknown 是型別安全的 any，使用前必須透過型別縮窄（typeof、instanceof 等）確認型別。any 直接跳過型別檢查，不安全。',
  },

  // ─────────────────────────────────────────
  // TypeScript 初級測驗 2
  // ─────────────────────────────────────────
  {
    id: 'ts-2-q1', quizId: 'ts-2', topic: 'typescript', difficulty: 'easy',
    text: '以下程式碼中，? 的作用是什麼？',
    code: 'interface User {\n  name: string\n  age?: number\n}',
    options: ['age 是必填欄位', 'age 是可選欄位', 'age 可以是 null', 'age 是唯讀欄位'],
    answer: 1,
    explanation: '在 interface 中，屬性名稱後面加上 ? 表示該屬性是可選的，可以不提供。',
  },
  {
    id: 'ts-2-q2', quizId: 'ts-2', topic: 'typescript', difficulty: 'easy',
    text: 'readonly 修飾詞的作用是什麼？',
    code: 'interface Point {\n  readonly x: number\n  readonly y: number\n}',
    options: ['屬性只能在類別中存取', '屬性建立後不可修改', '屬性是私有的', '屬性是可選的'],
    answer: 1,
    explanation: 'readonly 讓屬性在物件建立後不可被修改，嘗試修改會在編譯時報錯。',
  },
  {
    id: 'ts-2-q3', quizId: 'ts-2', topic: 'typescript', difficulty: 'easy',
    text: 'Union Type（聯集型別）的語法是什麼？',
    code: 'type ID = ???',
    options: ['string & number', 'string | number', 'string + number', 'string, number'],
    answer: 1,
    explanation: '聯集型別使用 | 符號，表示值可以是多種型別之一。string | number 表示可以是字串或數字。',
  },
  {
    id: 'ts-2-q4', quizId: 'ts-2', topic: 'typescript', difficulty: 'easy',
    text: 'Required<T> 工具型別的效果是什麼？',
    options: ['將所有屬性設為可選', '將所有屬性設為必填', '將所有屬性設為唯讀', '移除所有可選屬性'],
    answer: 1,
    explanation: 'Required<T> 是 Partial<T> 的相反，會移除所有屬性的 ?，使所有屬性變為必填。',
  },
  {
    id: 'ts-2-q5', quizId: 'ts-2', topic: 'typescript', difficulty: 'easy',
    text: '以下程式碼中 as 的用途是什麼？',
    code: 'const el = document.getElementById("app") as HTMLElement',
    options: ['型別轉換（改變執行時的型別）', '型別斷言（告訴 TypeScript 這個型別）', '型別守衛', '型別排除'],
    answer: 1,
    explanation: 'as 是型別斷言，告訴 TypeScript 你知道這個值的型別，讓編譯器信任你。它不改變執行時的型別，只影響型別檢查。',
  },
  {
    id: 'ts-2-q6', quizId: 'ts-2', topic: 'typescript', difficulty: 'easy',
    text: 'Pick<T, K> 工具型別的作用是什麼？',
    code: 'type Name = Pick<{ name: string; age: number; email: string }, "name" | "email">',
    options: ['從型別中移除指定屬性', '從型別中選取指定屬性建立新型別', '合併兩個型別', '將屬性設為可選'],
    answer: 1,
    explanation: 'Pick<T, K> 從型別 T 中選取指定的屬性 K 建立新型別。此例結果為 { name: string; email: string }。',
  },

  // ─────────────────────────────────────────
  // TypeScript 中級測驗 1
  // ─────────────────────────────────────────
  {
    id: 'ts-3-q1', quizId: 'ts-3', topic: 'typescript', difficulty: 'medium',
    text: '以下映射型別的效果是什麼？',
    code: 'type Optional<T> = { [K in keyof T]?: T[K] }',
    options: ['等同於 Required<T>', '等同於 Partial<T>', '等同於 Readonly<T>', '等同於 Record<T, T>'],
    answer: 1,
    explanation: '這個映射型別遍歷 T 的所有鍵並加上 ?，效果與 Partial<T> 完全相同。',
  },
  {
    id: 'ts-3-q2', quizId: 'ts-3', topic: 'typescript', difficulty: 'medium',
    text: 'ReturnType<T> 的作用是什麼？',
    code: 'function getUser() {\n  return { name: "John", age: 30 }\n}\ntype User = ReturnType<typeof getUser>',
    options: ['取得函式的參數型別', '取得函式的回傳值型別', '取得類別的實例型別', '取得 Promise 的解析值型別'],
    answer: 1,
    explanation: 'ReturnType<T> 取得函式型別 T 的回傳值型別。搭配 typeof 可以從函式本身推斷出回傳值的型別。',
  },
  {
    id: 'ts-3-q3', quizId: 'ts-3', topic: 'typescript', difficulty: 'medium',
    text: '以下程式碼中 never 型別代表什麼？',
    code: 'function throwError(msg: string): never {\n  throw new Error(msg)\n}',
    options: ['函式回傳 undefined', '函式永遠不會正常返回', '函式回傳 null', '函式是非同步的'],
    answer: 1,
    explanation: 'never 表示永遠不會有值的型別，用於永遠不會正常返回的函式（如拋出錯誤或無限迴圈）。',
  },
  {
    id: 'ts-3-q4', quizId: 'ts-3', topic: 'typescript', difficulty: 'medium',
    text: '以下 Discriminated Union 的優點是什麼？',
    code: 'type Shape =\n  | { kind: "circle"; radius: number }\n  | { kind: "square"; side: number }',
    options: [
      '減少程式碼量',
      'TypeScript 可根據 kind 欄位縮窄型別，提供精確的型別推斷',
      '提升執行效能',
      '自動產生型別守衛',
    ],
    answer: 1,
    explanation: 'Discriminated Union 使用共同的字面量屬性（如 kind）作為辨識符，讓 TypeScript 在 switch/if 判斷後能精確縮窄型別。',
  },
  {
    id: 'ts-3-q5', quizId: 'ts-3', topic: 'typescript', difficulty: 'medium',
    text: '以下 infer 關鍵字的用途是什麼？',
    code: 'type UnpackPromise<T> = T extends Promise<infer U> ? U : T',
    options: [
      '繼承型別',
      '在條件型別中推斷並擷取型別',
      '建立泛型約束',
      '宣告型別變數',
    ],
    answer: 1,
    explanation: 'infer 用於條件型別中，可以推斷並擷取型別的一部分。此例從 Promise<U> 中擷取 U，讓你取得 Promise 解析後的型別。',
  },
  {
    id: 'ts-3-q6', quizId: 'ts-3', topic: 'typescript', difficulty: 'medium',
    text: 'Exclude<T, U> 的作用是什麼？',
    code: 'type T = Exclude<"a" | "b" | "c", "a" | "b">',
    options: ['從 T 中選取在 U 中的型別', '從 T 中移除在 U 中的型別', '合併 T 和 U', '取得 T 和 U 的交集'],
    answer: 1,
    explanation: 'Exclude<T, U> 從聯集型別 T 中移除可以賦值給 U 的型別。此例結果為 "c"。',
  },
  {
    id: 'ts-3-q7', quizId: 'ts-3', topic: 'typescript', difficulty: 'medium',
    text: 'as const 斷言的作用是什麼？',
    code: 'const config = {\n  endpoint: "/api",\n  timeout: 3000\n} as const',
    options: [
      '讓物件變為不可變（immutable）',
      '將所有屬性推斷為字面量型別並設為 readonly',
      '將物件轉為常數',
      '防止物件被序列化',
    ],
    answer: 1,
    explanation: 'as const 讓 TypeScript 將值推斷為最窄的字面量型別，並將所有屬性標記為 readonly。endpoint 的型別會是 "/api" 而不是 string。',
  },
  {
    id: 'ts-3-q8', quizId: 'ts-3', topic: 'typescript', difficulty: 'medium',
    text: '以下程式碼為什麼需要型別守衛？',
    code: 'function process(val: string | number) {\n  if (typeof val === "string") {\n    val.toUpperCase() // 這裡 val 是 string\n  }\n}',
    options: [
      '為了效能優化',
      '縮窄聯集型別，讓 TypeScript 知道在特定分支中的確切型別',
      '避免執行時錯誤',
      '這是多餘的',
    ],
    answer: 1,
    explanation: '型別守衛（typeof、instanceof、in 等）讓 TypeScript 在條件分支中縮窄型別。在 typeof val === "string" 的分支裡，TypeScript 確認 val 是 string，可以安全使用字串方法。',
  },

  // ─────────────────────────────────────────
  // React 初級測驗 1
  // ─────────────────────────────────────────
  {
    id: 'react-1-q1', quizId: 'react-1', topic: 'react', difficulty: 'easy',
    text: 'useState 的回傳值是什麼？',
    options: ['只有狀態值', '只有更新函式', '[狀態值, 更新函式]', '{ state, setState }'],
    answer: 2,
    explanation: 'useState 回傳一個陣列，第一個元素是目前的狀態值，第二個元素是更新狀態的函式。',
  },
  {
    id: 'react-1-q2', quizId: 'react-1', topic: 'react', difficulty: 'easy',
    text: 'useEffect 的依賴陣列為空陣列 [] 時，effect 何時執行？',
    options: ['每次 render 都執行', '只在元件掛載時執行一次', '只在元件卸載時執行', '永遠不執行'],
    answer: 1,
    explanation: 'useEffect 的依賴陣列為空 [] 時，effect 只在元件第一次掛載（mount）時執行一次，類似 class 元件的 componentDidMount。',
  },
  {
    id: 'react-1-q3', quizId: 'react-1', topic: 'react', difficulty: 'easy',
    text: 'React 中為什麼列表渲染需要 key？',
    options: [
      '只是語法要求',
      '幫助 React 識別哪些元素有變化，提升 diff 效率',
      '讓 CSS 樣式生效',
      '防止重複渲染',
    ],
    answer: 1,
    explanation: 'key 幫助 React 在 Virtual DOM diff 時識別哪些元素新增、刪除或移動，提升渲染效率。key 應該是唯一且穩定的值，不建議用 index。',
  },
  {
    id: 'react-1-q4', quizId: 'react-1', topic: 'react', difficulty: 'easy',
    text: '以下哪個是 React 中正確的事件處理方式？',
    options: [
      '<button onclick="handleClick()">',
      '<button onClick={handleClick()}>',
      '<button onClick={handleClick}>',
      '<button on-click={handleClick}>',
    ],
    answer: 2,
    explanation: 'React 使用 camelCase 的事件名稱，傳入函式的參考（不加括號）。加括號 handleClick() 會在渲染時立即執行函式。',
  },
  {
    id: 'react-1-q5', quizId: 'react-1', topic: 'react', difficulty: 'easy',
    text: 'props 和 state 的主要差異是什麼？',
    options: [
      '兩者完全相同',
      'props 由父元件傳入且唯讀，state 是元件內部管理的可變資料',
      'state 由父元件傳入，props 是內部資料',
      'props 可以直接修改，state 不行',
    ],
    answer: 1,
    explanation: 'props 是從父元件傳入的唯讀資料，不應直接修改。state 是元件內部維護的可變資料，透過 setState 或 useState 的更新函式修改。',
  },
  {
    id: 'react-1-q6', quizId: 'react-1', topic: 'react', difficulty: 'easy',
    text: 'JSX 中如何在屬性中插入 JavaScript 表達式？',
    options: ['用雙引號 "expression"', '用 ${expression}', '用大括號 {expression}', '用 (expression)'],
    answer: 2,
    explanation: 'JSX 中用大括號 {} 插入 JavaScript 表達式，例如 <div className={styles.container}> 或 <p>{count}</p>。',
  },

  // ─────────────────────────────────────────
  // React 初級測驗 2
  // ─────────────────────────────────────────
  {
    id: 'react-2-q1', quizId: 'react-2', topic: 'react', difficulty: 'easy',
    text: 'useRef 的主要用途是什麼？',
    options: [
      '管理元件狀態',
      '存取 DOM 元素或儲存不觸發 re-render 的可變值',
      '替代 useState',
      '處理副作用',
    ],
    answer: 1,
    explanation: 'useRef 回傳一個 { current } 物件，可用來存取 DOM 元素或儲存在 render 之間持久化但不觸發 re-render 的值。',
  },
  {
    id: 'react-2-q2', quizId: 'react-2', topic: 'react', difficulty: 'easy',
    text: 'React.Fragment 的用途是什麼？',
    options: [
      '建立新的 React 元素',
      '讓多個元素不需要包裹在額外的 DOM 節點中回傳',
      '防止元件重新渲染',
      '建立 Portal',
    ],
    answer: 1,
    explanation: 'React.Fragment（或簡寫 <>）讓你回傳多個元素而不需要額外的包裹 div，避免不必要的 DOM 節點。',
  },
  {
    id: 'react-2-q3', quizId: 'react-2', topic: 'react', difficulty: 'easy',
    text: '以下哪個是 React 中正確的條件渲染方式？',
    code: 'const isLoggedIn = true',
    options: [
      '<if condition={isLoggedIn}>...</if>',
      '{isLoggedIn ? <UserPanel /> : <Login />}',
      '{isLoggedIn && then <UserPanel />}',
      'if(isLoggedIn) return <UserPanel />',
    ],
    answer: 1,
    explanation: 'JSX 中常用三元運算子或 && 進行條件渲染。三元運算子適合有兩種情況，&& 適合只有一種情況。',
  },
  {
    id: 'react-2-q4', quizId: 'react-2', topic: 'react', difficulty: 'easy',
    text: 'useContext 的用途是什麼？',
    options: [
      '建立 Context',
      '在不透過 props 的情況下，讀取 Context 的值',
      '更新 Context 的值',
      '監聽 Context 的變化',
    ],
    answer: 1,
    explanation: 'useContext 讓你在函式元件中讀取 Context 的值，避免 props drilling（多層傳遞 props 的問題）。',
  },
  {
    id: 'react-2-q5', quizId: 'react-2', topic: 'react', difficulty: 'easy',
    text: '以下關於 React 元件命名的規則，何者正確？',
    options: [
      '元件名稱可以小寫開頭',
      '元件名稱必須大寫開頭',
      '元件名稱必須以 Component 結尾',
      '元件名稱只能用英文',
    ],
    answer: 1,
    explanation: 'React 元件必須以大寫字母開頭，這樣 JSX 才能區分自訂元件（大寫）和 HTML 標籤（小寫）。',
  },
  {
    id: 'react-2-q6', quizId: 'react-2', topic: 'react', difficulty: 'easy',
    text: 'children prop 的用途是什麼？',
    code: '<Card>\n  <p>Hello World</p>\n</Card>',
    options: [
      '傳遞陣列資料',
      '存取元件標籤之間的內容',
      '設定元件的子元件數量',
      '以上皆非',
    ],
    answer: 1,
    explanation: 'children 是特殊的 prop，代表放在元件開閉標籤之間的內容。這讓元件可以作為容器包裹其他內容。',
  },

  // ─────────────────────────────────────────
  // React 中級測驗 1
  // ─────────────────────────────────────────
  {
    id: 'react-3-q1', quizId: 'react-3', topic: 'react', difficulty: 'medium',
    text: 'useMemo 和 useCallback 的差異是什麼？',
    options: [
      '完全相同',
      'useMemo 快取計算結果（值），useCallback 快取函式',
      'useCallback 快取計算結果，useMemo 快取函式',
      '只有效能差異',
    ],
    answer: 1,
    explanation: 'useMemo 用於快取昂貴的計算結果（回傳值），useCallback 用於快取函式（回傳函式本身）。兩者都在依賴改變時重新計算。',
  },
  {
    id: 'react-3-q2', quizId: 'react-3', topic: 'react', difficulty: 'medium',
    text: '以下關於 useEffect cleanup 的描述，何者正確？',
    code: 'useEffect(() => {\n  const timer = setInterval(fn, 1000)\n  return () => clearInterval(timer)\n}, [])',
    options: [
      'cleanup 只在元件掛載時執行',
      'cleanup 在元件卸載時，以及 effect 重新執行前執行',
      'cleanup 每次 render 都執行',
      'cleanup 不會自動執行',
    ],
    answer: 1,
    explanation: 'useEffect 的 cleanup 函式在兩個時機執行：元件卸載時，以及 effect 因依賴改變而重新執行之前。這可以防止記憶體洩漏。',
  },
  {
    id: 'react-3-q3', quizId: 'react-3', topic: 'react', difficulty: 'medium',
    text: 'React 中為什麼 state 更新後要傳入新物件，而不是直接修改？',
    code: '// 錯誤\nstate.count = 1\nsetState(state)\n\n// 正確\nsetState({ ...state, count: 1 })',
    options: [
      '這只是習慣，沒有技術原因',
      'React 用參考比較（reference equality）來偵測變化，直接修改不會觸發 re-render',
      '直接修改會造成效能問題',
      '語法要求',
    ],
    answer: 1,
    explanation: 'React 用 Object.is 比較新舊 state，直接修改原物件後傳入相同參考，React 認為沒有變化就不會 re-render。必須傳入新物件才能觸發更新。',
  },
  {
    id: 'react-3-q4', quizId: 'react-3', topic: 'react', difficulty: 'medium',
    text: 'useReducer 適合在什麼情況下使用？',
    options: [
      '所有 state 都應該用 useReducer',
      '狀態邏輯複雜、多個子值相互關聯，或下一個 state 依賴前一個 state',
      '只有全域狀態才用 useReducer',
      '需要效能優化時',
    ],
    answer: 1,
    explanation: '當狀態邏輯複雜（多個值相互關聯）或有多種更新動作時，useReducer 比多個 useState 更易維護。它也讓狀態轉換邏輯集中在 reducer 函式中。',
  },
  {
    id: 'react-3-q5', quizId: 'react-3', topic: 'react', difficulty: 'medium',
    text: '以下關於 React.memo 的描述，何者正確？',
    options: [
      '讓元件完全不會重新渲染',
      '當 props 沒有變化時，跳過元件的重新渲染',
      '快取元件的 state',
      '替代 useMemo',
    ],
    answer: 1,
    explanation: 'React.memo 是高階元件，會淺比較 props，如果 props 沒有變化就跳過重新渲染。適合用在父元件頻繁 re-render 但子元件 props 不常改變的情況。',
  },
  {
    id: 'react-3-q6', quizId: 'react-3', topic: 'react', difficulty: 'medium',
    text: 'Custom Hook 的命名規則和主要用途是什麼？',
    options: [
      '命名以 use 開頭，用於封裝和重用含有 Hook 的邏輯',
      '命名以 Hook 結尾，用於效能優化',
      '命名以 use 開頭，只能在 class 元件中使用',
      '沒有命名規則限制',
    ],
    answer: 0,
    explanation: 'Custom Hook 必須以 use 開頭（React 的規則），用於封裝可重用的有狀態邏輯。讓不同元件共享邏輯而不是共享狀態。',
  },
  {
    id: 'react-3-q7', quizId: 'react-3', topic: 'react', difficulty: 'medium',
    text: 'React 中的受控元件（Controlled Component）是什麼？',
    options: [
      '由 ref 控制的元件',
      '表單元素的值由 React state 控制',
      '父元件可以控制的子元件',
      '使用 Redux 管理的元件',
    ],
    answer: 1,
    explanation: '受控元件的表單值由 React state 控制，每次輸入都觸發 onChange 更新 state。這讓 React 成為資料的唯一來源（single source of truth）。',
  },
  {
    id: 'react-3-q8', quizId: 'react-3', topic: 'react', difficulty: 'medium',
    text: 'Lifting State Up（狀態提升）的目的是什麼？',
    options: [
      '提升應用程式效能',
      '讓多個元件共享同一份 state，將 state 移到最近的共同父元件',
      '讓 state 存在 Redux 中',
      '減少元件的 props 數量',
    ],
    answer: 1,
    explanation: '當多個元件需要共享資料時，將 state 提升到它們最近的共同父元件，再透過 props 傳下去。這是 React 管理共享狀態的基本模式。',
  },

  // ─────────────────────────────────────────
  // React 中級測驗 2
  // ─────────────────────────────────────────
  {
    id: 'react-4-q1', quizId: 'react-4', topic: 'react', difficulty: 'medium',
    text: 'React Router 中 useNavigate 和 Link 的差異是什麼？',
    options: [
      '完全相同',
      'useNavigate 用於程式碼中觸發導覽，Link 用於 JSX 中的導覽連結',
      'Link 效能較好',
      'useNavigate 只能用於 class 元件',
    ],
    answer: 1,
    explanation: 'Link 是 JSX 元件，用於宣告式導覽（超連結）。useNavigate 是 Hook，用於在事件處理或邏輯中程式碼式地觸發導覽。',
  },
  {
    id: 'react-4-q2', quizId: 'react-4', topic: 'react', difficulty: 'medium',
    text: '以下關於 useLayoutEffect 和 useEffect 的差異，何者正確？',
    options: [
      '完全相同',
      'useLayoutEffect 在 DOM 更新後、瀏覽器繪製前同步執行，useEffect 在繪製後非同步執行',
      'useLayoutEffect 只能用於 class 元件',
      'useEffect 比 useLayoutEffect 效能更差',
    ],
    answer: 1,
    explanation: 'useLayoutEffect 在瀏覽器繪製前同步執行，適合需要在使用者看到畫面前讀取或修改 DOM 的情況。useEffect 在繪製後執行，適合大部分副作用。',
  },
  {
    id: 'react-4-q3', quizId: 'react-4', topic: 'react', difficulty: 'medium',
    text: 'React 18 引入的 Concurrent Mode 的主要優點是什麼？',
    options: [
      '讓 React 支援多執行緒',
      '讓 React 可以中斷、暫停和恢復渲染，提升使用者體驗',
      '讓渲染速度提升 10 倍',
      '支援 Server-Side Rendering',
    ],
    answer: 1,
    explanation: 'Concurrent Mode 讓 React 能夠中斷長時間的渲染，先處理更緊急的更新（如使用者輸入），再繼續其他渲染，使 UI 保持響應。',
  },
  {
    id: 'react-4-q4', quizId: 'react-4', topic: 'react', difficulty: 'medium',
    text: 'React 的 Virtual DOM 如何提升效能？',
    options: [
      '直接跳過 DOM 操作',
      '在記憶體中比較新舊 Virtual DOM，只更新實際有變化的 DOM 節點',
      '讓 DOM 操作變成非同步',
      '快取所有 DOM 節點',
    ],
    answer: 1,
    explanation: 'Virtual DOM 是 DOM 的 JavaScript 物件表示。React 在記憶體中 diff 新舊 Virtual DOM，找出最小差異後，批次更新實際 DOM，減少昂貴的 DOM 操作。',
  },
  {
    id: 'react-4-q5', quizId: 'react-4', topic: 'react', difficulty: 'medium',
    text: '以下哪種情況最適合使用 Context API？',
    options: [
      '所有 state 管理都用 Context',
      '需要在多個層級的元件中共享資料（如主題、語言、登入狀態）',
      '替代 useState',
      '只用於效能優化',
    ],
    answer: 1,
    explanation: 'Context 適合全域性且變動不頻繁的資料，如使用者登入狀態、主題設定、語言偏好。頻繁更新的資料會導致所有消費元件重新渲染，效能較差。',
  },
  {
    id: 'react-4-q6', quizId: 'react-4', topic: 'react', difficulty: 'medium',
    text: '以下關於 React Hooks 的規則，何者正確？',
    options: [
      'Hooks 可以在條件式或迴圈中呼叫',
      'Hooks 只能在函式元件或自訂 Hook 的頂層呼叫',
      'Hooks 可以在 class 元件中使用',
      'Hooks 可以在一般 JavaScript 函式中使用',
    ],
    answer: 1,
    explanation: 'React Hooks 有兩條規則：只能在函式元件或自訂 Hook 的最頂層呼叫（不能在條件、迴圈或巢狀函式中），且只能在 React 函式中呼叫。',
  },
  {
    id: 'react-4-q7', quizId: 'react-4', topic: 'react', difficulty: 'medium',
    text: 'forwardRef 的用途是什麼？',
    options: [
      '轉發事件到父元件',
      '讓父元件可以透過 ref 存取子元件的 DOM 節點',
      '建立可複用的 ref',
      '替代 useRef',
    ],
    answer: 1,
    explanation: 'forwardRef 讓你將 ref 從父元件透傳到子元件內部的 DOM 節點，適合封裝 input、button 等需要 ref 存取的元件。',
  },
  {
    id: 'react-4-q8', quizId: 'react-4', topic: 'react', difficulty: 'medium',
    text: 'React 中 key prop 為什麼不建議用陣列 index？',
    options: [
      'index 不是唯一的',
      '當列表項目重新排序或刪除時，index 改變會導致不必要的重新渲染或狀態錯誤',
      'React 不支援 index 作為 key',
      '效能較差',
    ],
    answer: 1,
    explanation: '用 index 作為 key，當陣列項目重新排序、插入或刪除時，key 和項目的對應關係改變，React 可能錯誤地複用 DOM 節點，導致狀態混亂。應使用穩定唯一的 ID。',
  },

  // ─────────────────────────────────────────
  // React 高級測驗 1
  // ─────────────────────────────────────────
  {
    id: 'react-5-q1', quizId: 'react-5', topic: 'react', difficulty: 'hard',
    text: '以下 useEffect 程式碼有什麼問題？',
    code: 'function Counter() {\n  const [count, setCount] = useState(0)\n  useEffect(() => {\n    const id = setInterval(() => {\n      setCount(count + 1)\n    }, 1000)\n    return () => clearInterval(id)\n  }, [])\n  return <div>{count}</div>\n}',
    options: [
      '沒有問題',
      'count 在 setInterval 回呼中形成閉包，永遠讀到初始值 0，count 不會正確遞增',
      'setInterval 在 useEffect 中不能使用',
      'clearInterval 的位置錯誤',
    ],
    answer: 1,
    explanation: '這是經典的 stale closure 問題。setInterval 的回呼在建立時捕捉了 count = 0，之後永遠用舊值。解法：用 setCount(prev => prev + 1) 的函式形式，或將 count 加入依賴陣列。',
  },
  {
    id: 'react-5-q2', quizId: 'react-5', topic: 'react', difficulty: 'hard',
    text: 'React Reconciliation 演算法（Diffing）的核心假設是什麼？',
    options: [
      '完整比較所有節點',
      '相同層級不同型別的元素會產生完全不同的樹；開發者用 key 標示哪些元素在不同渲染間保持穩定',
      '只比較葉節點',
      '從右到左比較節點',
    ],
    answer: 1,
    explanation: 'React diff 演算法有兩個假設：1. 不同型別的元素產生不同樹（遇到型別不同直接重建）；2. key prop 讓開發者標示穩定的元素（key 相同才會嘗試複用）。這讓複雜度從 O(n³) 降到 O(n)。',
  },
  {
    id: 'react-5-q3', quizId: 'react-5', topic: 'react', difficulty: 'hard',
    text: '以下程式碼中，哪種方式可以正確避免子元件不必要的重新渲染？',
    code: 'function Parent() {\n  const [count, setCount] = useState(0)\n  const handleClick = () => console.log("clicked")\n  return <Child onClick={handleClick} />\n}',
    options: [
      '不需要任何優化',
      '用 useCallback 包住 handleClick，再用 React.memo 包住 Child',
      '只用 React.memo 包住 Child',
      '只用 useCallback 包住 handleClick',
    ],
    answer: 1,
    explanation: '只用 React.memo 不夠，因為每次 Parent render 都會建立新的 handleClick 函式（參考不同），props 比較會失敗。需要 useCallback 讓函式參考穩定，React.memo 的淺比較才能有效避免重新渲染。',
  },
  {
    id: 'react-5-q4', quizId: 'react-5', topic: 'react', difficulty: 'hard',
    text: 'React 18 的 useTransition 主要解決什麼問題？',
    options: [
      '建立 CSS 過場動畫',
      '讓開發者標記非緊急的狀態更新，讓 React 優先處理緊急更新（如輸入），保持 UI 響應',
      '替代 useEffect',
      '管理表單狀態',
    ],
    answer: 1,
    explanation: 'useTransition 讓你將某些更新標記為低優先（transition），React 會優先處理使用者輸入等緊急更新。例如搜尋過濾大量資料時，輸入框保持響應，過濾結果可以延遲更新。',
  },
  {
    id: 'react-5-q5', quizId: 'react-5', topic: 'react', difficulty: 'hard',
    text: '實作一個自訂 Hook usePrevious，取得前一次的值',
    code: 'function usePrevious(value) {\n  // 如何實作？\n}',
    options: [
      'return useState(value)',
      'const ref = useRef()\nuseEffect(() => { ref.current = value })\nreturn ref.current',
      'return useCallback(() => value, [])',
      'const [prev] = useState(value)\nreturn prev',
    ],
    answer: 1,
    explanation: '利用 useRef 在 render 間保持值，useEffect 在渲染後執行，所以 render 過程中 ref.current 還是上一次的值，渲染完成後才更新。這就實現了「回傳前一次值」的效果。',
  },
  {
    id: 'react-5-q6', quizId: 'react-5', topic: 'react', difficulty: 'hard',
    text: '以下關於 React Server Components（RSC）的描述，何者正確？',
    options: [
      'RSC 完全取代 Client Components',
      'RSC 在伺服器執行，不傳送 JavaScript 到客戶端，可以直接存取後端資源，但不能使用 state 和瀏覽器 API',
      'RSC 和 SSR 完全相同',
      'RSC 需要 Redux 才能管理狀態',
    ],
    answer: 1,
    explanation: 'React Server Components 在伺服器執行，渲染結果直接傳給客戶端，不需要傳送元件的 JavaScript 程式碼，減少 bundle 大小。代價是不能使用 useState、useEffect 或瀏覽器 API。',
  },

  // ─────────────────────────────────────────
  // HTML 初級測驗 1
  // ─────────────────────────────────────────
  {
    id: 'html-1-q1', quizId: 'html-1', topic: 'html', difficulty: 'easy',
    text: '以下哪個是正確的 HTML5 文件宣告？',
    options: ['<!DOCTYPE HTML5>', '<!DOCTYPE html>', '<html version="5">', '<?xml version="1.0">'],
    answer: 1,
    explanation: 'HTML5 的文件宣告是 <!DOCTYPE html>，不分大小寫且非常簡潔，告訴瀏覽器使用 HTML5 標準解析文件。',
  },
  {
    id: 'html-1-q2', quizId: 'html-1', topic: 'html', difficulty: 'easy',
    text: '語意化標籤 <article> 和 <div> 的主要差異是什麼？',
    options: [
      '樣式不同',
      '<article> 表達內容的語意（獨立完整的文章），<div> 只是無語意的容器',
      '<article> 比 <div> 渲染更快',
      '<div> 只能用一次',
    ],
    answer: 1,
    explanation: '語意化標籤讓 HTML 有意義，有助於 SEO 和無障礙。<article> 代表獨立完整的內容，<section> 代表主題區塊，<nav> 代表導覽，<div> 純粹是佈局容器。',
  },
  {
    id: 'html-1-q3', quizId: 'html-1', topic: 'html', difficulty: 'easy',
    text: '<img> 標籤的 alt 屬性用途是什麼？',
    options: [
      '設定圖片標題',
      '圖片無法載入時顯示的替代文字，也用於螢幕閱讀器',
      '設定圖片大小',
      '設定圖片連結',
    ],
    answer: 1,
    explanation: 'alt 屬性提供圖片的替代文字，在圖片無法載入時顯示，也讓螢幕閱讀器能描述圖片給視障使用者。對無障礙（accessibility）和 SEO 都很重要。',
  },
  {
    id: 'html-1-q4', quizId: 'html-1', topic: 'html', difficulty: 'easy',
    text: 'HTML 表單中 label 的 for 屬性用途是什麼？',
    code: '<label for="username">帳號</label>\n<input id="username" type="text">',
    options: [
      '設定表單提交的目標',
      '將 label 與對應的 input 關聯，點擊 label 可聚焦 input',
      '設定輸入框的名稱',
      '以上皆非',
    ],
    answer: 1,
    explanation: 'label 的 for 屬性值對應 input 的 id，點擊 label 時會聚焦對應的 input，提升使用者體驗和無障礙性。',
  },
  {
    id: 'html-1-q5', quizId: 'html-1', topic: 'html', difficulty: 'easy',
    text: 'meta viewport 標籤的用途是什麼？',
    code: '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
    options: [
      '設定網頁標題',
      '控制行動裝置的顯示比例，讓網頁正確呈現在各種螢幕尺寸',
      '設定網頁編碼',
      '設定 SEO 關鍵字',
    ],
    answer: 1,
    explanation: 'viewport meta 標籤告訴瀏覽器如何控制頁面的尺寸和縮放。width=device-width 讓網頁寬度配合裝置寬度，是 RWD 響應式設計的基礎。',
  },
  {
    id: 'html-1-q6', quizId: 'html-1', topic: 'html', difficulty: 'easy',
    text: '<script> 標籤的 defer 屬性有什麼作用？',
    options: [
      '讓腳本非同步載入且立即執行',
      '讓腳本在 HTML 解析完成後、DOMContentLoaded 前執行',
      '讓腳本不執行',
      '讓腳本在頁面完全載入後執行',
    ],
    answer: 1,
    explanation: 'defer 讓腳本非同步下載，等 HTML 全部解析完後按順序執行，不阻塞 HTML 解析。適合需要操作 DOM 的腳本。',
  },

  // ─────────────────────────────────────────
  // HTML 初級測驗 2
  // ─────────────────────────────────────────
  {
    id: 'html-2-q1', quizId: 'html-2', topic: 'html', difficulty: 'easy',
    text: 'href="#" 和 href="javascript:void(0)" 有何差異？',
    options: [
      '完全相同',
      'href="#" 會讓頁面跳到頂部，href="javascript:void(0)" 不會有任何行為',
      'href="javascript:void(0)" 是推薦做法',
      '兩者都不建議使用',
    ],
    answer: 1,
    explanation: 'href="#" 會讓頁面跳到頂部（改變 URL hash）。href="javascript:void(0)" 不會有任何行為但不符合語意。現代做法是用 button 或 event.preventDefault() 處理。',
  },
  {
    id: 'html-2-q2', quizId: 'html-2', topic: 'html', difficulty: 'easy',
    text: '以下哪個 input type 適合用來輸入電話號碼？',
    options: ['type="number"', 'type="tel"', 'type="text"', 'type="phone"'],
    answer: 1,
    explanation: 'type="tel" 專門用於電話號碼輸入，在行動裝置上會顯示數字鍵盤。type="number" 限制只能輸入數字且有上下箭頭，不適合電話號碼。',
  },
  {
    id: 'html-2-q3', quizId: 'html-2', topic: 'html', difficulty: 'easy',
    text: 'HTML 中的 data- 屬性用途是什麼？',
    code: '<div data-user-id="123" data-role="admin">...</div>',
    options: [
      '設定元素樣式',
      '在 HTML 元素上儲存自訂資料，可用 JavaScript 讀取',
      '設定元素的資料庫連接',
      '以上皆非',
    ],
    answer: 1,
    explanation: 'data- 屬性讓你在 HTML 元素上儲存自訂資料，不影響頁面呈現。可用 element.dataset.userId 或 getAttribute("data-user-id") 讀取。',
  },
  {
    id: 'html-2-q4', quizId: 'html-2', topic: 'html', difficulty: 'easy',
    text: '<header>、<main>、<footer> 在一個頁面中可以使用幾次？',
    options: [
      'header 和 footer 只能用一次，main 可以多次',
      'main 只能用一次，header 和 footer 可以在每個 section 中使用',
      '三者都只能用一次',
      '三者都可以多次使用',
    ],
    answer: 1,
    explanation: '<main> 代表頁面主要內容，每個頁面只應有一個。<header> 和 <footer> 可以出現在 <article>、<section> 等區塊元素中多次使用。',
  },
  {
    id: 'html-2-q5', quizId: 'html-2', topic: 'html', difficulty: 'easy',
    text: 'HTML 中 required 屬性的用途是什麼？',
    code: '<input type="email" required>',
    options: [
      '設定輸入框為唯讀',
      '表單提交前必須填寫此欄位',
      '設定預設值',
      '限制輸入格式',
    ],
    answer: 1,
    explanation: 'required 屬性讓表單在提交前驗證該欄位是否已填寫，若未填寫瀏覽器會顯示提示並阻止提交。這是 HTML5 原生表單驗證的一部分。',
  },
  {
    id: 'html-2-q6', quizId: 'html-2', topic: 'html', difficulty: 'easy',
    text: 'srcset 屬性的用途是什麼？',
    code: '<img src="image.jpg" srcset="image-2x.jpg 2x, image-3x.jpg 3x">',
    options: [
      '設定圖片的來源集合，讓瀏覽器根據裝置像素密度選擇最適合的圖片',
      '設定圖片的備用來源',
      '讓圖片延遲載入',
      '設定圖片大小',
    ],
    answer: 0,
    explanation: 'srcset 讓你提供不同解析度的圖片，瀏覽器根據裝置像素密度（DPR）自動選擇最適合的版本，高解析度螢幕顯示更清晰的圖片，節省一般螢幕的頻寬。',
  },

  // ─────────────────────────────────────────
  // HTML 中級測驗 1
  // ─────────────────────────────────────────
  {
    id: 'html-3-q1', quizId: 'html-3', topic: 'html', difficulty: 'medium',
    text: 'ARIA 屬性的主要用途是什麼？',
    code: '<button aria-label="關閉對話框" aria-expanded="false">X</button>',
    options: [
      '提升頁面效能',
      '增強無障礙性，讓螢幕閱讀器能更正確地描述互動元素',
      '設定元素動畫',
      '替代 CSS 樣式',
    ],
    answer: 1,
    explanation: 'ARIA（Accessible Rich Internet Applications）屬性補充 HTML 的語意，讓螢幕閱讀器能正確描述動態內容和互動元件，提升視障使用者的體驗。',
  },
  {
    id: 'html-3-q2', quizId: 'html-3', topic: 'html', difficulty: 'medium',
    text: '以下關於 <picture> 元素的描述，何者正確？',
    code: '<picture>\n  <source media="(min-width: 800px)" srcset="large.jpg">\n  <img src="small.jpg" alt="...">\n</picture>',
    options: [
      '只用於設定圖片動畫',
      '根據媒體查詢或圖片格式支援，讓瀏覽器選擇最適合的圖片來源',
      '替代 img 標籤',
      '只能用於 WebP 格式',
    ],
    answer: 1,
    explanation: '<picture> 讓你根據螢幕尺寸或支援的圖片格式提供不同來源，瀏覽器選擇第一個符合條件的 <source>，若都不符合則使用 <img> 的 src。',
  },
  {
    id: 'html-3-q3', quizId: 'html-3', topic: 'html', difficulty: 'medium',
    text: 'SEO 方面，以下哪個做法最正確？',
    options: [
      '每個頁面使用多個 <h1>',
      '每個頁面只有一個 <h1> 描述主要主題，heading 層級依序使用',
      'heading 層級不重要，用 CSS 控制大小就好',
      '使用 <div class="heading"> 替代 <h1>',
    ],
    answer: 1,
    explanation: '每個頁面應只有一個 <h1> 作為主要標題，heading 層級（h1-h6）應按邏輯順序使用，不應跳層。搜尋引擎依賴 heading 結構理解頁面內容。',
  },
  {
    id: 'html-3-q4', quizId: 'html-3', topic: 'html', difficulty: 'medium',
    text: 'preload 和 prefetch 的差異是什麼？',
    code: '<link rel="preload" href="font.woff2" as="font">\n<link rel="prefetch" href="next-page.js">',
    options: [
      '完全相同',
      'preload 立即下載當前頁面需要的資源，prefetch 在閒置時下載未來可能需要的資源',
      'prefetch 比 preload 優先順序高',
      'preload 只用於字體',
    ],
    answer: 1,
    explanation: 'preload 告訴瀏覽器立即下載當前頁面需要的重要資源（字體、關鍵 CSS）。prefetch 在瀏覽器閒置時下載未來導覽可能需要的資源，優先順序低。',
  },
  {
    id: 'html-3-q5', quizId: 'html-3', topic: 'html', difficulty: 'medium',
    text: '以下關於 <canvas> 和 <svg> 的比較，何者正確？',
    options: [
      'canvas 適合靜態圖形，SVG 適合動態圖形',
      'canvas 用像素繪圖（點陣），放大會失真；SVG 是向量圖，縮放不失真',
      'SVG 效能永遠比 canvas 好',
      '兩者只有語法差異',
    ],
    answer: 1,
    explanation: 'canvas 是像素繪圖，適合遊戲、圖片處理等複雜動態繪圖。SVG 是向量圖，縮放不失真，適合 icon、圖表，支援 DOM 操作和 CSS 樣式。',
  },
  {
    id: 'html-3-q6', quizId: 'html-3', topic: 'html', difficulty: 'medium',
    text: '以下關於 Web Storage 的描述，何者正確？',
    options: [
      'localStorage 和 sessionStorage 可以跨域存取',
      'localStorage 持久存儲，sessionStorage 僅限當前分頁會話，兩者都受同源政策限制',
      'Web Storage 可以儲存任何 JavaScript 物件',
      'localStorage 容量是 sessionStorage 的兩倍',
    ],
    answer: 1,
    explanation: 'localStorage 資料不過期，sessionStorage 在分頁關閉後清除。兩者都受同源政策（Same-Origin Policy）限制，且只能儲存字串（物件需先 JSON.stringify）。',
  },
  {
    id: 'html-3-q7', quizId: 'html-3', topic: 'html', difficulty: 'medium',
    text: 'Shadow DOM 的主要用途是什麼？',
    options: [
      '讓元素變透明',
      '封裝元件的 HTML 和 CSS，避免樣式和行為與外部衝突',
      '建立隱藏的 DOM 元素',
      '提升渲染效能',
    ],
    answer: 1,
    explanation: 'Shadow DOM 是 Web Components 的一部分，讓你建立封裝的 DOM 子樹，其樣式和行為不受外部 CSS 影響，也不會影響外部，是真正的元件封裝。',
  },
  {
    id: 'html-3-q8', quizId: 'html-3', topic: 'html', difficulty: 'medium',
    text: '以下哪個 meta 標籤對 SEO 最重要？',
    options: [
      '<meta name="keywords">',
      '<meta name="description">',
      '<meta http-equiv="refresh">',
      '<meta name="author">',
    ],
    answer: 1,
    explanation: 'meta description 雖然不直接影響排名，但會顯示在搜尋結果中，影響點擊率。meta keywords 已被主流搜尋引擎忽略。',
  },

  // ─────────────────────────────────────────
  // CSS 初級測驗 1
  // ─────────────────────────────────────────
  {
    id: 'css-1-q1', quizId: 'css-1', topic: 'css', difficulty: 'easy',
    text: 'CSS 盒模型（Box Model）由哪幾個部分組成？',
    options: [
      'content、padding、border、margin',
      'content、spacing、border、outline',
      'width、height、border、margin',
      'content、padding、shadow、margin',
    ],
    answer: 0,
    explanation: 'CSS 盒模型由內到外分別是：content（內容）、padding（內距）、border（邊框）、margin（外距）。理解盒模型是掌握 CSS 佈局的基礎。',
  },
  {
    id: 'css-1-q2', quizId: 'css-1', topic: 'css', difficulty: 'easy',
    text: 'box-sizing: border-box 的效果是什麼？',
    options: [
      '讓元素顯示邊框',
      '讓 width 和 height 包含 padding 和 border，不再只是 content',
      '讓元素使用 flex 佈局',
      '移除預設的 margin',
    ],
    answer: 1,
    explanation: '預設 content-box 的 width 只計算 content，加上 padding 和 border 後總寬度會超過設定值。border-box 讓 width 包含 padding 和 border，更直觀易用。',
  },
  {
    id: 'css-1-q3', quizId: 'css-1', topic: 'css', difficulty: 'easy',
    text: 'Flexbox 中 justify-content 和 align-items 的差異是什麼？',
    options: [
      '完全相同',
      'justify-content 控制主軸（main axis）對齊，align-items 控制交叉軸（cross axis）對齊',
      'align-items 控制主軸，justify-content 控制交叉軸',
      '兩者都只控制水平對齊',
    ],
    answer: 1,
    explanation: 'Flexbox 中，justify-content 控制主軸方向的對齊（預設為水平），align-items 控制交叉軸方向的對齊（預設為垂直）。',
  },
  {
    id: 'css-1-q4', quizId: 'css-1', topic: 'css', difficulty: 'easy',
    text: 'position: absolute 的定位基準是什麼？',
    options: [
      '相對於瀏覽器視窗',
      '相對於最近的 position 不為 static 的祖先元素',
      '相對於父元素',
      '相對於文件根元素',
    ],
    answer: 1,
    explanation: 'position: absolute 讓元素脫離文件流，相對於最近的 position 不為 static（relative、absolute、fixed、sticky）的祖先元素定位。若沒有則相對於 <html>。',
  },
  {
    id: 'css-1-q5', quizId: 'css-1', topic: 'css', difficulty: 'easy',
    text: 'z-index 在什麼條件下有效？',
    options: [
      '所有元素都可以使用 z-index',
      '只有 position 不為 static 的元素，z-index 才有效',
      'z-index 只在 flex 容器中有效',
      'z-index 需要搭配 opacity 使用',
    ],
    answer: 1,
    explanation: 'z-index 只對 position 為 relative、absolute、fixed、sticky 的元素有效。position: static（預設值）的元素設定 z-index 無效。',
  },
  {
    id: 'css-1-q6', quizId: 'css-1', topic: 'css', difficulty: 'easy',
    text: 'CSS 中的 em 和 rem 有什麼差異？',
    options: [
      '完全相同',
      'em 相對於父元素的字體大小，rem 相對於根元素（html）的字體大小',
      'rem 相對於父元素，em 相對於根元素',
      '兩者都相對於視窗大小',
    ],
    answer: 1,
    explanation: 'em 是相對單位，基於父元素的 font-size，巢狀時會疊加。rem（root em）始終基於根元素（<html>）的 font-size，通常是 16px，更容易預測。',
  },

  // ─────────────────────────────────────────
  // CSS 初級測驗 2
  // ─────────────────────────────────────────
  {
    id: 'css-2-q1', quizId: 'css-2', topic: 'css', difficulty: 'easy',
    text: 'CSS 選擇器的優先順序（由高到低）為何？',
    options: [
      'id > class > tag > inline',
      'inline > id > class > tag',
      'class > id > tag > inline',
      'tag > class > id > inline',
    ],
    answer: 1,
    explanation: 'CSS 優先順序：inline style > id 選擇器 > class/屬性/偽類選擇器 > tag/偽元素選擇器。!important 可覆蓋所有，但應避免濫用。',
  },
  {
    id: 'css-2-q2', quizId: 'css-2', topic: 'css', difficulty: 'easy',
    text: 'display: flex 和 display: inline-flex 的差異是什麼？',
    options: [
      '完全相同',
      'flex 讓容器變為 block 級，inline-flex 讓容器變為 inline 級，但內部都是 flex 佈局',
      'inline-flex 效能更好',
      'flex 只能用於水平佈局',
    ],
    answer: 1,
    explanation: 'display: flex 讓容器本身是 block 級元素（佔滿整行），display: inline-flex 讓容器本身是 inline 元素（只佔內容大小）。兩者內部的 flex 行為相同。',
  },
  {
    id: 'css-2-q3', quizId: 'css-2', topic: 'css', difficulty: 'easy',
    text: 'CSS transition 和 animation 的主要差異是什麼？',
    options: [
      '完全相同',
      'transition 需要狀態改變觸發，animation 可以自動播放和循環',
      'animation 只能用於 transform',
      'transition 效能更好',
    ],
    answer: 1,
    explanation: 'transition 在屬性值改變時（如 hover）產生過渡效果，只有開始和結束兩個狀態。animation 使用 @keyframes 定義多個狀態，可自動播放、循環、反向。',
  },
  {
    id: 'css-2-q4', quizId: 'css-2', topic: 'css', difficulty: 'easy',
    text: 'CSS 變數（Custom Properties）如何定義和使用？',
    code: ':root {\n  --primary-color: #3498db;\n}\n.button {\n  background: ???\n}',
    options: ['background: $primary-color', 'background: @primary-color', 'background: var(--primary-color)', 'background: --primary-color'],
    answer: 2,
    explanation: 'CSS 變數用 --variable-name 定義，用 var(--variable-name) 使用。通常在 :root 定義全域變數，也可在特定選擇器定義局部變數。',
  },
  {
    id: 'css-2-q5', quizId: 'css-2', topic: 'css', difficulty: 'easy',
    text: '如何用 CSS 讓一個 div 在頁面上水平垂直置中？',
    options: [
      'margin: center',
      'display: flex; justify-content: center; align-items: center（在父元素上）',
      'position: center',
      'text-align: center; vertical-align: middle',
    ],
    answer: 1,
    explanation: '最常見的置中方式是在父元素加上 display: flex; justify-content: center; align-items: center。也可用 grid + place-items: center 或 position: absolute + transform。',
  },
  {
    id: 'css-2-q6', quizId: 'css-2', topic: 'css', difficulty: 'easy',
    text: 'media query 的用途是什麼？',
    code: '@media (max-width: 768px) {\n  .sidebar { display: none; }\n}',
    options: [
      '播放媒體檔案',
      '根據裝置特性（螢幕寬度、方向等）套用不同的 CSS 樣式',
      '載入不同的 CSS 檔案',
      '偵測使用者的瀏覽器',
    ],
    answer: 1,
    explanation: 'media query 讓你根據螢幕尺寸、解析度、方向等條件套用不同樣式，是響應式設計（RWD）的核心工具。',
  },

  // ─────────────────────────────────────────
  // CSS 中級測驗 1
  // ─────────────────────────────────────────
  {
    id: 'css-3-q1', quizId: 'css-3', topic: 'css', difficulty: 'medium',
    text: 'CSS Grid 和 Flexbox 的主要差異是什麼？',
    options: [
      'Grid 只能用於水平排列',
      'Flexbox 是一維佈局（一行或一列），Grid 是二維佈局（同時控制行和列）',
      'Grid 效能比 Flexbox 差',
      '兩者完全相同',
    ],
    answer: 1,
    explanation: 'Flexbox 適合一維佈局（沿單一軸排列元素）。Grid 適合二維佈局（同時控制行列），更適合整體頁面結構。實際上兩者可以搭配使用。',
  },
  {
    id: 'css-3-q2', quizId: 'css-3', topic: 'css', difficulty: 'medium',
    text: 'Stacking Context（堆疊上下文）是什麼？何時會建立新的堆疊上下文？',
    options: [
      '任何元素都在同一個堆疊上下文',
      'position 不為 static 且 z-index 不為 auto 的元素，或是 opacity < 1、transform 等屬性會建立新的堆疊上下文',
      '只有 z-index 才會建立堆疊上下文',
      '堆疊上下文只有一個',
    ],
    answer: 1,
    explanation: '建立新堆疊上下文的條件包含：position 且 z-index 不為 auto、opacity < 1、transform、filter 不為 none 等。堆疊上下文內的 z-index 只與同一上下文的元素比較。',
  },
  {
    id: 'css-3-q3', quizId: 'css-3', topic: 'css', difficulty: 'medium',
    text: 'BFC（Block Formatting Context）可以解決什麼問題？',
    options: [
      '讓元素變透明',
      '清除浮動、防止 margin collapse、隔離元素避免與外部浮動重疊',
      '建立新的 CSS 層',
      '讓元素 display: block',
    ],
    answer: 1,
    explanation: 'BFC 是獨立的渲染區塊，可以：包含浮動子元素（清除浮動）、防止父子 margin collapse、避免與浮動元素重疊。觸發 BFC 的方式包含 overflow: hidden、display: flex 等。',
  },
  {
    id: 'css-3-q4', quizId: 'css-3', topic: 'css', difficulty: 'medium',
    text: 'CSS 的 will-change 屬性用途是什麼？',
    code: '.animated {\n  will-change: transform;\n}',
    options: [
      '定義 CSS 動畫',
      '提示瀏覽器某個元素即將發生的變化，讓瀏覽器提前優化（如建立獨立的合成層）',
      '監聽 CSS 屬性變化',
      '防止樣式被修改',
    ],
    answer: 1,
    explanation: 'will-change 告訴瀏覽器哪個屬性即將變化，讓瀏覽器提前進行優化（如將元素提升到 GPU 合成層）。應謹慎使用，過度使用會消耗大量記憶體。',
  },
  {
    id: 'css-3-q5', quizId: 'css-3', topic: 'css', difficulty: 'medium',
    text: 'CSS 中 contain 屬性的用途是什麼？',
    options: [
      '限制元素的大小',
      '限制元素的渲染作用域，讓瀏覽器只重新計算受影響的範圍，提升效能',
      '防止內容溢出',
      '設定 overflow: hidden',
    ],
    answer: 1,
    explanation: 'contain 讓瀏覽器知道元素的子樹與外部獨立，發生變化時只需重新計算該元素內部，不影響外部佈局，可顯著提升大型應用的渲染效能。',
  },
  {
    id: 'css-3-q6', quizId: 'css-3', topic: 'css', difficulty: 'medium',
    text: 'CSS 選擇器 :is() 和 :where() 的差異是什麼？',
    code: ':is(header, main, footer) p { color: red }\n:where(header, main, footer) p { color: red }',
    options: [
      '完全相同',
      ':is() 的優先順序取決於其中最高的選擇器，:where() 的優先順序永遠為 0',
      ':where() 比 :is() 效能更好',
      ':is() 只支援現代瀏覽器',
    ],
    answer: 1,
    explanation: ':is() 的優先順序取決於參數中最高的選擇器優先順序。:where() 的優先順序始終為 0（零優先順序），更容易被覆蓋，適合建立可覆蓋的基礎樣式。',
  },
  {
    id: 'css-3-q7', quizId: 'css-3', topic: 'css', difficulty: 'medium',
    text: 'CSS 中 transform 為什麼比改變 top/left 效能更好？',
    options: [
      '語法更簡短',
      'transform 不觸發重排（reflow），直接在合成層進行，由 GPU 處理',
      'transform 的動畫更流暢',
      '以上 B 和 C 都是原因',
    ],
    answer: 3,
    explanation: 'transform 不影響文件流，不觸發重排和重繪，直接在 GPU 合成層處理，動畫更流暢且效能更好。改變 top/left 需要重新計算佈局（reflow），成本高。',
  },
  {
    id: 'css-3-q8', quizId: 'css-3', topic: 'css', difficulty: 'medium',
    text: 'CSS 的 clamp() 函式用途是什麼？',
    code: 'font-size: clamp(1rem, 2.5vw, 2rem)',
    options: [
      '設定顏色範圍',
      '設定有最小值和最大值限制的響應式數值',
      '計算元素大小',
      '限制動畫時間',
    ],
    answer: 1,
    explanation: 'clamp(min, ideal, max) 讓值在最小值和最大值之間響應式縮放。此例字體大小最小 1rem，最大 2rem，中間根據視窗寬度（2.5vw）動態調整，無需 media query。',
  },

  // ─────────────────────────────────────────
  // 瀏覽器 初級測驗 1
  // ─────────────────────────────────────────
  {
    id: 'browser-1-q1', quizId: 'browser-1', topic: 'browser', difficulty: 'easy',
    text: '瀏覽器的關鍵渲染路徑（Critical Rendering Path）順序為何？',
    options: [
      'JavaScript → HTML 解析 → CSS 解析 → 渲染',
      'HTML 解析（DOM）→ CSS 解析（CSSOM）→ Render Tree → Layout → Paint',
      'Paint → Layout → Render Tree → DOM → CSSOM',
      'CSS 解析 → HTML 解析 → Layout → Paint',
    ],
    answer: 1,
    explanation: '瀏覽器渲染步驟：解析 HTML 建立 DOM → 解析 CSS 建立 CSSOM → 合併成 Render Tree → Layout（計算位置大小）→ Paint（繪製像素）→ Composite（合成層）。',
  },
  {
    id: 'browser-1-q2', quizId: 'browser-1', topic: 'browser', difficulty: 'easy',
    text: '什麼是 CORS（跨來源資源共享）？',
    options: [
      '一種快取機制',
      '允許或拒絕來自不同來源的 HTTP 請求的瀏覽器安全機制',
      '一種壓縮演算法',
      '瀏覽器的 Cookie 管理機制',
    ],
    answer: 1,
    explanation: 'CORS 是瀏覽器的安全機制，基於同源政策（Same-Origin Policy）。當前端向不同來源（協議、域名、端口不同）發請求時，瀏覽器會先確認伺服器是否允許此跨域請求。',
  },
  {
    id: 'browser-1-q3', quizId: 'browser-1', topic: 'browser', difficulty: 'easy',
    text: 'DOMContentLoaded 和 load 事件的差異是什麼？',
    options: [
      '完全相同',
      'DOMContentLoaded 在 HTML 解析完成後觸發，load 在所有資源（圖片、CSS 等）載入完成後觸發',
      'load 先觸發，DOMContentLoaded 後觸發',
      'DOMContentLoaded 只在 Chrome 中有效',
    ],
    answer: 1,
    explanation: 'DOMContentLoaded 在 HTML 解析並建立 DOM 後觸發，不等圖片等資源。load 事件等所有資源（圖片、樣式表、腳本）都載入完成後才觸發，通常較慢。',
  },
  {
    id: 'browser-1-q4', quizId: 'browser-1', topic: 'browser', difficulty: 'easy',
    text: '什麼是 Cookie 的 HttpOnly 屬性？',
    options: [
      'Cookie 只能透過 HTTP 協議傳送',
      'Cookie 無法被 JavaScript 存取，只能被 HTTP 請求使用，防止 XSS 攻擊竊取',
      'Cookie 只在 HTTP 下有效，HTTPS 下無效',
      'Cookie 只能儲存純文字',
    ],
    answer: 1,
    explanation: 'HttpOnly Cookie 無法被 JavaScript 的 document.cookie 存取，只能在 HTTP/HTTPS 請求中傳送。這讓攻擊者即使成功執行 XSS，也無法竊取 session cookie。',
  },
  {
    id: 'browser-1-q5', quizId: 'browser-1', topic: 'browser', difficulty: 'easy',
    text: '瀏覽器的 Event Loop 中，Microtask 和 Macrotask 的執行順序為何？',
    options: [
      'Macrotask → Microtask',
      '每個 Macrotask 執行完後，清空所有 Microtask，再執行下一個 Macrotask',
      'Microtask 和 Macrotask 交替執行',
      '同時執行',
    ],
    answer: 1,
    explanation: 'Event Loop 每次執行一個 Macrotask（setTimeout、setInterval）後，會清空整個 Microtask 佇列（Promise.then、queueMicrotask）再繼續。Microtask 比 Macrotask 優先。',
  },
  {
    id: 'browser-1-q6', quizId: 'browser-1', topic: 'browser', difficulty: 'easy',
    text: '什麼是 XSS（跨站腳本攻擊）？如何防範？',
    options: [
      '竊取 Cookie 的攻擊，用 HTTPS 防範',
      '攻擊者注入惡意腳本在其他使用者的瀏覽器執行，用 CSP 和對輸出內容 Escape 防範',
      '暴力破解密碼的攻擊，用強密碼防範',
      '偽造請求的攻擊，用 CSRF Token 防範',
    ],
    answer: 1,
    explanation: 'XSS 攻擊者在網頁注入惡意腳本，當其他使用者瀏覽時執行。防範方式：對輸出內容進行 HTML Escape、設定 Content Security Policy（CSP）、使用 HttpOnly Cookie。',
  },

  // ─────────────────────────────────────────
  // 瀏覽器 中級測驗 1
  // ─────────────────────────────────────────
  {
    id: 'browser-2-q1', quizId: 'browser-2', topic: 'browser', difficulty: 'medium',
    text: '瀏覽器的 Reflow（重排）和 Repaint（重繪）有什麼差異？',
    options: [
      '完全相同',
      'Reflow 重新計算佈局（位置和大小），Repaint 重新繪製外觀但不影響佈局；Reflow 一定觸發 Repaint',
      'Repaint 比 Reflow 耗費更多資源',
      'Reflow 只影響被修改的元素',
    ],
    answer: 1,
    explanation: 'Reflow 在元素的幾何屬性（大小、位置、邊距）改變時觸發，需重新計算整個佈局，效能開銷大。Repaint 只改變外觀（顏色、背景），不影響佈局，開銷較小。Reflow 必然引發 Repaint。',
  },
  {
    id: 'browser-2-q2', quizId: 'browser-2', topic: 'browser', difficulty: 'medium',
    text: '什麼是 CSP（Content Security Policy）？',
    options: [
      '一種 CSS 優化技術',
      'HTTP 標頭，讓伺服器告訴瀏覽器哪些資源來源是可信任的，防止 XSS 和資料注入攻擊',
      '瀏覽器的快取策略',
      '跨站請求防護機制',
    ],
    answer: 1,
    explanation: 'CSP 透過 HTTP 標頭（Content-Security-Policy）告訴瀏覽器允許載入哪些來源的資源。可以限制 script、style、image 的來源，有效防止 XSS 攻擊。',
  },
  {
    id: 'browser-2-q3', quizId: 'browser-2', topic: 'browser', difficulty: 'medium',
    text: 'requestAnimationFrame 相比 setTimeout 有什麼優點？',
    options: [
      '執行速度更快',
      '與瀏覽器刷新率同步（通常 60fps），頁面不可見時暫停，動畫更流暢且省電',
      '可以設定精確的執行時間',
      '支援更多回呼函式',
    ],
    answer: 1,
    explanation: 'requestAnimationFrame 在瀏覽器下次重繪前執行，與螢幕刷新率同步。當頁面隱藏時會暫停，節省資源。setTimeout 的執行時機不精確，不建議用於動畫。',
  },
  {
    id: 'browser-2-q4', quizId: 'browser-2', topic: 'browser', difficulty: 'medium',
    text: '瀏覽器的 HTTP 快取機制中，Cache-Control: no-cache 和 no-store 的差異為何？',
    options: [
      '完全相同',
      'no-cache 快取但每次使用前驗證是否過期；no-store 完全不快取',
      'no-store 允許快取，no-cache 不允許',
      '兩者都完全不快取',
    ],
    answer: 1,
    explanation: 'no-cache 允許快取但每次使用前必須向伺服器驗證（可能收到 304 Not Modified）。no-store 完全不儲存回應，每次都要重新請求，適合敏感資料。',
  },
  {
    id: 'browser-2-q5', quizId: 'browser-2', topic: 'browser', difficulty: 'medium',
    text: 'Web Worker 的主要用途是什麼？',
    options: [
      '建立多個瀏覽器視窗',
      '在背景執行緒執行 JavaScript，不阻塞主執行緒的 UI 渲染',
      '處理 HTTP 請求',
      '管理 LocalStorage',
    ],
    answer: 1,
    explanation: 'JavaScript 是單執行緒的，耗時計算會阻塞 UI。Web Worker 在背景執行緒運行，透過訊息傳遞（postMessage）與主執行緒溝通，讓耗時任務不影響使用者體驗。',
  },
  {
    id: 'browser-2-q6', quizId: 'browser-2', topic: 'browser', difficulty: 'medium',
    text: '什麼是 CSRF（跨站請求偽造）攻擊？如何防範？',
    options: [
      '注入 JavaScript 的攻擊，用 CSP 防範',
      '誘使已登入的使用者在不知情下發送請求，用 CSRF Token 或 SameSite Cookie 防範',
      '竊取 Cookie 的攻擊，用 HTTPS 防範',
      '暴力破解 API 的攻擊，用速率限制防範',
    ],
    answer: 1,
    explanation: 'CSRF 誘使已登入使用者點擊連結，向目標網站發出非預期的請求（如轉帳）。防範方式：CSRF Token（驗證請求來源）、SameSite Cookie 屬性、驗證 Origin/Referer 標頭。',
  },
  {
    id: 'browser-2-q7', quizId: 'browser-2', topic: 'browser', difficulty: 'medium',
    text: 'Service Worker 的主要功能是什麼？',
    options: [
      '處理使用者介面互動',
      '在瀏覽器背景攔截網路請求，實現離線快取、推播通知等 PWA 功能',
      '管理 Web Storage',
      '執行 CSS 動畫',
    ],
    answer: 1,
    explanation: 'Service Worker 是在背景執行的腳本，可以攔截和快取網路請求，讓 Web App 支援離線功能，也支援推播通知（Push Notification）和背景同步，是 PWA 的核心技術。',
  },
  {
    id: 'browser-2-q8', quizId: 'browser-2', topic: 'browser', difficulty: 'medium',
    text: '瀏覽器的同源政策（Same-Origin Policy）定義的「同源」是什麼？',
    options: [
      '相同的域名',
      '協議（protocol）、域名（host）、端口（port）三者都相同',
      '相同的 IP 位址',
      '相同的頂級域名',
    ],
    answer: 1,
    explanation: '同源需要協議（http/https）、域名和端口三者完全相同。例如 http://example.com:80 和 https://example.com:443 因為協議和端口不同，屬於不同來源。',
  },

  // ─────────────────────────────────────────
  // 瀏覽器 高級測驗 1
  // ─────────────────────────────────────────
  {
    id: 'browser-3-q1', quizId: 'browser-3', topic: 'browser', difficulty: 'hard',
    text: '以下關於瀏覽器渲染層（Compositing Layer）的描述，何者正確？',
    options: [
      '每個 DOM 元素都是獨立的渲染層',
      '特定條件（transform 3D、will-change、video 等）會將元素提升到獨立的 GPU 合成層，可以不觸發 reflow/repaint 直接合成',
      '渲染層越多效能越好',
      '渲染層只在動畫時有用',
    ],
    answer: 1,
    explanation: '瀏覽器將部分元素提升到獨立的合成層（Compositing Layer），由 GPU 處理。這些層的變化（transform、opacity）不需要觸發 reflow 或 repaint，直接在 GPU 合成，動畫更流暢。但層太多會消耗大量記憶體。',
  },
  {
    id: 'browser-3-q2', quizId: 'browser-3', topic: 'browser', difficulty: 'hard',
    text: 'HTTP/2 相比 HTTP/1.1 解決了什麼核心問題？',
    options: [
      '加密傳輸',
      '解決 Head-of-Line Blocking，支援多工（Multiplexing）讓多個請求在同一 TCP 連線並行傳輸',
      '減少 Cookie 大小',
      '支援 WebSocket',
    ],
    answer: 1,
    explanation: 'HTTP/1.1 有 Head-of-Line Blocking：同一連線的請求必須依序等待回應。HTTP/2 引入二進制分幀，讓多個請求/回應可以在同一 TCP 連線交錯傳輸（Multiplexing），大幅提升效能。',
  },
  {
    id: 'browser-3-q3', quizId: 'browser-3', topic: 'browser', difficulty: 'hard',
    text: '以下關於 JavaScript 記憶體洩漏的常見原因，何者正確？',
    options: [
      '使用太多變數',
      '未清除的定時器/事件監聽、閉包持有大物件參考、DOM 元素已移除但仍有 JS 參考',
      '使用 const 宣告變數',
      '使用太多 Promise',
    ],
    answer: 1,
    explanation: '常見記憶體洩漏：1. setInterval/setTimeout 未清除；2. 事件監聽未移除（removeEventListener）；3. 閉包意外持有大物件的參考；4. 已從 DOM 移除的節點仍被 JS 變數參考。',
  },
  {
    id: 'browser-3-q4', quizId: 'browser-3', topic: 'browser', difficulty: 'hard',
    text: '什麼是 Long Task？如何偵測和優化？',
    options: [
      '執行超過 50ms 的 JavaScript 任務，會阻塞主執行緒造成頁面卡頓，可用 PerformanceObserver 偵測，用任務分割（task splitting）優化',
      '執行超過 1 秒的任務',
      'Long Task 只發生在動畫中',
      'Long Task 可以用 Web Worker 完全解決',
    ],
    answer: 0,
    explanation: 'Long Task 定義為超過 50ms 的主執行緒任務，會阻塞使用者互動（點擊、輸入無回應）。可用 PerformanceObserver + longtasks 偵測。優化方式：將大任務拆成小任務（setTimeout 0 讓出控制權）或移到 Web Worker。',
  },
  {
    id: 'browser-3-q5', quizId: 'browser-3', topic: 'browser', difficulty: 'hard',
    text: '以下關於 Web Vitals 核心指標的描述，何者正確？',
    options: [
      '只有 LCP 重要',
      'LCP（最大內容渲染）、FID/INP（互動延遲）、CLS（累計佈局偏移）是 Google 衡量使用者體驗的核心指標',
      'Web Vitals 只影響行動裝置',
      'Web Vitals 和 SEO 無關',
    ],
    answer: 1,
    explanation: 'Core Web Vitals：LCP（Largest Contentful Paint）衡量載入效能（目標 < 2.5s）；INP（Interaction to Next Paint）衡量互動響應（目標 < 200ms）；CLS（Cumulative Layout Shift）衡量視覺穩定性（目標 < 0.1）。這些指標影響 Google 搜尋排名。',
  },
  {
    id: 'browser-3-q6', quizId: 'browser-3', topic: 'browser', difficulty: 'hard',
    text: 'Intersection Observer API 相比監聽 scroll 事件有什麼優勢？',
    options: [
      '功能更多',
      '在主執行緒之外非同步觀察元素的可見性變化，不需要監聽 scroll 事件，效能更好且不觸發 reflow',
      '瀏覽器支援度更廣',
      '語法更簡單',
    ],
    answer: 1,
    explanation: 'scroll 事件在主執行緒觸發，每次都需要呼叫 getBoundingClientRect() 讀取佈局資訊（觸發 reflow），容易造成效能問題。Intersection Observer 非同步觀察，瀏覽器在適當時機計算，不阻塞主執行緒。',
  },
]


