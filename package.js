Package.describe({
  summary: "session-bind - two way data bindings between session variables and spacebars template html forms. Useful for reactive UI forms, eg. number of results.",
  version: "0.1.0",
  git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');
  api.use(['spacebars', 'templating', 'session', 'underscore', 'deps'], 'client');
  api.addFiles('lsm.session-bind.js', ['client']);
  api.export('sessionBind');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('lsm:session-bind');
  api.addFiles('lsm:session-bind-tests.js');
});
