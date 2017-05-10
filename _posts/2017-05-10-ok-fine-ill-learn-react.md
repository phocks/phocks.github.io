---
title: OK fine I’ll learn React
layout: post
---

![](/public/img/react-mountain.png)

## Or: how I learned to stop worrying and love the frontend

This will be an ongoing series. It will focus on my journey in forcing myself to
learn this seemingly rather unintuitive JavaScript library called React.

I’ve been threatening to learn it for a while. Every time however I keep getting
to a point and then I ask myself:

> “Why the hell am I learning this I don’t even like building frontend user
> interfaces anyway?”

This time will be different. I hope.

### What is React? (and what React isn’t)

React is a way to build reusable HTML components and then render them on to a
web page with JavaScript. That’s it. OK I know there’s probably a bit more to it
than that, but we’ll get to it later.

React is NOT a complete JavaScript framework. It’s just the frontend. So there’s
no use comparing to Angular, or Ember, or Meteor at all really.

### Minimum Viable Whatever

For starters we’re not going to worry about installing Node and npm and all that
until later. It’s possible to build a simple React web app/website using a
single HTML file. So here we go. Just copy and paste the following into a file
called  or whatever and open it in your web browser:

<script src="https://gist.github.com/phocks/263f2730720a6ddd474b4da4410088bf.js"></script>

OK so what’s going on here?

It’s just your basic HTML5 page as indicated by the `<DOCTYPE html>` up top. The  needs to be
set to `UTF-8` for some reason or it won’t work. Then we have our title. Then three
external scripts are imported so that React works. Don’t worry about these yet.

In the `body` the only element we have is a `div` with `id="root"` and this is where we will tell
React to render our component.

Lastly we have a script. This is the React part. The `<h1>Hello, world!</h1>` bit is our React
component. Yes it looks just like HTML. That’s because it is just HTML code, for
now. Later on we’ll learn how build these components separately so they are
reusable.

Lastly, we call on the `ReactDOM.render();` method to render our react component onto the page using `document.getElementById('root')`.

That’s it! Your first React app. How exciting.

### What now?

You may be thinking:

> “Wow, that’s dumb. I could have just typed the Hello, world! heading into the
> page manually and not used React at all.”

And you’d be right. Hopefully we’ll get to find out how React can actually be
useful in real-world scenarios in the future.

Until then. Peace out coders. ✌
