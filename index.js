/**
 * instyle - index.js
 * Created by mds on 15/6/4.
 */

'use strict';

var camelCase = require('lodash.camelcase');
var parse = require('css-parse');

module.exports = function(contents){
    var cssRules = parse(contents).stylesheet.rules;
    var styles = {};
    cssRules.map(function (rule) {
        if (rule.type != 'rule') return;
        var key = rule.selectors[0].slice(1);
        styles[key] = {};
        rule.declarations.map(function (value) {
            styles[key][camelCase(value.property)] = value.value;
        });
    });
    return "module.exports = " + JSON.stringify(styles) + ";";
};