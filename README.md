# js-console-utils

## Definition

`const log = (txt, color = 'white', level = 0, length = null, fillWith = " ", showDate = true)`

## Usage 

```
log(`Hello World \n`); // [11:10:11] Hello World
log(`Hello World \n`, 'blue'); // Same but in blue
log(`Hello World \n`, 'blue', 2); // only with params -vv
log("Loading 1 ", "white", 0, 20, "."); // [11:10:11] Loading 1 ..........
log("Done \n", "white", 0, null, null , false); // do not display date at start
```
