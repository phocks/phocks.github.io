---
published: true
layout: post
title: How to host a Ghost 2.0 blog for free on Glitch
tags: media
---
[Ghost 2.0](https://blog.ghost.org/2-0/) is here!

I've always liked Ghost as a blogging platform. It's open source. It runs on Node.js. I even momentarily [moved this blog](https://phocks.github.io/hello-again.html) over to Ghost for a little while back in the day.

The only problem is it's relatively hard to set up hosting for it. You could always just pay the [monthly fee](https://ghost.org/pricing/), but it's pretty expensive (as far as blog hosting goes).

But there is a way to set up a Ghost blog on Glitch. Here's how you do it:

* Go to [glitch.com](http://glitch.com) and click **New Project** -> `hello-sqlite`. This will start a new Glitch project
* Click the `package.json` file on the left and then **Add Package** and search for "ghost" then click it to install
* Create a **New File** on the left and call it `config.development.json` with the following in it:

```json
{
  "database": {
      "client": "sqlite3",
      "connection": {
          "filename": "./.data/sqlite.db"
      },
      "debug": true
    },
    "paths": {
      "contentPath": "content/"
    },
    "server": {
      "host": "127.0.0.1",
      "port": 3000
    },
    "url": "https://ghost2.glitch.me"
}
```

* Replace the `ghost2` part in `url` with the subdomain of your Glitch project (it will be something like `lime-hen` and you can change it)
* Now we need to make a `content` folder. The easist way to do this is to click **New File** and type `content/temp.txt` then press enter
* Finally, we need to replace the contents of `server.js` with the following:

```javascript
const ghost = require('ghost');

ghost()
    .then(function (ghostServer) {
        return ghostServer.start();
    });
```

And that's it! You should have a working Ghost blog. If you click on **Show** up at the top left you should see your new blog.

You can delete all the extra files in `public/` etc too.

Also, don't forget to go to `<your-blog>.glitch.me/ghost` and set up an admin password etc and write your first post.

Have fun Ghosting!

---

PS. Here's one I prepared ealier so you can [see the code](https://glitch.com/~ghost2) for yourself (or simply remix it and it should work right out of the box hopefully).