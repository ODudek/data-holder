# RestApi placeholder


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
$ put /users/3			# Update user
$ delete /users/3		# Remove user
```

2. Post
```
$ get /posts			# Return array of all posts
$ get /posts?page=1		# Return array of 10 posts
$ post /posts			# Add new post
```

3. Photo
```

```

## TODO

1. - [x] - Finish user api
2. - [ ] - Finish post api
3. - [ ] - Finish photo api
4. - [ ] - Better error handling


## License 

The MIT License @ 2018
