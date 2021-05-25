const formatMoney = money => {
  if (!money) {
    return 0;
  }
  return money.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
};
const getRatio = (up, down, defaultRatio = 1) => {
  console.log(up, down);
  if (!up || !down) {
    return defaultRatio;
  }
  if (typeof up !== 'number' || typeof down !== 'number') {
    return defaultRatio;
  }
  if (down === 0) {
    return defaultRatio;
  }
  return up / down;
};
export {formatMoney, getRatio};
