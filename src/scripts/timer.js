function timestamp(value = Date.now()) {
  const date = new Date(value);
  return date.valueOf();
}

function convert(ms) {
  const seconds = ms / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const last = t => Math.floor(t % 60);
  return {
    seconds: last(seconds),
    minutes: last(minutes),
    hours: Math.floor(hours),
    days: Math.floor(days)
  };
}

function getTime(outDate) {
  const arrOut = outDate.split("T");
  const arrOutDate = arrOut[0].split("-");
  const arrOutTime = arrOut[1].split(":");
  const current = timestamp();
  const out = timestamp(
    new Date(
      arrOutDate[0],
      arrOutDate[1],
      arrOutDate[2],
      arrOutTime[0],
      arrOutTime[1],
      arrOutTime[2]
    )
  );
  const ost = out - current;
  if (ost <= 0) return;
  return convert(ost);
}

export default getTime;

// window.onload = function() {
//   window.setInterval(() => {
//     console.log(getTime("2018-03-28T23:00:00"));
//   }, 1000);
// };
