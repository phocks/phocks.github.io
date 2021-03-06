---
published: true
layout: post
title: async/await explained as simply as I humanly possibly can
tags: dev
---

Put `async` in front of a function.

eg. `async function test() {}` or `const test = async () => {}`

Now you can use `await` inside that function to pause and wait for values that take their time getting back to us.

Here's an async function:

```javascript
// Define our async function and let it use await
async function test() {
  const response = await fetch("https://api.github.com/"); // Wait for the Promise
  const json = await response.json(); // Wait to resolve the Promise
  console.log(json); // Log the response
}

test(); // Run the function
```

Okay that's it! Get it now?

If not, [go here](https://dev.to/siwalik/async-programming-basics-every-js-developer-should-know-in-2018-a9c) for a better explanation. Or leave a comment and I'll try to help out.
