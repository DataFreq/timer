//sys sound does not work

let cliArgs = process.argv.slice(2).sort((a, b) => a - b).filter(x => x > -1)

return cliArgs.map(element => 
  setTimeout(function() {
    console.log(`[ALERT] - ${element}secs`);
  }, element * 1000)
);