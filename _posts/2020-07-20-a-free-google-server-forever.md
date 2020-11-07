---
layout: post
title: How to get a free Google server forever
tags: blog tech
---

![Google server](/public/img/google-cloud-f1.png)

I first heard you could get a free Virtual Private Server instance on the Google Compute Engine from a random person on Twitter.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Cheers to the random dude who suggested rather snarkily over twitter that I should simply use a Google Compute f1-micro instance to periodically ping my scripts etc no I won&#39;t be dignifying that suggestion with a reply but yes I will be using that free service thank you</p>&mdash; Joshua Byrd (@phocks) <a href="https://twitter.com/phocks/status/1284414043449511937?ref_src=twsrc%5Etfw">July 18, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

So here's how to do it.

1.  Go to the [Google Cloud Platform Console](https://console.cloud.google.com) and sign up/in if you have to and go to the [Compute Engine](https://console.cloud.google.com/compute) section using the hamburger menu top left.
2.  Enable Compute Engine it's not already enabled and then set up billing (you need to add a credit card or PayPal but don't worry you won't be charged).
3.  Create a new instance in one of the free tier locations (Iowa, Oregon, or South Carolina) with machine type `f1-micro`.

![Pricing](/public/img/google-cloud-pricing.png)

Finish the server config (make sure you add the max 30GB free disk space) and spin up the server. Click the **Connect via SSH** button to log in.

And that's about it for now. Enjoy your free server forever!

> If this post helped you please consider <a href="https://github.com/sponsors/phocks">sponsoring me</a> on GitHub.

---

*ps. I may update this page with more detailed instructions later if people want me to. Also NOTE: Even though you can run this server for free, Google may charge if you go over certain ["free tier" limits](https://cloud.google.com/free) etc so just keep a lookout for that in the terms and conditions...*
