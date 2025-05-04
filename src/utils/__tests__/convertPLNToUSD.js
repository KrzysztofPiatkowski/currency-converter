import { convertPLNToUSD } from './../convertPLNToUSD';

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });
  it('should return NaN when input is text', () => {
    expect(convertPLNToUSD('6')).toBeNaN();
    expect(convertPLNToUSD('avocado')).toBeNaN();
    expect(convertPLNToUSD('xyx')).toBeNaN();
    expect(convertPLNToUSD('-45')).toBeNaN();
  });
  it('should return NaN when input is empty', () => {
    expect(convertPLNToUSD('')).toBeNaN();
  });
  it('should return "Error" when input is neither text nor number', () => {
    expect(convertPLNToUSD(null)).toBe('Error');
    expect(convertPLNToUSD([])).toBe('Error');
    expect(convertPLNToUSD({})).toBe('Error');
    expect(convertPLNToUSD(true)).toBe('Error');
    expect(convertPLNToUSD(function() {})).toBe('Error');
  });
  it('should return "$0.00" when input is lower than 0', () => {
    expect(convertPLNToUSD(-1)).toBe('$0.00');
    expect(convertPLNToUSD(-7)).toBe('$0.00');
    expect(convertPLNToUSD(-1.5)).toBe('$0.00');
    expect(convertPLNToUSD(-1527.852)).toBe('$0.00');
  });
});
