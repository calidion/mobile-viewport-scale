require.config({
  baseUrl: '',
  paths: {
    os: '../data/os',
    browser: '../data/browser',

    map: '../map',
    mobileViewportScale: '../index',
    release: '../mvs'
  },
  deps: ['release']
});
