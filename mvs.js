define('mvs', ['mobileViewportScale'], function(mvs) {
  if (typeof window != 'undefined') {
    console.log(mvs);
    console.log("inside mvs");
    return window.mvs = mvs;
  }
  return  mvs;
});