const formatPrice = (price: string) => {
  const number = Number(price.slice(1));

  return "$" + new Intl.NumberFormat().format(number);
};

export default formatPrice;
