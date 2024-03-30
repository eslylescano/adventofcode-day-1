import { sumOfCalibrationValues } from "../src";

describe('sumOfCalibrationValues', () => {
    it('returns the sum of calibration values for a single line', () => {
      const document = ['1abc2'];
      expect(sumOfCalibrationValues(document)).toBe(12);
    });
  });