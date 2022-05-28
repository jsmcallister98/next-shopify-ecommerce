export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
