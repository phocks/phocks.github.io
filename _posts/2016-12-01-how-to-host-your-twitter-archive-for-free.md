---
layout: post
title: How to host your Twitter archive for free
tags: twitter archive post web
published: true
---

You've been able to [download your full Twitter archive](https://support.twitter.com/articles/20170160) for a few years now. This is great if you want to search locally through all your tweets. But what if you want to share your archive with the world?

Luckily [Github Pages](https://pages.github.com/) offers free hosting for static web pages. Here's how to quickly set this up. For now I'll be using the [desktop version of GitHub](https://desktop.github.com/) but I might add in the commandline process at a later date.

Firstly you'll need a [GitHub](http://github.com) account so create one if you don't have one or log in and then create a new repository called `tweets` or something like that.

Open the  GitHub desktop client on your computer and clone the `tweets` repository (using the little + sign in the top left) to wherever you like.

Now unzip your Twitter archive into the repository folder. Then you can commit the changes by adding a brief summary and clicking "commit to master". Then hit "Publish" or "Sync" up the top right. Wait a little while because this may take a few minutes to upload.

Next go to your GitHub account in your web browser and navigate to your `tweets` repository. Then click "Settings" and scroll down to the "GitHub Pages" section. Select "master branch" from the dropdown box and hit "Save".

That should be it. It may take up to 5 minutes for your site to be live but after that you should be good to go.

Anyway here's [my Twitter archive](https://phocks.github.io/tweets/) to check out how it should look in the end.
