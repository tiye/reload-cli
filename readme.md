
## Reload CLI: A command to reload your command when file changes.

#### Installation

```
npm install -g reload-cli
echo complete -o filenames -F _root_command reload >> ~/.bashrc
```
You may need `sudo` to run `npm`.  
[The second line is to make auto-completion work.](http://www.snowhawkyrf.name/2012/06/set-command-to-auto-complete-in-command.html)

#### Notice

In the `test/` directory, there a readline demo, you can try:  
```
cd test/
node-dev ../bin/reload.js coffee readline.coffee
```
`reload-cli` works with readline, but there's [bug][bug] while used for Haskell scripts.  
I'll update this when I solve this.  
[bug]: http://stackoverflow.com/questions/14234688/how-to-totally-redirect-stdin-and-stdout-with-node-js

#### Usage

```
reload python script.py b.py
```

For example, you want to run `python file.py b.py` frequently  
to see the result, as you write the script.  
`reload` will read the paramaters as `['script.py', 'b.py']`,  
if the paramater points to a file, `reload` will watch it.  
Then, the command restarts when file changes are caught.  