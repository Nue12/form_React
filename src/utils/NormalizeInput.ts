export const normalizePhNoInput = (
  value: string,
  previousValue: string | undefined
): string | undefined => {
  const currentValue = value.replace(/[^\d]/g, "");
  const cvLength = currentValue.length;

  if (!previousValue || value.length > previousValue.length) {
    if (cvLength < 2) return currentValue;
    if (cvLength < 6)
      return `(${currentValue.slice(0, 2)}) ${currentValue.slice(2)}`;
    if (cvLength < 9)
      return `(${currentValue.slice(0, 2)}) ${currentValue.slice(
        2,
        5
      )}-${currentValue.slice(5, 8)}`;
    return `(${currentValue.slice(0, 2)}) ${currentValue.slice(
      2,
      5
    )}-${currentValue.slice(5, 8)}-${currentValue.slice(8, 11)}`;
  }
};
