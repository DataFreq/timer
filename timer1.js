//sys sound does not work

let cliArgs = process.argv.slice(2).sort(function (a, b) {
  return a - b
})

return cliArgs.map(element => 
  setTimeout(function() {
    console.log(`[ALERT] - ${element}secs`);
  }, element * 1000)
);