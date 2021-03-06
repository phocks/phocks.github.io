---
layout: post
title: How to get 2x Oracle Cloud servers free forever
tags: blog devops tech
---

This is a follow up to my [How to get a Google server free forever](https://dev.to/phocks/how-to-get-a-free-google-server-forever-1fpf) post.

In the comments [selim13](https://dev.to/selim13) let me know that Oracle was offering a similar deal but even better!

![Comment](/public/img/oracle-comment.png)

The servers have twice the RAM that Google offers and more Hard Disk space plus 2 CPU cores compared with 1 on Google Cloud. And you get 10 TB outgoing traffic per month compared with 1 GB on Google! As for the 10 Mbps bandwidth limit, it seems that only applies if you enable a **load balancer** on your virtual network.

Go [here](https://www.oracle.com/au/cloud/free/) and click **Start for free**. Then enter your country, name, and confirm your email. 

> *Note: my confirmation email went to spam so check there*

![Sign up](/public/img/email-signup.png)

Choose a username and password and make sure you choose a region that includes the [always free cloud services](https://www.oracle.com/cloud/data-regions.html#northamerica).

![Choose region](/public/img/username-region.png)

Fill in your address, verify your mobile number, then hand over your credit card details.

> *Note: unfortunately payment info is required even though they won't actually charge you if you stay on the free tier*

Pretty soon they'll send through your access details via email so you can log in. Then you'll get this screen.

![Build your server](/public/img/create-vm.png)

Click on **Create a VM instance** and configure your machine.

I switched from Oracle Linux to Ubuntu Linux but other than that I just kept all the defaults. You can change the boot image by clicking **Edit** in the **Configure placement and hardware** section.

![Edit image](/public/img/config-image.png)

**IMPORTANT: SAVE THE PRIVATE KEY**

![Save the private key](/public/img/download-ssh.png)

> *You will not get another chance to do this and will not be able to access the server without it*

Click **Create** and your server will spin up!

![Alt Text](/public/img/ip-address-vm.png)

Repeat this from **Create a VM instance** to get your 2nd free server.

That's it! You can [connect to your new servers via ssh](https://docs.cloud.oracle.com/en-us/iaas/Content/Compute/Tasks/accessinginstance.htm).

Have fun!
