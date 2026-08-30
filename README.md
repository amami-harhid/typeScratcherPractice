# typeScratcherPractice

This is a project for practicing writing TypeScript code—specifically, writing raw TypeScript.


# git clone

```
git clone https://github.com/amami-harhid/typeScratcherPractice.git
```

# npm install

```
npm ci
```

# TypeScratcher

[TypeScratcher Docs](https://amami-harhid.github.io/typescratcherDoc/web/)


# How to run (TypeScratcher script code)

tsFolderName: The folder name that contains the ts files under the src folder

## (1) step01

Please write the `TypeScratcher` code inside the `src` folder.<br>
Prepare a combination of index.html and index.ts.

## (2) step02

Running `npm run` displays the Typescratcher page in your browser.

```
npm run dev /[tsFolderName]/
```

```:example
npm run dev /001/
```

# How to run (plain TypeScript code)

## (1) step01

Please write the `TypeScript` code inside the `test` folder.


## (2) step02

```
node ./watch/watchAndRun.js [typescript code file path]
```
<br>
<br>

# watchAndRun.js

## Features

`watchAndRun.js` transpiles and executes a `PLAIN` TypeScript file. <br>
It automatically re-executes the file whenever it is modified and saved. <br>

When writing practice code in TypeScript, you might unintentionally create an infinite loop.<br>
`watchAndRun` forcibly breaks the loop if it runs for approximately 10 seconds.

