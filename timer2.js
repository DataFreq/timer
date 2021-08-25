const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');


// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  let num = ['\u0030', '\u0031', '\u0032', '\u0033', '\u0034', '\u0035', '\u0036', '\u0037', '\u0038', '\u0039'];
  
  if(num.includes(key)){
    console.log(`Setting timer for ${key} seconds...`)
    setTimeout( () => {
      console.log(`[ALERT]`)
    }, key * 1000);
  };

  if(key.match('b')) 
  console.log('[BEEP]')

  if (key === '\u0003') {
  process.exit();
  }
});