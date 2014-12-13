define('viewport', function () {

  var viewports = {

    //default names
    'android': {
      width: 'device-width',
      'init-scale': 0
    },
    'iphone': {
      width: 'device-width',
      'init-scale': 0.5,
      'maximum-scale': 1.0
    },


    //device dependent names
    'smn9008s': {
      width: 'device-width',
      'init-scale': 0
    }
  };
  return viewports;
});