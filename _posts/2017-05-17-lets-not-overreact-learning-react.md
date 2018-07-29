---
title: Let’s not overreact learning React
layout: post
tags: dev
---

![](/public/img/react-mountain2.jpeg)

## How to learn React the slow way

Yep I’m still learning React. My previous article [OK fine I’ll learn
React](https://medium.com/front-end-hacking/ok-fine-ill-learn-react-bc2200fa1937)
gives a quick intro to me getting started with the JavaScript library all the
kids are raving about these days.

This post will look at the basic building blocks of a React app. It may also try
to make sense of why someone would actually use React in the first place… maybe.

The [official React
docs](https://facebook.github.io/react/docs/hello-world.html) from Facebook can
get slightly daunting when you first read them. It is easy to get overwhelmed
because they introduce multiple new concepts at once. So here we’re gonna take
things nice and slow, like really slow.

Remember our Hello World app from last time?

<script src="https://gist.github.com/phocks/263f2730720a6ddd474b4da4410088bf.js"></script>

Basically when you open this file it loads React in your web browser and then
renders `<h1>Hello, world!</h1>` in between the  div so it displays Hello, world! on the page.

Previously I called the `<h1>Hello, world!</h1>` bit of code a React “component” but it is actually a
React “element”. Whatever.

Let’s start building.

### Baby’s first component

A React component is made up of one or more elements wrapped up in a JavaScript
“function” or a JavaScript “class”. For now we’re just gonna focus on functions
because they’re heaps easier.

This is the simplest React component you can get:

    function Hello(props) {
      return <h1>Hello, world!</h1>
    }

It’s a function named “Hello”. React functions need to start with a capital
letter or they won’t work. It accepts some properties or  as they like to call
them. And it returns an element.

### Anyway let’s make something semi-useful

So what’s the simplest thing we can make that actually does something useful?
There’s probably something better but I think a random number generator might
fit the bill.

Here’s the new code anyway:

<script src="https://gist.github.com/phocks/68781ef10580971aa4ab1f282be217f7.js"></script>

<small>Unfortunately Gist doesn’t highlight text/babel code just yet :( 2017/08/10 update: it looks like they do now!</small>

Save this file or copy and paste the code into a HTML file and open it up in
your web browser and you should get a big giant random number between 1 and 45
(the highest number in the Australian Lottery).

If you play the Australian lotto you could use this to pick your numbers for
next week’s draw (as long as you promise to [PayPal
Me](https://www.paypal.me/phocks/999999.99) 2% of the winnings if you hit the
jackpot).

![](https://cdn-images-1.medium.com/max/800/1*3AcdLZArhZT4asM7qc7AhQ.png)

So what’s happening here anyway?

First we add 2 basic styles to `html` so that the text is in the middle and it’s super
big. Later on we will probably build the styles right into the components.

We then create a new React component called “Random”. I used variables in the
function here to more easily show what’s happening. I set `maxNumber` to 45 but you can set
it to anything you want. The `Math.floor` and `Math.random` thing is just a little trick to get
JavaScript to give us a random whole number aka. integer between 1 and whatever.

Lastly we return our element. It’s just a div with the `randomNumber` we generated before
inside it. We need to wrap this variable in curly brackets `{}` so that React knows
to parse it as a variable and not text. You’ve probably heard of JSX. Well yeah
this is JSX. But we’ll get to that later.

Down in `ReactDOM.render` we simply tell it to render our component to the page using . And there
you have it!

Here’s a working copy [http://random45.surge.sh](http://random45.surge.sh/)

Just refresh the page for a brand new number!

### I still don’t get it

We didn’t really get into why anyone would want to use React. But don’t worry
I’m sure that will come up next time when we decide we want to reuse a few
components and make them do different things.

Until then. Peace out coders. ✌
