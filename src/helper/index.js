const formatMoney = money => {
  if (!money) {
    return 0;
  }
  return money.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
};
export {formatMoney};
