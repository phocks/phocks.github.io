---
tags: dev
---

Hooks let you do more things with function components.

---

You can use state with the `useState()` hook.

eg. `const [count, setCount] = useState(0)`.

Now `count` equals `0`.

Update `count` with `setCount(1)`.

Now `count` equals `1` and the component will update.

---

You can also trigger side effects with the `useEffect()` hook.

eg. `useEffect(() => console.log(count), [count])`.

Now it will console log every time `count` updates.

_hint: use `[]` to only trigger the side effect once when the component is mounted and just leave off the second argument to trigger the effect after any state change._

_hint 2: if you return a function from your side effect it will run that function after the componet unmounts._

---

Here's some code.

```jsx
import React, {useState, useEffect} from "react";

function Counter(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = count;
  }, [count]);

  function countHigher() {
    setCount(count + 1);
  }

  return (
    <p onClick={countHigher}>
      {count}
    </p>
  );
}

```
And that's pretty much it.

If you want a more in-depth look [read the docs](https://reactjs.org/docs/hooks-intro.html).



