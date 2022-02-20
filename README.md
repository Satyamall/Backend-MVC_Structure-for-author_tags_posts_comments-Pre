# Backend-MVC_Structure-for-author_tags_posts_comments-Pre
MVC Structure for Author, Tag, Post, and comment by using mongoose, express and postman for post data

# MODELS, VIEWS & CONTROLLERS ( MVC )

-Our applications generally consists of 3 layers

View Layer :- This is the client facing side of the application
Application Layer :- This is where the application logic sits
Business Layer or Data Layer :- This is where the business transactions are made

-Above are kind of technical definitions of the layers but the above layers in more simpler language is :-

View Layer :- Frontend of the application and as we are using React for all of the frontend needs hence we don't have a view layer in our express application but you can create views in express but out of scope for this course.
Application Layer :- This is like the co-ordinator of the system and it takes in requests from the view layer and then delegates to different parts of the code and business layer to get different things, for e.g :- passing to validations, authentication and authorisation systems for check auth and validations, database models for getting the required data processing done and then finally decidig on how to format the output and then send the output to the view layer and generally are represented by controllers.
Business Layer or Data Layer :- This is where the database activities happen and is the heart of the application and if represented in model files.

-Now that we know what MVC is lets refactor the apis that we had written in previous class and convert them into an MVC system.

# For post data like tags, post, comments from postman and take ref from each other we can see it below:

**Post:-** http://localhost:5000/tags
```js
{
    "name": "Web Developer",
    "author": {
         "_id": "621243fc4e45ed30fb98105a"
    }
}
```
**Output in Postman after post request:-**
```js
{
    "data": {
        "name": "Web Developer",
        "author": "621243fc4e45ed30fb98105a",
        "_id": "6212824acf3ac03a35b32784"
    }
}
```

**After Get Request from postman data look like below:-**

```js
{
    "data": [
        {
            "_id": "62127f48529f79c279e50cc8",
            "name": "Full Stack Web Developer",
            "author": {
                "_id": "621243fc4e45ed30fb98105a",
                "first_name": "Satya",
                "last_name": "Mall"
            }
        }
    ]
}
```

