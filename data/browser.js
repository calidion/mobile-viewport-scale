define('browser', function () {

  // Browser specific patterns and related viewport names
  var browsers = [
    {
      'pattern': /android/,
      'name': 'android'
    }, {
      'pattern': /iphone/,
      'name': 'iphone'

    }
  ];
  return browsers;
});