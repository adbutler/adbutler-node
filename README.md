# AdButler node.js bindings

[![Build Status](https://travis-ci.org/adbutler/adbutler-node.svg?branch=master)](https://travis-ci.org/adbutler/adbutler-node)

These bindings are intended for use on the server side because they deal with
secret keys explicitly.
DO NOT use them in the browser.

## Installation
Install using the following NPM command:

`npm install --save adbutler`

This will save the AdButler dependency in `package.json`.

## Usage

The first step is to load the library by requiring it.

```js
var AdButler = require('adbutler');
```

Next, create an `adButler` instance.
You can pass in your secret API key in the configuration object as shown below.

```js
var adButler = new AdButler({
    'apiKey': 'YOUR_API_KEY'
})
```

Every resource can be accessed via the `adButler` instance and supports `create`,
`read`, `update`, `delete`, and `list` operations.
The library supports callback based and promise based usage.
Pick the programming style you like.
A brief overview of both follows.

### Callback based usage
Every resource method accepts a callback function as the last argument.
Following [Node.js](https://nodejs.org/en/) convention, the error object is
always passed as the first argument to the callback function, and is `null` if
no error occurred.
Here is a simple example.

```js
adButler.advertisers.read(123, function(error, data) {
  // error is null on success
  if (error) {
	console.log(error); // some error occurred
  } else {
	console.log(data); // the response data
  }
});
```

### Promise based usage
Every resource method returns a promise if no callback function is given.

```js
// Create a new media group
adButler.mediaGroups.create({
  "name": "Demo Media Group"
}).then(function(mediaGroup) {
  // Create a new image creative
  return adButler.creatives.image.create({
	'file': 'image-ad.png', // this file must exist where the script is executed
	'group': mediaGroup.id,
	'name': 'My Image Creative',
	'description': 'This is a description of my image creative.'
  });
}).then(function(imageCreative){
  // Create a new image banner
  return adButler.banners.image.create({
	'name': 'My Image Banner',
	'width': 300,
	'height': 250,
	'creative': imageCreative.id
  });
}).then(function(imageBanner) {
  // New image banner created in a new media group
}).catch(function(error) {
  // Deal with the error
});
```

## Configuration

 * `adButler.set('apiKey', 'your_SECRET_api_key ');`
 * `adButler.set('timeout', 20000); // in ms` (default is node's default: `120000ms`)
 
## Documentation
See our [detailed API documentation](http://adbutler.com/docs/api/?node).

## Development

Run the tests using [`npm`](https://www.npmjs.com/):

```bash
$ npm install
$ npm test
```

If you wish, you may run tests using your AdButler *Test* API key by setting
the environment variable `ADBUTLER_TEST_API_KEY` before running tests:

```bash
$ export ADBUTLER_TEST_API_KEY='your_api_key'
$ npm test
```

*Note: On Windows use `SET` instead of `export` for setting the
`ADBUTLER_TEST_API_KEY` environment variable.*

## License
© 2016 SparkLIT. Released under the MIT license.
