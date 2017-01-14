FRONT END - A Javascript SPA Movies application
===============================================

Problem
-------
Assume the JSON of movies made available in the data file exists.
Display the information about the movies on a web page in a list that enables
the user to view more details about the movie without reloading the page.
It should be possible to filter the movie list to display the items for a
specific country, writer and genre.

Implementation
--------------
The implementation is based on a combination of Bootstrap for layout and Angular
for frontend SPA. This combination of frameworks provided a fast prototyping
with nice looking features and simple to understand code.

The application was first based on the Bootstrap Default template.
It was then converted into an Angular main page (index.html).
This page gets all the application scripts from the 'scripts' folder structure
and fills its primary view using (partial) html files from the 'views' folder.

Common to all pages:
* A navigation bar providing navigation between the views
* Support for responsive presentation making it usable on both desktop and mobile
browsers.
* The movie data is loaded once and should be cached locally
* Support for all major current browsers. However some older platforms may
experience limitations or buggy behavior.


There are currently three views:
* main - This is a main page providing a welcome page and easy routing to the
other views (the navigation bar also provides this discretely to all pages).
* movielist - This is the solution page providing the requested functionality
specified in the test.
* movietable - This page was a byproduct of the test that was very easy to
implement and test some of the basic features early in prototyping. Given the
obvious usability it was kept despite it not being the solution requested.
It can easily be removed, but demonstrates the SPA implementation very well.

The application was developed with the Atom editor. During development the
Python package was used to provide a Web server serving the data over HTTP.
However, no Python code is used in the application and any web server should
suffice. In fact the application can be demonstrated directly on GitHub
(see below).

Running
-------
[The application can be viewed directly on GitHub](https://lmickos.github.io/Test2/index.html#/movietable "Go to the application")

Extensibility
-------------
There are plenty of possibilities to extend the application. Some examples:
* Extending the functionality of the table view that currently is limited in
it's features.
* Selectable sort order can easily be added to both the presentation views.
* A dedicated film view could be added.
* An "about" view
