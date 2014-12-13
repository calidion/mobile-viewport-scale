define('map', ['data/device', 'data/os', 'data/browser', 'data/viewport'], function (devices, oses, browsers, viewports) {

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
    return 'android';
  }

  /**
   * Get the viewport info
   * @param {String} userAgent    - Browser user agent
   * @returns {Object}
   */

  function parse(userAgent) {
    userAgent = userAgent || navigator.userAgent;
    var name = getName(userAgent);
    return viewports[name];
  }

  return {
    parse: parse
  }
});