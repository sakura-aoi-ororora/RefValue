# RefValue
C#'s `ref Value` for JS/TS

# Use
```ts
import { RefValue } from "https://github.com/sakura-aoi-ororora/RefValue/raw/main/mod.ts"

// Init
let a = new RefValue(0)
// Set
a.set(5)
// get
console.log(a.get()) // 5

function example(value: RefValue<number>) {
    value.set(10)
}

example(a)

console.log(a.get()) // 10

```