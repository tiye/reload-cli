var log, show, ref$, exec, spawn, fs, cli, command, paramater, runner, run, slice$ = [].slice;
log = console.log;
show = require("util").print;
ref$ = require('child_process'), exec = ref$.exec, spawn = ref$.spawn;
fs = require('fs');
cli = slice$.call(process.argv, 2);
command = cli[0];
paramater = slice$.call(cli, 1);
runner = {};
(run = function(){
  var x$, y$;
  if (runner != null) {
    if (runner.kill != null) {
      runner.kill();
    }
  }
  log("\x1b[1;30mRestart...\x1b[0m");
  runner = spawn(command, paramater);
  x$ = runner;
  y$ = x$.stdout;
  y$.setEncoding('utf8');
  y$.on('data', function(it){
    return show(it);
  });
  x$ = runner;
  y$ = x$.stderr;
  y$.setEncoding('utf8');
  y$.on('data', function(it){
    return show(it);
  });
  return x$;
})();
paramater.forEach(function(it){
  var stat;
  if (fs.existsSync(it)) {
    stat = fs.statSync(it);
    if (!stat.isDirectory()) {
      return fs.watchFile(it, {
        interval: 100
      }, function(curr, prev){
        return run();
      });
    }
  }
});