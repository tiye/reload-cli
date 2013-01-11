
rl = require "readline"
face = rl.createInterface
  input: process.stdin
  output: process.stdout

do ask = ->
  face.question "say something? ", (anwser) ->
    console.log "got", anwser
    ask()