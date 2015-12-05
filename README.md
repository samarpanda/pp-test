## Address book [![Build Status](https://travis-ci.org/samarpanda/pp-test.svg?branch=master)](https://travis-ci.org/samarpanda/pp-test)


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
Implemented CRUD using express & MongoDB. REST API up & running on [heroku][11].

1. Create contact
```text
request
url  => 'https://heroku-pp-test.herokuapp.com/contacts'
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
url  => 'https://heroku-pp-test.herokuapp.com/contacts'
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
url  => 'https://heroku-pp-test.herokuapp.com/contacts/:id'
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
url  => 'https://heroku-pp-test.herokuapp.com/contacts/:id'
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
url  => 'https://heroku-pp-test.herokuapp.com/contacts/filter/:name'
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

## Demo

Don't miss to check out the demo at [http://samarpanda.github.io/pp-test/][11]

## List of todos

1. Create / Update from UI
1. Combining search result & list view
1. Test suite using [ava][13]
1. Multiple browser testing using [karma][7] and [saucelabs][9]
1. Refactor the repetative codes


[1]: https://webpack.github.io/
[2]: http://es6-features.org/
[3]: http://expressjs.com/
[4]: https://facebook.github.io/react/
[5]: https://babeljs.io/
[6]: https://github.com/Reactive-Extensions/RxJS
[7]: http://karma-runner.github.io/
[8]: http://localhost:3000
[9]: https://saucelabs.com/
[10]: http://heroku.com/
[11]: http://samarpanda.github.io/pp-test/
[12]: https://heroku-pp-test.herokuapp.com/
[13]: https://www.npmjs.com/package/ava
[14]: https://mongolab.com