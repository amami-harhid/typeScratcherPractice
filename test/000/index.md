# 目次(案)

## 変数を作ろう

### 文字列の宣言(クォーテーションの違い): string

シングルクォーテーション('...'), ダブルクォーテーション("..."), バッククォート(`...`) 

### 数値型の変数を宣言: number

### 論理型の変数を宣言: boolean

### シンボル: symbol

### 巨大整数: bigint

number型では扱えないほど大きな整数を扱うための型です、末尾に n をつけます

```typescript
const hugeNumber: bigint = 9007199254740991n;
```

### リテラル型

TypeScript特有の機能として、プリミティブ型をさらに限定した「リテラル型」があります。<br>
例えば、const で宣言した変数は、その値そのものが型になります。

```typescript
const color = "red"; // 型は string ではなく、"red" というリテラル型になる
```

### 未定義: undefined

値が代入されていない変数や、存在しないプロパティにアクセスしたときの値です。

- 変数を作ったけれど、まだ何も代入していないとき
- 関数の引数が省略されたとき
- オブジェクトに存在しないプロパティへアクセスしたとき

### 空： null

値が存在しない状態」を明示的に表すための値、
値が「意図的に空（カラ）である」状態です。

- 「データを探したけれど、見つからなかった」という結果を明示したいとき
- 一度入れたデータを「クリア（リセット）」したいとき

現代のプログラミング（特にTypeScript）では、「できるだけ undefined に統一し、null は避ける」というアプローチをとるプロジェクトが増えています

- 理由： TypeScriptの機能（オプショナルチェーニング ?. や、引数のデフォルト値設定など）は、undefined を基準に作られているためです。


#### undefined / null の比較

`==`（等価演算子）は、比較するデータの型が違う場合、自動的に型を変換して比較します。<br>
この仕様（言語のルール）により、null と undefined を `==` で比較したときは必ず true になると決まっています。

```typescript
const a = undefined;
const b = null;

// 1. 真になります
if (a == null) {
  console.log('a == null は真'); // 実行される
}

// 2. 真になります
if (b == undefined) {
  console.log('b == undefined は真'); // 実行される
}
```

もしも、undefined / null の違いを厳密に比較したい場合には、`===`(厳密等価演算子)を使います。

```typescript
const a = undefined;
const b = null;

// 1. 厳密に比較するので偽になります
if (a === null) {
  console.log('a === null は真'); // 実行されない
}else{
  console.log('a === null は偽'); // ==> 実行される

}

// 2. 厳密に比較するので偽になります
if (b === undefined) {
  console.log('b === undefined は真'); // 実行されない
}else{
  console.log('b === undefined は偽'); // ==> 実行される
}
```

### 変数を使って文字列を作ろう


### 

### 2015年以前 (ES5まで)

Javascriptの変数宣言は、`var`のみでした。

`var`には 以下の問題があり、バグを生む温床になっていました。

#### 関数スコープのみ

ブロック（ifやforなど）を無視して関数全体にスコープが広がる。

どこかで宣言した変数は、全体のどこでも使うことができる。

つまり、参照しようとしている変数はどこで作られたものかわかりにくい。

どこでも使えるので、どこで変更しているのかもわかりにくく、思ってもいない箇所で変更されているかもしれない恐怖がある。

変数を更新する場所がわかりにくいので、長いコードを書くのが難しい。

#### 変数の巻き上げ（Hoisting）

宣言前に変数にアクセスしてもエラーにならない。（undefinedになる)

#### 再宣言が可能

同じ名前の変数を何度でも宣言できてしまう。意図しない上書きが起こる大きな要因である。

### 2015年（ES6の登場）

`var`の欠点を解消したい、他の主要プログラミング言語(JavaやC++)の変数制御に寄せよう！という機運が高まり、`let`と`const`が導入されました。

#### var から let/const への進化

変数利用の安全性が向上しました。

##### var

- スコープ： 関数全体、同じ関数の中でどこでも使える
- 再代入： 可能。コンスタント値としたい場合、プログラム言語として再代入可能なのでコンスタント値を保証してくれない。
- 再宣言： 可能。同じ名前の変数を何度でも宣言できる。ややこしい。
- 巻き上げ： 宣言する前でも、その変数を使うことができる。ただし中身は保証無し（undefined)

Typescriptでは、`var`を使用を禁止する仕組みがありますが、
本プロジェクトの「test」フォルダーの中だけは「意図的に(学習のために)」`var`の使用を許可しています。
`var`の欠点を実験で確かめてみましょう。

##### let

- スコープ： ブロックの中のみ。ブロックとは {  } で囲まれた場所のこと。
- 再代入： 可能。一般的な変数（中身を変更できる）
- 再宣言： 不可能。同じ名前の変数を宣言するとエラーになる。二重宣言をガードしてくれていて安心である。
- 巻き上げ： 宣言する前にはその変数を使うことはできない。エラーになる。

##### const

- スコープ： ブロックの中のみ。ブロックとは {  } で囲まれた場所のこと。
- 再代入： 不可能。宣言時に値を入れた後は、中身を変更できない。変更のコードを書くとエラーになる。
- 再宣言： 不可能。同じ名前の変数を宣言するとエラーになる。二重宣言をガードしてくれていて安心である。
- 巻き上げ： 宣言する前にはその変数を使うことはできない。エラーになる。


# オプショナルチェーニング



# ヌル合体演算子 ( ?? )

左側の値が null または undefined のときだけ、右側の初期値を返す演算子です

```typescript
const userName: string | null = null;

// userName が null なので、右側の 'ゲスト' が代入される
const displayName = userName ?? 'ゲスト'; 
console.log(displayName); // 結果: "ゲスト"
```

# 論理和演算子 ( || )

左側が null, undefined, 0, "", false, NaN のときに右側を返します。

一見、ヌル合体演算子と似ていますが、 0 や "" , false, NaN の場合に 想定していない挙動をする場合があります。

```typescript
const userScore = 0; // ユーザーのスコアは「0点」

// ❌ || を使うと...
const score1 = userScore || 50; 
console.log(score1); // 結果: 50 （0が偽と判定され、初期値の50になってしまう！）

// ⭕ ?? を使うと...
const score2 = userScore ?? 50; 
console.log(score2); // 結果: 0  （0を数値として正しく受け付ける）
```

# NaN とは？

`NaN`（Not-a-Number）とは、JavaScriptやTypeScriptにおいて計算結果や変換処理が「数値ではない（無効な数値）」ことを示す特別な値です

## NaN が発生する主な原因

- 不可能な計算: "abc" * 3 や "りんご" - 1 のように、文字列を数値として計算しようとしたとき。

- 無効な割り算: 0 / 0 のように、数学的に答えが決まらない計算をしたとき。

- 変換の失敗: parseInt("こんにちは") のように、数字を含まない文字列を数値に変換しようとしたとき。

## NaN の特徴的な注意点

- 型は「数値」: typeof NaN の結果は "number" になります。数値ではないのに、データ型としては数値扱いという特殊な仕様です。

- 自分自身と一致しない: NaN === NaN を実行すると、結果は true ではなく false になります。そのため、通常の === では NaN かどうかを判定できません。

- 正しい判定方法： 値が NaN であるかを調べるには、Number.isNaN() という専用の関数を使います。

```typescript

const result = "abc" * 3; // 結果は NaN

if (Number.isNaN(result)) {
    console.log("数値ではありません");
}

```

## pareseInt() と Number() の違い

- parseInt()：先頭から読める数字だけを「切り出す」（後ろに文字があっても無視）。
- Number()：文字列全体を厳密に「数値へ変換する」（1文字でも余計な文字があるとアウト）。

```typescript
const text = "100px";

console.log(parseInt(text)); // 結果: 100 （先頭の100だけを切り出す）
console.log(Number(text));   // 結果: NaN （"px"が邪魔なので全体として無効）
```

```typescript
const text = "";

console.log(parseInt(text)); // 結果: NaN （数字が見つからないため）
console.log(Number(text));   // 結果: 0   （仕様上、空は 0 になる）
```
- parseInt() は空文字から数字を切り出せないため、NaN になります。
- Number() は空文字を 0 として処理するため、NaN にはなりません。

```typescript
console.log(parseInt(null as any));      // 結果: NaN
console.log(parseInt(undefined as any)); // 結果: NaN

console.log(Number(null));               // 結果: 0  （nullは0になる）
console.log(Number(undefined));          // 結果: NaN
```

- parseInt() は、引数が文字列でない場合、一度内部で文字列に変換（"null" や "undefined" に変換）してから処理します。<br>そのため、どちらも先頭が文字になり NaN です。
- Number() は、null を 0 に変換し、undefined は NaN になります。


# 変数名の付け方（ルール）

## 命名規則

先頭の文字は、英文字（a-z, A-Z）、アンダースコア（_）、ドル記号（$）のいずれかでなければなりません。

先頭に数字を使うことはできません（エラーになります）。

## 使用不許可の名前

if、for、class、switch、let、const などの言語自体が使うキーワード（予約語）は変数名にできません。

## キャメルケース（camelCase）

変数名や関数名には、単語の区切りを大文字にするローワーキャメルケースを使うのが主流です。

## スネークケース(snakeCase)


## データの種類・役割に応じた命名のコツ

変数名を見ただけで「どんなデータが入っているか」を推測できるように命名するのが主流です。

### 真偽値（boolean）: 質問形にする

true または false が入る変数は、is、has、can、should などを頭につけて、Yes/Noで答えられる名前にしましょう。

```typescript
let isActive = true; //有効かどうか

let hasToken = false; //トークンを持っているか

let canEdit = true; //編集可能か

```

### 配列（Array）: 複数形にする

複数のデータが入る配列は、単語を複数形にするか、末尾に List や 's, es'（複数） を表す言葉をつけます。

また、配列(Array)は、const で定義するのが一般的です。

```typescript

const users = [...];  // userの複数形

const itemList = [...]; // リストだと名前でわかる

const children = [...]; // 要素 child の複数形で children

const people = [...]; // 要素 person の複数形で people

const indices = [...]; // 要素 index の複数形で indices

```

## 変数名をかんがえてくれるサイト

専用のAIサイトがあります。名前の付け方に迷ったらAIに聞いてみるのもよいでしょう。

[Workik](https://workik.com/variable-name-generator)

利用するプログラミング言語を与えて、意味を入力すると候補を返します。

```: 例
Typescript, 生きているかどうかの２値をもつ変数名
```

```: 回答
isAlive が最適です。boolean には is プレフィックスを使うのが一般的です。

const isAlive: boolean = true;

他の候補: isLiving、alive（ただし is なしより明確さは低い）
```
# 条件判定構文

## if-else

## 論理式

# 繰返し構文

## for

## while



# 演算子

## 演算子基本

## 算術演算子

## 文字列を結合

## テンプレートリテラル

# 代入演算子

## 分割代入

複数の値を取り出して代入する方法です。

```typescript
// 1番目と2番目を代入
const numbers = [ 10, 20, 30 ];
const [a, b] = numbers; // a = 10, b = 20 が代入されます

// 2番目をスキップして代入
const colors = ["red", "blue", "green"];
const [first, , third] = colors; // first = "red", third = "green" が代入されます

// 残りの要素をすべてまとめる（残余パターン）
const [ head, ...tail ] = [ 1, 2, 3 ];
console.log(head); // --> 1 
console.log(tail); // --> [ 2, 3 ]
```

## 連鎖代入（同じ値を複数の変数に代入）

1つの値を、複数の変数に同時に代入する書き方です。右側から順に評価されます。

```typescript
let x: number;
let y: number;
x = y = 10; // yに10が代入され、その結果（10）がxにも代入される
```

# 変数名を途中で書き換える ( 別名 エイリアス)の付けかた

オブジェクトの分割代入のときに使えます。元のプロパティ名の後ろに ： 新しい変数名 をつけます。

```typescript

const user = ｛ name: "Alice", age: 30 ｝;

// name プロパティを「userName」という別の変数名で受け取る
const ｛ name: userName, age ｝ = user;

console.log(userName); // 結果: "Alice"
console.log(name);     // ❌ エラー（name という変数は存在しない）

```

```typescript

const user = ｛ name: "Alice", age: 30 ｝;

const ｛ name, age ｝ = user;

// name プロパティを「userName」という別の変数名で受け取る
const ｛ name, age ｝ = user;

console.log(userName); // 結果: "Alice"
console.log(name);     // ❌ エラー（name という変数は存在しない）

```


# 値がなかったときの「デフォルト値」の設定方法

オブジェクト・配列の両方で使えます。変数名の後ろに ＝ 初期値 をつけます。<br>
データが undefined だった場合（データが存在しなかった場合）に、指定した初期値が自動で代入されます。

```typescript
const user = ｛ name: "Bob" ｝; // age が存在しない

// age が存在しない（undefined）ので、初期値の 18 が代入される
const ｛ name, age = 18 ｝ = user;

console.log(age); // 結果: 18

```

```typescript
const coordinates = ［ 100 ］; // 1つしか要素がない

// 2番目の要素（y）がないので、初期値の 0 が代入される
const ［ x, y = 0 ］ = coordinates;

console.log(y); // 結果: 0

```

# 別名とデフォルト値

```typescript
const data = ｛ ｝; // 空っぽのオブジェクト

// 存在しない id を「userId」という変数名に変え、初期値に 999 
const ｛ id: userId = 999 ｝ = data;

console.log(userId); // 結果: 999

```

# インクリメントとデクリメント

数を 1ずつ増やす、減らすの演算子です。

```typescript
let counter = 0;

// インクリメント(1):  加算代入
counter += 1;

// インクリメント(2)
++counter

// デクリメント(1): 減算代入
counter -= 1;

// デクリメント(2)
--counter

```

# 乗算代入 

変数の値に 掛け算をして代入する演算子です

-1 を乗算代入すると、値を プラス/マイナスで反転させることができます。

```typescript
let direction = 90;

direction *= -1; // --> -90 になります。

direction *= -1; // --> 2回目は 90になります。

```
# 単項マイナス演算子

同じ効果を生む方法

```typescript
let direction = 90;

direction = -direction; // --> 90のマイナス値を代入して -90 になります。

direction = -direction; // --> 2回目は 90になります。

```

# 論理否定

ビックリマーク(!)で否定を表します。

```typescript

let isActive: boolean = true;

isActive = !isActive;  // trueの否定(false)が、isActive に入る
isActive = !isActive;  // falseの否定(true)が、isActive に入る

```


# 論理否定代入演算子

```typescript

let isActive: boolean = true;

isActive != true;  // trueの否定(false)が、isActive に入る
isActive != true;  // falseの否定(true)が、isActive に入る

```

# 配列

## for...of

## for..in

## Array.forEach

## Array.filter

## Array.map

# 連想配列

# Map

# リテラルオブジェクト

# 関数(function(){})

# アロー関数(()=>{})

# 関数のオーバーロード

# 変数のスコープ、変数の重複エラー

# 型定義( type / interface )

# function内での thisキーワード

# イテレーター(Iterator)とイテラブル(Iterable)

## `イテレーター`の実装

### Generator関数を使う

```typescript
const myIterable = {
  data: ['リンゴ', 'バナナ', 'ミカン'],
  
  // Symbol.iterator メソッドをジェネレーターとして実装
  *[Symbol.iterator]() {
    for (const item of this.data) {
      yield item; // 呼び出されるたびに値を1つずつ返す
    }
  }
};

// 自作オブジェクトを for...of で回せる
for (const fruit of myIterable) {
  console.log(fruit); // 「リンゴ」「バナナ」「ミカン」が順に出力される
}
```

### 愚直に作りこむ
```typescript
const myIterable = {
  data: ['リンゴ', 'バナナ', 'ミカン'],
  
  [Symbol.iterator]() {
    let index = 0;
    
    // next() メソッドを持つオブジェクト（イテレーター）を返す
    return {
      next: () => {
        if (index < this.data.length) {
          // ループが続く間は done: false
          return { value: this.data[index++], done: false };
        } else {
          // 終わったら done: true
          return { value: undefined, done: true };
        }
      }
    };
  }
```

## Generator関数とは？

next() の実行により、`yield`がある場所で一時停止、次のnext()の実行で 停止した行から再開、・・・<br>
と繰り返すことができます。<br>

Generator関数は、`イテラブル`であるので、for...of で使うことが可能です。

```typescript
function* test() {
  for(let idx = 0 ; idx < 4; idx++) {
    console.log( 'idx=', idx );
    yield; // <== 一旦停止するところ
  }
}

const gen = test(); // Generator生成

gen.next(); // <-- 1回目の実行  'idx= 0'
gen.next(); // <-- 2回目の実行  'idx= 1'
gen.next(); // <-- 3回目の実行  'idx= 2'
gen.next(); // <-- 3回目の実行  'idx= 3'


```