

var devices = require('./data/device');
var oses = require('./data/os');
var browsers = require('./data/browser');
var viewports = require('./data/viewport');

  /**
   * Get viewport name from user agent
   * @param {String} userAgent    - Browser user agent
   * @returns {Object}
   */
  function getName(userAgent) {
    userAgent = userAgent.toLowerCase();

    var i = 0;

    //The precedence of the items should be well organized

    var checkers = [devices, oses, browsers];

    for(var i = 0; i < checkers.length; i++) {
      var checker = checkers[i];
      for(var j = 0; j < checker.length; j++) {
        if (checker[i].pattern.test(userAgent)) {
          return checker[i].pattern.name;
        }
      }
    }
    return null;
  }

  /**
   * Get the viewport info
   * @param {String} userAgent    - Browser user agent
   * @returns {Object}
   */

  function parse(userAgent) {
    userAgent = userAgent || navigator.userAgent;
    var name = getName(userAgent);
    if (name) {
      return viewports[name];
    }
    return null;
  }

  module.exports =  {
    parse: parse
  };