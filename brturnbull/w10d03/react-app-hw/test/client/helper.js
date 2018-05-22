// switching environment from dev/productio to test to avoid storing anything
process.env.NODE_ENV = 'test';
require('babel-register')();

// "dont load in any of the below extensions: .css, .scss, .png, .jpg"
function nullFunc() {
  return null;
}

require.extensions['.css'] = nullFunc;
require.extensions['.scss'] = nullFunc;
require.extensions['.png'] = nullFunc;
require.extensions['.jpg'] = nullFunc;


const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

configure({ adapter: new Adapter() });

//the fake dom we will use for testing
const { JSDOM } = require('jsdom');

// creating the basic html page we are going to upload the test components to
const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

// this mimics the "window"
window.localStorage = (function(){
  var storage = {};

  // custom code for our testing - using fake local storage as the fake window doesnt automatically have it
  return {
    getItem: function(key) {
      return storage[key];
    },
    removeItem: function(key) {
      delete storage[key];
    },
    setItem: function(key, item) {
      storage[key] = item;
    }
  };
})();

// copying everything to "global" for it to be globally accessible
function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}
// using atob in our auth lib file but as its a browser thing we need to add it to the test/fake window
global.atob = require('atob');
global.window = window;
global.document = window.document;
// navigator is the browser (eg. window.navigator.useragent.chrome)
global.navigator = {
  userAgent: 'node.js'
};
copyProps(window, global);

// this was just in the documentation......
documentRef = document; //eslint-disable-line no-undef
