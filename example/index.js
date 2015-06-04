/**
 * instyle - index.js
 * Created by mds on 15/6/4.
 */

'use strict';

var fs = require('fs');
var instyle = require('../');
var css = fs.readFileSync('example.css').toString();

console.log(instyle(css));