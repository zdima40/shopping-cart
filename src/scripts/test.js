l = a => {
  const x = el => {
    let i = a.indexOf(el);
    if (++i >= a.length) {
      i = 0;
    }
    return a[i];
  };
  let el = a[0];
  setInterval(() => {
    console.log(el);
    el = x(el);
  }, 1000);
};
l([1, 2, 3]);
