var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');

var sentryKey = '315e6d134647442fbbe411c47cf806f5';
var sentryApp = '100106';
var sentryURL = 'https://' + sentryApp + '@sentry.io/' + sentryKey;

var _APP_INFO = {
  name: 'GitHub Battle',
  branch: '4',
  version: '1.0'
}

Raven.config(sentryURL, {
  release: _APP_INFO.version,
  tags: {
    branch: _APP_INFO.branch
  }
}).install();

console.log(this.loalal.again);

ReactDOM.render(
  routes,
  document.getElementById('app')
);