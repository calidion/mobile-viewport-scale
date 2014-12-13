define('os', function () {

  // OS specific patterns and related viewport names
  var os = [
    {
      'pattern': /android/,
      'name': 'android'
    }, {
      'pattern': /iphone/,
      'name': 'iphone'
    }
  ];
  return os;
});