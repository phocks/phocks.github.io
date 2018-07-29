---
published: true
layout: post
title: OK I learnt React — kinda — and got hired as a front-end developer
tags: dev blog
---

![React Mountain 3](/public/img/react-mountain3.jpg)


## But it wasn’t because I learnt React

I’m done “learning” React.

At the same time I’ll probably never by “done” learning React.

This will be the third and final chapter in what might have been a much longer series had I not just a few months ago accepted a position working full-time as a front-end developer.

You can read [the first](https://medium.com/front-end-hacking/ok-fine-ill-learn-react-bc2200fa1937) and [second article](https://medium.com/@phocks/lets-not-overreact-learning-react-f38c403e4cf4) if you want some additional perspective.

## A resolution to develop (as a person)

For New Year’s I resolved to make a slight redirection in the course of my career. I wanted to become a “proper” developer.

So I gave notice at my old job as in IT Support/Sysadmin and hit up [every online learning resource](https://github.com/micromata/awesome-javascript-learning) I could find on the Internet about JavaScript development.

I avoided learning React for a long time simply because it seemed like a lot of effort for a library that might be replaced by something else (hello [Vue](http://vuejs.org/)) in a few months time anyway.

But I persisted, for a bit.

## Getting hired

I would like to say that I got hired because I learnt React inside and out and was a genius at it. But I think it would be more accurate to say I got hired because I showed my willingness to learn new things.

_(Plus I knew someone on the inside who recommended me for the position… that may or may not have had something to do with it.)_

There was also a hell of a lot of trial and error and outright rejection beforehand while I was out there in the brutal job market. It was definitely a tough few months.

But still I persisted. I forced myself to get “out there”. I went along to local JavaScript meetups and React meetups. I spoke to people and tried to make as many friends as I could.

All the while I kept learning. And eventually the perfect role came along.

The first few weeks of work were actually spent learning a completely different JavaScript library ([D3](https://d3js.org/)) which I had only very briefly looked at before.

And we are only now beginning to build a few React components that we will be able to use and re-use in future projects.

It’s a brave new world out there.

## So here’s my takeaway from the whole experience

This turned out not to be a coding tutorial article like the others, but whatever. There are far [better places](https://edgecoders.com/so-you-want-to-learn-react-js-a78801d3cd4d) on the Internet to learn React than through my rambling writing here.

But here are a few things I will leave with you on your journey.

You probably already kinda know React. There’s nothing magical about React. It’s just JavaScript and HTML and CSS being rendered to a screen.

[JSX](https://facebook.github.io/jsx/) is not that scary. It’s pretty much just like HTML but right there in your JavaScript instead of a separate file.

React is all about components. You build your base App component and then you slot in all your other components into it like this:

```
function App() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
```

And then you just render the App component to your page.

So just start building stuff. It is 100% the best way to learn. Go through the [docs and tutorial](https://reactjs.org/docs/hello-world.html)s and then get building. Build components and [publish them on GitHub](https://github.com/brillout/awesome-react-components), even if they’re not very good.

Never stop learning. And have fun out there. Peace 🍑
