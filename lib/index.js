(function (module) {
  var browsers = [
    {
      'pattern': /android/,
      'name': 'android'
    }, {
      'pattern': /iphone/,
      'name': 'iphone'

    }
  ];

// Device specific patterns and related viewport names

  var devices = [{
    'pattern': /sm-n9008s/,
    'name': 'android'
  }];

// OS specific patterns and related viewport names
  var oses = [
    {
      'pattern': /android/,
      'name': 'android'
    }, {
      'pattern': /iphone/,
      'name': 'iphone'
    }
  ];


  var viewports = {

    //Default names
    'android': {
      width: 'device-width',
      'init-scale': 0
    },
    'iphone': {
      width: 'device-width',
      'init-scale': 0.5,
      'maximum-scale': 1.0
    },


    //Device dependent names
    'smn9008s': {
      width: 'device-width',
      'init-scale': 0
    }
  };

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

    for (var i = 0; i < checkers.length; i++) {
      var checker = checkers[i];
      for (var j = 0; j < checker.length; j++) {
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

  var map = {
    parse: parse
  };


  /**
   * DOM related functions
   */

  /**
   * Set viewport by browser's user agent
   * @param {String} userAgent    - Browser user agent
   */
  function setDeviceViewPort(userAgent) {
    var viewport = map.parse(userAgent);

    if (viewport) {
      setViewport(viewport.width, viewport.userScalable, viewport['init-scalable'], viewport['minimum-scale'], viewport['maximum-scale']);
    }

  }

  /**
   * Clear previous defined viewport info
   */

  function clearPredefinedViewports() {
    var vps = [];
    var vp = null;
    var parentNode = null;
    var metas = document.getElementsByTagName('meta');

    var ua = navigator.userAgent;
    for (var i = 0; i < metas.length; i++) {
      var m = metas[i];
      if (m.name == "viewport") {
        vps.push(m);
      }
    }
    for (var i = 0; i < vps.length; i++) {
      vp = vps[i];
      parentNode = vp.parentNode;
      parentNode.removeChild(vp);
    }
    return parentNode;
  }

  /**
   * Get current zoom level
   * @returns {number}
   */

  function getZoomLevel() {
    return screen.width / window.innerWidth;
  }

  /**
   * Get document width
   * @returns {number}
   */
  function getDocumentWidth() {
    return document.documentElement.clientWidth;
  }

  /**
   * Get ratio
   * @returns {number}
   */
  function getRatio() {
    return document.documentElement.clientWidth / window.innerWidth;
  }

  /**
   * Set viewport
   *
   * @param width
   * @param userScalable
   * @param initScale
   * @param minScale
   * @param maxScale
   */
  function setViewport(width, userScalable, initScale, minScale, maxScale) {
    console.log(arguments);
    var parentNode = clearPredefinedViewports();

    var contents = [];

    if (width) {
      contents.push('width=' + width);
    } else {
      contents.push('width=device-width');
    }

    if (userScalable) {
      contents.push('user-scalable=' + userScalable);
    }

    if (initScale) {
      contents.push('initial-scale=' + initScale);
    }

    if (minScale) {
      contents.push('minimum-scale=' + minScale);
    }

    if (maxScale) {
      contents.push('maximum-scale=' + maxScale);
    }

    viewport = document.createElement('meta');
    viewport.setAttribute('name', 'viewport');
    viewport.setAttribute('content', contents.join(','));
    if (!parentNode) {
      parentNode = document.getElementsByTagName('head')[0];
    }
    try {
      parentNode.appendChild(viewport);
    } catch (e) {
      console.log(e);
    }
  }

  var mvs = {
    setDevice: setDeviceViewPort,
    getZoom: getZoomLevel,
    getRatio: getRatio,
    getDocumentWidth: getDocumentWidth
  };

  if (module) {
    module.mvs = mvs;
  } else {
    module = typeof window != 'undefined' ? window : {mvs: mvs};
  }
})(module);
