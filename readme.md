`diff` is a simple similarity scoring tool built on [Google's `diff-match-patch` library](https://github.com/google/diff-match-patch).

Install:

```bash
npm install --save https://github.com/jrc03c/diff
```

Use:

```js
const diff = require("diff")
const score = diff("Hello", "hello") // 0.2
```

The `diff` function returns the Levenshtein distance between two strings divided by the length of the longer string.
