const makeChange = (c) => {
  const change = { q: 0, d: 0, n: 0, p: 0 };

  change.q = Math.floor(c / 25);
  c %= 25;

  change.d = Math.floor(c / 10);
  c %= 10;

  change.n = Math.floor(c / 5);
  c %= 5;

  change.p = c;

  return change;
};

// Do not change the code below
const c = parseInt(prompt("Enter c: "), 10);
alert(JSON.stringify(makeChange(c)));

