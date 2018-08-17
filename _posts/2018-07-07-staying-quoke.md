---
published: true
layout: post
title: Staying Quoke
tags: tech
---

Almost a year ago I registered a domain name, mostly because it was on special for $3.29. I've been wanting to build another quotes website for a long time now ever since my old website got domain-jacked and I decided to just let it stagnate.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">i registered a domain for <br>$3.29<br>watch this<br>space <a href="https://t.co/ueClvoOQF6">https://t.co/ueClvoOQF6</a></p>&mdash; Hillary was right (@phocks) <a href="https://twitter.com/phocks/status/889042868974764032?ref_src=twsrc%5Etfw">July 23, 2017</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

I've been dragging my feet on the project somewhat. Things have been pretty busy over the past year, but mainly it's been because I couldn't get a vision clear in my mind of what I wanted this site to be. Would it be a showcase? Would it be just a repository? It kept changing from one thing to another, like some kind of chameleon shape-shifter.

Anyway it's about time I shipped something else. Introducing [Quoke](https://quoke.co/), a collaborative (hopefully) curated collection of famous quotations showcasing different design styles in `html` and `css` (and maybe a bit of JavaScript).

[![Quoke featured](/public/img/quoke-featured.png)](https://quoke.co/)

It will be updated whenever I get the chance. I'll add new quotes and designs. I'll also be calling on submissions from friends.

So if you have a quotation in mind simply design it up as a standalone `.html`. file and make a pull request to the [GitHub repository](https://github.com/quoke/quoke.github.io) with it in the `_quotations` directory.

Your HTML should look a bit like this:

```html
---
layout: quote
title: Every book is a quotation
date: 2018-05-19
text: Every book is a quotation; and every house is a quotation out of all forests, and mines, and stone quarries; and every man is a quotation from all his ancestors.
author: Ralph Waldo Emerson
size: short
tags: featured
---
<style>
  div.every-book-is-a-quotation {
    font-weight: bold;
    font-size: 22px;
    background-color: aquamarine;
    color: crimson;
    padding: 5em 15px 5.2em;
    text-align: center;
  }

  div.every-book-is-a-quotation div.inner-text {
    max-width: 960px;
    margin: auto;
  }

  @media (min-width: 992px) {
    div.every-book-is-a-quotation {
      font-size: 48px;
    }
  }
</style>

<div class="every-book-is-a-quotation">
  <div class="inner-text">
    "Every book is a quotation; and every house is a quotation out of all forests, and mines, and stone quarries; and every man
    is a quotation from all his ancestors."
    <small>&mdash;Ralph Waldo Emerson</small>
  </div>
</div>
```

It's hosted directly on GitHub (just like this blog) using [Jekyll](https://jekyllrb.com/). So if you want to help out with content or even with developing the site into something special, please [just shout out](https://twitter.com/phocks).

I'm looking forward to seeing the designs people come up with!