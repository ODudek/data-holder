# Data holder
[![Build Status](https://travis-ci.org/ODudek/restApi-placeholder.svg?branch=master)](https://travis-ci.org/ODudek/restApi-placeholder)

## How to use
1. Add `.env` file in `/src/config` like this
```
USER=username
PASSWORD=password
```
2. In `api.conf.ts` edit url to mongodb
3.
```
$ npm install			# Install all dependencies
$ npm run dev			# Run server on localhost:3100
$ npm run lint			# Run tslint for project
```

## API
1. User
```
$ get /users			# Return array of all users
$ get /users?page=1		# Return array of 10 users
$ post /users			# Add new user
$ get /users/3			# Return object of user
$ put /users/3			# Update user and return updated version
$ delete /users/3		# Remove user
```

2. Post
```
$ get /posts			# Return array of all posts
$ get /posts?page=1		# Return array of 10 posts
$ post /posts			# Add new post
$ get /posts/3			# Return object of post
$ put /posts/3			# Update post and return updated version
$ delete /posts/3		# Remove post
```

3. Photo
```
$ get /photos			# Return array of all photos
$ get /photos?page=1	        # Return array of 10 photos
$ post /photos			# Add new photo
$ get /photos/3			# Return object of photo
$ put /photos/3			# Update photo and return updated version
$ delete /photos/3		# Remove photo
```

## TODO

1. - [x] - Finish user api
2. - [x] - Finish post api
3. - [x] - Finish photo api
4. - [ ] - Better error handling


## License 

The MIT License @ 2018
