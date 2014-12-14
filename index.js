/**
 * DOM related functions
 */

define('mobileViewportScale', ['map'], function (map) {

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
    var viewports = [];
    var viewport = null;
    var parentNode = null;
    var metas = document.getElementsByTagName('meta');

    var ua = navigator.userAgent;
    for (var i = 0; i < metas.length; i++) {
      var m = metas[i];
      if (m.name == "viewport") {
        viewports.push(m);
      }
    }
    for (var i = 0; i < viewports.length; i++) {
      viewport = viewports[i];
      parentNode = viewport.parentNode;
      parentNode.removeChild(viewport);
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

  return {
    setDevice: setDeviceViewPort,
    getZoom: getZoomLevel,
    getRatio: getRatio,
    getDocumentWidth: getDocumentWidth
  };
});
