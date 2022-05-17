const sortJunction = (boxlist) => {
  const logBody = s => s.slice(s.indexOf(' ') + 1); // get the body after identifier
  const isNum = n => /\d/.test(n); //identifies numeric log body 

  // if body is the same then compare the identifier
  const compare = (a, b) => {
    const n = logBody(a).localeCompare(logBody(b));
    if (n !== 0) return n;
    return a.localeCompare(b);
  };

  const digitLogs = [];
  const letterLogs = [];
  
  //Assign logs
  for (const log of boxlist) {
    if (isNum(logBody(log))) 
      digitLogs.push(log);
    else letterLogs.push(log);
  }
  return [...letterLogs.sort(compare), ...digitLogs];
};

