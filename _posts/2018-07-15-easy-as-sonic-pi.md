---
published: true
layout: post
title: Easy as Sonic Pi
tags: media dev
---

I was wowed by this tool called [Sonic Pi](https://sonic-pi.net/) a little while ago. It's [open source](https://github.com/samaaron/sonic-pi). It lets you write music in what looks like [Ruby](https://www.ruby-lang.org/en/) code. But I haven't had a chance to properly play around with it or learn how to actually make any proper music with it... until now!

I just went through a few of [the tutorials](https://sonic-pi.net/tutorial.html) and everything seems to make sense.

Anyway it's pretty easy to get started: just [download the app](https://sonic-pi.net/) and run it. Then paste the following code into the editor and hit Run.

```ruby
# Ambient Experiment

# Coded by Darin Wilson
#
# The piece consists of three long loops, each of which
# plays one of two randomly selected pitches. Each note
# has different attack, release and sleep values, so that
# they move in and out of phase with each other. This can
# play for quite awhile without repeating itself :)

use_synth :hollow
with_fx :reverb, mix: 0.7 do
  
  live_loop :note1 do
    play choose([:D4,:E4]), attack: 6, release: 6
    sleep 8
  end
  
  live_loop :note2 do
    play choose([:Fs4,:G4]), attack: 4, release: 5
    sleep 10
  end
  
  live_loop :note3 do
    play choose([:A4, :Cs5]), attack: 5, release: 5
    sleep 11
  end
  
end
```

This is just one of the standard examples. It's the one that struck me instantly. Imagine the possibilities!

The synths play through different notes that loop at different intervals so they create a kind of non-repeating soundscape.

Someone has also coded the [Super Mario Bros. theme](https://gist.github.com/xavriley/87ef7548039d1ee301bb) in it.

Pretty fun times ahead!
