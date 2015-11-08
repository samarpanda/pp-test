## Address book

Address book application. [Express][3] server and client using [react][4] & [rxjs][6]. [Babel][5] to transpile [ES2015][2] to ES5 and tooling supported by [webpack][1].


## Usage

```shell
git clone https://github.com/samarpanda/pp-test.git

# install dependencies
npm install

# create distribution directory ui public folder
npm run deploy

# Start mongo db locally with directory path
mongod --dbpath $DIR_PATH

# Start server
npm start
```
Browser open url [http://localhost:3000][8]


## Client

1. Shows contact list
1. Responsive demo: shows the detail block towards the right for all resolution other than mobile. For mobile it shows at the top.
1. Search by contact name at the bottom. Implementation uses Observable concepts.

## Server
Supporting CRUD using express. REST API.

1. Create contact
```text
request
url  => '/contacts'
type => 'POST'
{
  name: 'String',
  phone: 'String'
}

status => 200
response
{
  name: 'String',
  phone: 'String'
}
```

1. Get all contacts
```text
request
url  => '/contacts'
type => 'GET'

status => 200
response
[{
  name: 'String',
  phone: 'String'
},
{
  name: 'String',
  phone: 'String'
},...]
```

1. Update contact
```text
request
url  => '/contacts/:id'
type => 'PUT'
{
  name: 'String',
  phone: 'String'
}

status => 200
response
{
  name: 'String',
  phone: 'String',
  _id: 'String'
}
```

1. Delete contact
```text
request
url  => '/contacts/:id'
type => 'DELETE'

response
{
	name: 'String',
	phone: 'String'
}
```

1. Filter by name
```text
request
url  => 'contacts/filter/:name'
type => 'get'
{
	name: 'String'
}

response
[{
  name: 'String',
  phone: 'String'
},
{
  name: 'String',
  phone: 'String'
},...]
```

## List of todos

1. Create / Update from UI
1. Combining search result & list view
1. Test suite using `ava`
1. Multiple browser testing using [karma] and saucelabs.
1. Refactor the repetative codes
1. Upload code to heroku


[1]: https://webpack.github.io/
[2]: http://es6-features.org/
[3]: http://expressjs.com/
[4]: https://facebook.github.io/react/
[5]: https://babeljs.io/
[6]: https://github.com/Reactive-Extensions/RxJS
[7]: http://karma-runner.github.io/
[8]: http://localhost:3000