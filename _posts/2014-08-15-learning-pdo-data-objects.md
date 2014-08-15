---
layout: post
title: Learning PDO Data Objects & Other Recursive Acronyms
---

I had avoided it so well and for so long, but a little while ago I decided it was about time I started properly learning about database programming, if I was going to do anything really serious on the web in times like these. PHP is usually my default language of choice first up *(which stands for PHP Hypertext Preprocessor)*. I started a tutorial with the old `mysql_connect()` commands, but then apparently that was depreciated and so I tried `mysqli_connect()` for a little while before deciding what the hell I might as well go the whole hog and learn the object oriented PDO *(which stands for PDO Data Objects funnily enough)*.

So I thought I'd step through the very basics of interacting with MySQL using PHP and blog my progress and development along the way. So here goes! Well first off to do anything with a database you need to connect to it. To do this you create a new instance of the PDO class. Before that though let's set up these four variables needed to connect:

{% highlight php startinline %}
$database_user = 'username';
$database_pass = 'password';
$database_host = 'localhost'; 
$database_name = 'database';
{% endhighlight %}

I'm assuming here that you've already set up a MySQL database like I did just using [phpMyAdmin](http://www.phpmyadmin.net/) on my server and created a table with an ID and a TEXT column and inserted a few rows in there with some random quotes and stuff. Anyway so now let's connect to the database:

{% highlight php startinline %}
try { 
	$dbh = new PDO("mysql:host=$database_host;dbname=$database_name", $database_user, $database_pass);
	} 
catch (PDOException $e) 
	{ // catch any PDO exceptions and print error
	print "Error!: " . $e->getMessage() . "<br/>";
	die();
}
{% endhighlight %}

It seems to be a good idea to use `try` and `catch` blocks to handle any errors. But I guess the line we're really looking at is:

{% highlight php startinline %}
$dbh = new PDO("mysql:host=$database_host;dbname=$database_name", $database_user, $database_pass);
{% endhighlight %}

So the `$dbh` variable becomes a new PDO instance and connects to the database. Now I'm just going to grab some text data from the database and display it:

{% highlight php startinline %}
$stmt = $dbh->prepare("SELECT * FROM qt_quotes where quote_id = 1");
$stmt->execute();
while ($row = $stmt->fetch()) {
	print $row['quote_text'];
	}
{% endhighlight %}

First we prepare a SQL statement, then we execute that statement on the database, then we fetch the rows one by one from the result and print them on the screen (in this case there will hopefully only be one result with the unique ID of 1 and we will be displaying it as html output in a web browser).

Okay well that's enough for now anyway. I thought it might be fun and helpful to step through this learning process, but it has turned out to be rather tedious lol, so I may or may not continue any more posts like this in the future. I hope you learnt something today anyway. Until next time.