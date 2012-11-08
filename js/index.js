var show, ref$, exec, spawn, fs, cli, command, paramater, run, slice$ = [].slice;
show = console.log;
ref$ = require('child_process'), exec = ref$.exec, spawn = ref$.spawn;
fs = require('fs');
cli = slice$.call(process.argv, 2);
command = cli[0];
paramater = slice$.call(cli, 1);
(run = function(){
  var runner, x$, y$;
  show("\x1b[1;30mRestart...\x1b[0m");
  runner = spawn(command, paramater);
  runner.set;
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