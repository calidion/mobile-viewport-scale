define('os', function () {

  // OS specific patterns and related viewport names
  return [
    {
      'pattern': /android/,
      'name': 'android'
    }, {
      'pattern': /iphone/,
      'name': 'iphone'
    }
  ];
});