const currency_format = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency",
});

export default function FormatCurrency(number) {
  return currency_format.format(number);
}
