/**
 * Round a number to a given number of whole digits.
 *
 * @param number The number to be rounded.
 * @param round The number of whole digits to round to.
 *
 * @returns The rounded whole number.
 */
export function roundWholeNumber(number: number, round = 0): number {
  const factor = 10 ** round;

  return Math.round(number / factor) * factor;
}

/**
 * Round a number to a given number of decimal digits.
 *
 * @param number The number to be rounded.
 * @param round The number of decimal digits to round to.
 *
 * @returns The rounded decimal number.
 */
export function roundDecimalNumber(number: number, round = 0): number {
  const factor = 10 ** round;

  return Math.round(number * factor) / factor;
}
