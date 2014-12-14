require.config({
  baseUrl: '',
  paths: {
    os: '../data/os',
    browser: '../data/browser',

    map: '../map',
    mobileViewportScale: '../index',
    boot: '../boot'
  },
  deps: ['boot']
});
