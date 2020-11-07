---
layout: post
title: A simple web API with Deno, Oak, NGINX secured with Let's Encrypt on Google Cloud
tags: blog tech
summary: A step by step guide.
---

I'm writing this primarily for my own reference — so I don't forget how to do this for next time, but if you find it useful then that's cool too. Here's what we'll do. We're gonna set up an API that when you access it, it sends back the following JSON message:

```json
{ "message": "Hello World!" }
```

Simple right? OK!

> Note: I'll be running all this on my Google Cloud Compute instance. You can learn how to set one up for free using [this handy tutorial](https://phocks.github.io/a-free-google-server-forever.html) that I wrote last time.

But we'll get to that part later.

First up let's do an <abbr  title="Minimum Viable Product">MVP</abbr>. We'll be running our web server on Deno so make sure [it's installed](https://deno.land) — or you can use Node.js/Express if you're familiar with that. Basically we just want a http server listening on a <abbr title="Transmission Control Protocol">TCP</abbr> port.

Make `server.ts` in a new project folder and chuck in:

```typescript
import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = { message: "Hello World!" };
});

console.log("Listening on http://localhost:12345");
await app.listen({ port: 12345 });
```

And then run `deno run --allow-net server.ts`

---

> ...to be continued (check back later and maybe I'll have written more)