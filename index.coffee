
require 'colors'
print = require("util").print
{exec, spawn} = require "child_process"
fs = require "fs"

cli = process.argv[2..]
process.stdin.resume()

# print cli
command = cli[0]
paramater = cli[1..]

runner = {}

do run = ->
  runner?.kill?()
  runner = spawn command, paramater
  process.stdin.pipe runner.stdin
  runner.stdout.pipe process.stdout
  runner.stderr.pipe process.stderr

paramater.forEach (item) ->
  if fs.existsSync item
    stat = fs.statSync item
    unless stat.isDirectory()
      fs.watchFile item, interval: 100, (curr, prev) ->
        print "\n\nRestarting...\n\n".blue
        do run