var mainWindow;

var showProgressWindow = function(divId) {
  // create a deferred object
  var deferred = $.Deferred();

  mainWindow = document.getElementById('mainWindow').innerHTML
  document.getElementById('mainWindow').innerHTML = document.getElementById(divId).innerHTML;
  setTimeout(function() {
    console.log("progress window was shown");
    deferred.done(showMainWindow());
    deferred.resolve();
  }, 2500);
};

var showMainWindow = function() {
  document.getElementById('mainWindow').innerHTML = mainWindow;
};

