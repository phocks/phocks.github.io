---
published: true
layout: post
title: Updating Jekyll blog theme
tags: dev
---
Time for a change.

A while ago Jekyll released "Gem-based themes".

> Gem-based themes make it easy for theme developers to make updates available to anyone who has the theme gem. When there’s an update, theme developers push the update to RubyGems.
>
> The goal of gem-based themes is to allow you to get all the benefits of a robust, continually updated theme without having all the theme’s files getting in your way and over-complicating what might be your primary focus: creating content.

Sounds nice in theory. But the change hasn't caught on completely. Many themes still remain in the old format like this [Texlog](https://github.com/heiswayi/textlog) one that caught my eye.

> Textlog is a minimalist, lefty-style Jekyll theme designed for documentation based blog.

So instead of just installing a Ruby `gem` and changing a setting in `_config.yml` we have to try doing things the old fashioned way.

In the end I just cloned the Texlog repo and then copied over all my `_posts` and about page and then made some changes to the config and template files etc.

I ran `bundle install` then `bundle exec jekyll serve`...

Lo and behold. It worked!