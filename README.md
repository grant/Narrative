Narrative
=========

Creative Writing for Creatives

For more info, visit [http://mynarrative.co/](http://mynarrative.co/)

##Properties that point to this website
* [mynarrative.co/](http://mynarrative.co/)
* [www.mynarrative.co/](http://www.mynarrative.co/)
* [mynarrative.herokuapp.com](http://mynarrative.herokuapp.com)
* [mynarrative.github.io](http://mynarrative.github.io)

##Technology Used
* [Heroku](http://heroku.com)
* MongoDb + Mongolab
* Node + Express
* JS
* HTML + CSS
* Handlebars

##How this website works in the backend
* The website is being hosted on Heroku
* The db is a heroku add-on called MongoLab
* Redirects (To make the website without the www work): mynarrative.co -> mynarrative.github.io -> mynarrative.herokuapp.com

##Dependencies
* Node [http://nodejs.org/download/](http://nodejs.org/download/)
* Mongodb [http://docs.mongodb.org/manual/installation/](http://docs.mongodb.org/manual/installation/)

##How to Install
1. Install dependencies (above)
2. $ ```npm install``` (this installs all website dependencies like Express and Handlebars)

##How to Run
1. Open two terminal shells, one for each command (node app, mongod)
2. In each shell, go to the root of the github repo.
3. $ ```node app``` (Starts server)
4. $ ```mongod``` (Starts mongodb locally)
5. Open the website at [0.0.0.0:3000](0.0.0.0:3000)
6. Note: When running locally, you probably won't see anything because you probably don't have any records in your database. Look below how to fix that.

##How to add example records/prompts
* In another shell, run ```mongo```. This is your cli for mongodb
* The local database is called ```mynarrative```. Switch to it with ```use mynarrative```.
* The collections we will use are ```narratives``` and ```prompts```.
* To see records in the collections type ```db.narratives.find()```.
* To add an example prompt, type

<pre>
  db.prompts.insert({
      "imageURL": "https://s3.amazonaws.com/narrativeBlob/images/001.jpg",
      "thumbURL": "https://s3.amazonaws.com/narrativeBlob/thumbs/001_thumb.png",
      "description": "kid with helmet",
      "prompt": "When I grow up I…"
  })
</pre>

* To remove everything from a collection, type ```db.narratives.remove()```

##How to push to heroku
* ```git push heroku master```
