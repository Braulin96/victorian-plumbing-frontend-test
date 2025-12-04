export const formatPrice = (value) => {
  if (value === null || value === undefined || isNaN(value)) return "0.00";
  return value.toFixed(2);
};

export const calculateSavings = (original, discounted) => {
  if (!original || !discounted) return 0;
  return +(original - discounted).toFixed(2);
};
